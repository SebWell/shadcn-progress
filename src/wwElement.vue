<template>
  <div :class="progressClasses">
    <div 
      :class="indicatorClasses"
      :style="indicatorStyle"
    />
    
    <div v-if="content.showLabel" :class="labelClasses">
      <span v-if="content.labelText">{{ content.labelText }}</span>
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
    content: {
      type: Object,
      required: true,
      default: () => ({
        value: 0,
        max: 100,
        size: 'default',
        showLabel: false,
        labelText: '',
        color: 'primary',
        customClasses: ''
      })
    }
  },
  setup(props) {
    const normalizedValue = computed(() => {
      const value = Math.min(Math.max(props.content.value || 0, 0), props.content.max || 100)
      return (value / (props.content.max || 100)) * 100
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
      sizeClasses[props.content.size] || sizeClasses.default,
      props.content.customClasses
    ))

    const indicatorClasses = computed(() => cn(
      "h-full w-full flex-1 transition-all duration-300 ease-in-out",
      colorClasses[props.content.color] || colorClasses.primary
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