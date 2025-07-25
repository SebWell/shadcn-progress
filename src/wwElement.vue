<template>
  <div :class="progressClasses">
    <div 
      :class="indicatorClasses"
      :style="indicatorStyle"
    />
    
    <div v-if="showLabel" :class="labelClasses">
      <span v-if="labelText">{{ labelText }}</span>
      <span v-else>{{ Math.round(normalizedValue) }}%</span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebProgress',
  props: {
        // Individual props will be auto-generated based on the component type
        // This is a placeholder that will be manually refined per component
    },
  setup(props) {
    const normalizedValue = computed(() => {
      const value = Math.min(Math.max(props.value || 0, 0), props.max || 100)
      return (value / (props.max || 100)) * 100
    })

    const sizeClasses = {
      'sm': 'h-2',
      'default': 'h-4',
      'lg': 'h-6'
    }

    const colorClasses = {
      'primary': 'bg-primary',
      'secondary': 'bg-secondary',
      'destructive': 'bg-destructive',
      'success': 'bg-green-500',
      'warning': 'bg-yellow-500'
    }

    const progressClasses = computed(() => cn(
      "relative w-full overflow-hidden rounded-full bg-secondary",
      sizeClasses[props.size] || sizeClasses.default,
      props.customClasses
    ))

    const indicatorClasses = computed(() => cn(
      "h-full w-full flex-1 transition-all duration-300 ease-in-out",
      colorClasses[props.color] || colorClasses.primary
    ))

    const indicatorStyle = computed(() => ({
      transform: `translateX(-${100 - normalizedValue.value}%)`
    }))

    const labelClasses = computed(() => cn(
      "absolute inset-0 flex items-center justify-center text-xs font-medium text-primary-foreground"
    ))

    return {
      normalizedValue,
      progressClasses,
      indicatorClasses,
      indicatorStyle,
      labelClasses
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 