<script setup>
defineProps({
  label: { type: String, required: true },
  percent: { type: Number, required: true },
  colorClass: { type: String, required: true },
  ariaValue: { type: Number, default: undefined },
})

</script>

<template>
  <div class="col-md-6 animate-box">
    <div class="progress-wrap ftco-animate">
      <h3>{{ label }}</h3>
      <div class="progress">
        <div
          class="progress-bar"
          :class="colorClass"
          role="progressbar"
          :aria-valuenow="ariaValue ?? percent"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: `${percent}%` }"
        >
          <span>{{ percent }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>
