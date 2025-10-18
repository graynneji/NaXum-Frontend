<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String,
    default: 'left'
  },
  classes: {
    type: String,
    default: ''
  }
})
const baseStyles =
  'flex items-center justify-center rounded-[10px] bg-[#456276] text-[22px] text-white tracking-normal leading-[100%] px-[54px] py-[9px]'
</script>

<template>

  <button :type="type" :class="[baseStyles, classes]">
    <img 
      v-if="icon && iconPosition === 'left'"
      :src="icon"
      alt="icon"
      class="w-auto h-auto mr-2"
    />
    <slot></slot>
    <img
      v-if="icon && iconPosition === 'right'"
      :src="icon"
      alt="icon"
      class="w-5 h-5 ml-2"
    />
  </button>

</template>