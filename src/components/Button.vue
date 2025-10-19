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
  'font-[Montserrat] flex items-center justify-center rounded-[10px] font-[450] bg-[#456276] text-[20px] lg:text-[22px] text-white tracking-normal leading-[100%] px-[44.59px] lg:px-[54px] py-[9px]'
</script>

<template>

  <button :type="type" :class="[baseStyles, classes]">
    <img v-if="icon && iconPosition === 'left'" :src="icon" alt="icon"
      class="w-[43.95px] lg:w-[46px] h-43.95px] lg:h-[46px] mr-2" />
    <slot></slot>
    <img v-if="icon && iconPosition === 'right'" :src="icon" alt="icon" class="w-5 h-5 ml-2" />
  </button>

</template>