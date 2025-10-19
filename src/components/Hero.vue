<script setup>
import Button from './Button.vue';
import { useModalStore } from '../../stores/modalStore';

const modalStore = useModalStore();

const openForm = () => {
    modalStore.openRegisterModal();
};
</script>

<template>
    <section class="relative w-full h-full overflow-hidden font-[Montserrat]">
        <div class="flex relative min-h-0 sm:min-h-screen">
            <div class="pt-[142px] px-[25px] lg:px-0 lg:pl-[168px] overflow-hidden">
                <h1
                    class="whitespace-nowrap text-[40px] md:text-[65px] font-normal leading-[100%] tracking-[0.02em] uppercase text-[#416887] mb-[23px] max-w-[623px] w-full">
                    Collagen is <br />the Fountain<br /> of Youth</h1>
                <p
                    class="text-[#99A1A5] text-[20px] md:text-[30px] leading-[100%] tracking-normal mb-[50px] lg:mb-[87px]">
                    WHATS YOUR
                    INFLUENCE?</p>
                <Button @click="openForm" classes="mb-[188px]" icon="/sitename.svg" iconPosition="left">
                    Connect with Ben
                </Button>
                <picture class="absolute left-0 top-[130px] z-[-10] overflow-hidden hidden md:block">
                    <img src="/bella-grace-image8-1.svg" alt="bella-grace-flower" class="w-[691px] h-[643px]" />
                </picture>
            </div>
            <picture class="absolute z-[-10] right-0 overflow-hidden">
                <source media="(max-width: 640px)" srcset="/bella-grace-image3-removebg-preview1(1).png" />
                <img id="bella-grace-image" src="/bella-grace-image3-removebg-preview-1.svg"
                    alt="Bella Grace Hero Image" class="w-auto h-auto mt-[-139px]" />
            </picture>

        </div>
    </section>
</template>