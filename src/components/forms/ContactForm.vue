<script setup>
import { reactive, ref, computed } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const touched = reactive({
  name: false,
  email: false,
  subject: false,
  message: false,
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitStatus = ref('idle') // 'idle' | 'submitting' | 'success' | 'error'
const submitError = ref('')

/** FormSubmit recipient; must be set at build time via `.env`. */
const contactRecipient = (import.meta.env.VITE_CONTACT_EMAIL ?? '').trim()
const isContactConfigured = contactRecipient.length > 0

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isSubmitting = computed(() => submitStatus.value === 'submitting')

function validateField(field) {
  const v = form[field]?.trim() ?? ''
  switch (field) {
    case 'name':
      errors.name = v.length < 2 ? 'Please enter your name (at least 2 characters).' : ''
      break
    case 'email':
      errors.email = !v
        ? 'Email is required.'
        : !emailPattern.test(v)
          ? 'Enter a valid email address.'
          : ''
      break
    case 'subject':
      errors.subject = v.length < 2 ? 'Please enter a subject.' : ''
      break
    case 'message':
      errors.message = v.length < 10 ? 'Message must be at least 10 characters.' : ''
      break
    default:
      break
  }
}

function validateAll() {
  ;['name', 'email', 'subject', 'message'].forEach((f) => {
    touched[f] = true
    validateField(f)
  })
  return !errors.name && !errors.email && !errors.subject && !errors.message
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  Object.keys(touched).forEach((k) => {
    touched[k] = false
  })
  Object.keys(errors).forEach((k) => {
    errors[k] = ''
  })
}

function onBlur(field) {
  touched[field] = true
  validateField(field)
}

function onInput(field) {
  if (touched[field]) validateField(field)
}

/**
 * FormSubmit: POST JSON to https://formsubmit.co/ajax/YOUR_EMAIL
 * Pehli baar submit par FormSubmit aapke inbox mein activation link bhejta hai — link confirm karo.
 * @see https://formsubmit.co/
 */
async function sendMessage() {
  if (!isContactConfigured) {
    throw new Error(
      'Contact form is not configured. Copy `.env.example` to `.env`, set VITE_CONTACT_EMAIL to your inbox address, then restart the dev server.'
    )
  }

  const url = `https://formsubmit.co/ajax/${encodeURIComponent(contactRecipient)}`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      _subject: `Portfolio contact: ${form.subject}`,
      _replyto: form.email,
      _template: 'table',
      _captcha: false,
    }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* non-JSON body */
  }

  if (!res.ok) {
    const msg =
      typeof data === 'object' && data !== null && 'message' in data
        ? String(data.message)
        : 'Could not send message. Please try again.'
    throw new Error(msg)
  }
}

async function onSubmit() {
  submitError.value = ''
  submitStatus.value = 'idle'

  if (!validateAll()) {
    submitStatus.value = 'error'
    submitError.value = 'Please fix the errors below.'
    return
  }

  submitStatus.value = 'submitting'

  try {
    await sendMessage()
    submitStatus.value = 'success'
    resetForm()
  } catch (e) {
    submitStatus.value = 'error'
    submitError.value = e instanceof Error ? e.message : 'Something went wrong.'
  }
}
</script>

<template>
  <form class="bg-light p-4 p-md-5 contact-form" novalidate @submit.prevent="onSubmit">
    <div
      v-if="!isContactConfigured"
      class="alert alert-warning"
      role="status"
    >
      Contact form is not configured. Copy
      <code class="small">.env.example</code>
      to
      <code class="small">.env</code>
      , set
      <code class="small">VITE_CONTACT_EMAIL</code>
      to the email that should receive messages, then restart the dev server.
    </div>
    <div
      v-if="submitStatus === 'success'"
      class="alert alert-success"
      role="status"
    >
      Thanks — your message was sent successfully.
    </div>
    <div
      v-else-if="submitStatus === 'error' && submitError"
      class="alert alert-danger"
      role="alert"
    >
      {{ submitError }}
    </div>

    <div class="form-group">
      <label class="sr-only" for="contact-name">Your Name</label>
      <input
        id="contact-name"
        v-model.trim="form.name"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': touched.name && errors.name }"
        name="name"
        autocomplete="name"
        placeholder="Your Name"
        :disabled="isSubmitting || !isContactConfigured"
        @blur="onBlur('name')"
        @input="onInput('name')"
      />
      <div v-if="touched.name && errors.name" class="invalid-feedback d-block">
        {{ errors.name }}
      </div>
    </div>

    <div class="form-group">
      <label class="sr-only" for="contact-email">Your Email</label>
      <input
        id="contact-email"
        v-model.trim="form.email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': touched.email && errors.email }"
        name="email"
        autocomplete="email"
        placeholder="Your Email"
        :disabled="isSubmitting || !isContactConfigured"
        @blur="onBlur('email')"
        @input="onInput('email')"
      />
      <div v-if="touched.email && errors.email" class="invalid-feedback d-block">
        {{ errors.email }}
      </div>
    </div>

    <div class="form-group">
      <label class="sr-only" for="contact-subject">Subject</label>
      <input
        id="contact-subject"
        v-model.trim="form.subject"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': touched.subject && errors.subject }"
        name="subject"
        placeholder="Subject"
        :disabled="isSubmitting || !isContactConfigured"
        @blur="onBlur('subject')"
        @input="onInput('subject')"
      />
      <div v-if="touched.subject && errors.subject" class="invalid-feedback d-block">
        {{ errors.subject }}
      </div>
    </div>

    <div class="form-group">
      <label class="sr-only" for="contact-message">Message</label>
      <textarea
        id="contact-message"
        v-model.trim="form.message"
        name="message"
        cols="30"
        rows="7"
        class="form-control"
        :class="{ 'is-invalid': touched.message && errors.message }"
        placeholder="Message"
        :disabled="isSubmitting || !isContactConfigured"
        @blur="onBlur('message')"
        @input="onInput('message')"
      ></textarea>
      <div v-if="touched.message && errors.message" class="invalid-feedback d-block">
        {{ errors.message }}
      </div>
    </div>

    <div class="form-group">
      <input
        type="submit"
        :value="isSubmitting ? 'Sending…' : 'Send Message'"
        class="btn btn-primary py-3 px-5"
        :disabled="isSubmitting || !isContactConfigured"
      />
    </div>
  </form>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
