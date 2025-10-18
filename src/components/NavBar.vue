<script setup>
import { ref } from 'vue'

const activeItem = ref('HOME')

const setActive = (item) => {
  activeItem.value = item
  scrollToImage()
}

const scrollToImage = () => {
  const el = document.getElementById('bella-grace-image')
  if (el) {
    el.scrollIntoView({ behavior: 'auto' })
  }
}
</script>

<template>
    <nav class="flex flex-col gap-[33px] justify-normal my-auto pt-[40px] h-[180px] lg:flex-row lg:justify-between items-center lg:h-[180px] lg:pt-0 lg:pb-0">
        <picture>
            <img src="/LOGO.svg" alt="Logo" class="w-[125px] h-[36px] lg:w-auto lg:h-auto"/>
        </picture>
        <div class="flex justify-between w-full gap-0 lg:gap-[119px] lg:w-auto px-[25px] lg:pb-0">
            <ul class="hidden sm:flex w-[458px] justify-between font-normal text-[16px] tracking-[0.02em] text-[#99A1A5]">
                <li :class="activeItem === 'HOME' ? 'text-[#416887]' : ''"
                @click="setActive('HOME')"><a href="#">HOME</a></li>
                <li :class="activeItem === 'SHOP' ? 'text-[#416887]' : ''"
                @click="setActive('SHOP')"><a href="#">SHOP</a></li>
                <li :class="activeItem === 'ABOUT US' ? 'text-[#416887]' : ''"
                @click="setActive('ABOUT US')"><a href="#">ABOUT US</a></li>
                <li :class="activeItem === 'INFLUENCER' ? 'text-[#416887]' : ''"
                @click="setActive('INFLUENCER')"><a href="#">BE AN INFLUENCER</a></li>
            </ul>
            <img src="/Group 41.svg" alt="Logo" class="w-auto h-auto sm:hidden "/>
        
        <div class="flex gap-[8px] ">
            <a href="#" target="_blank">
                <img src="/icon-facebook.svg" alt="Logo" class="w-auto h-auto"/>
            </a>
            <a href="#" target="_blank">
                <img src="/icon-linkedin.svg" alt="Logo" class="w-auto h-auto"/>
            </a>
            <a href="#" target="_blank">
                <img src="/icon-slack.svg" alt="Logo" class="w-auto h-auto"/>
            </a>
            <a href="#" target="_blank">
                <img src="/icon-twitter.svg" alt="Logo" class="w-auto h-auto"/>
            </a>
        </div>
        </div>
    </nav>
</template>