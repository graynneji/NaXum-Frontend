<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  sitekey: string;
}>();

const emit = defineEmits<{
  verify: [token: string];
  expired: [];
  error: [];
}>();

const recaptchaId = ref<number | null>(null);

onMounted(() => {
  // Load reCAPTCHA script if not already loaded
  if (!window.grecaptcha) {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    window.onRecaptchaLoad = () => {
      renderRecaptcha();
    };
  } else {
    renderRecaptcha();
  }
});

const renderRecaptcha = () => {
  if (window.grecaptcha && window.grecaptcha.render) {
    recaptchaId.value = window.grecaptcha.render('recaptcha-container', {
      sitekey: props.sitekey,
      callback: (token: string) => emit('verify', token),
      'expired-callback': () => emit('expired'),
      'error-callback': () => emit('error'),
    });
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}
</script>

<template>
  <div id="recaptcha-container"></div>
</template>
