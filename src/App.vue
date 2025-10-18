
<script setup>
import Congratulations from './components/Congratulations.vue';
import Features from './components/Features.vue';
import Hero from './components/Hero.vue';
import Influencer from './components/Influencer.vue';
import NavBar from './components/NavBar.vue';
</script>
<template>
  <section class="relative max-w-[1440px] mx-auto w-full my-auto">
    <NavBar />
  </section>
  <section class="relative w-full mb-[220px]">
    <Hero/>
  </section>
  <section class="pt-[151px] bg-white">
    <Congratulations />
  </section>
  <section class="pt-[151px]">
    <Features />
  </section>
  <section class="pt-[91px] pb-[124px] px-[25px] lg:px-[61px]">
    <Influencer />
  </section>
</template>

