<script setup>
import Button from './Button.vue';
import { useModalStore } from '../../stores/modalStore';

const modalStore = useModalStore();

const openForm = () => {
    modalStore.openRegisterModal();
};
</script>

<template>
    <section class="py-[82px] px-[25px] lg:px-[211px] bg-[#F0F1F2] font-[Montserrat]">
        <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
            <h2 class="font-[325] text-[30px] lg:text-[45px] leading-none tracking-[0.01em] text-[#416887]">WOULD YOU
                LIKE TO<br />
                LEARN
                MORE?</h2>
            <Button @click="openForm" class="" icon="/sitename.svg" iconPosition="left">Connect with Ben</Button>
        </div>
    </section>
</template>