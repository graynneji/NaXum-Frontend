<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import GoogleRecaptcha from './GoogleRecaptcha.vue';
import Button from './Button.vue';
import { useModalStore } from '../../stores/modalStore';
import axios from 'axios';
const modalStore = useModalStore();

const recaptchaToken = ref(null);
const isLoading = ref(false);
const error = ref(null);

const schema = yup.object({
  firstName: yup.string().min(3, 'First name must be at least 3 characters').required('First name is required'),
  lastName: yup.string().min(3, 'Last name must be at least 3 characters').required('Last name is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone must contain only numbers')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});


const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema
});


const { value: firstName } = useField('firstName');
const { value: lastName } = useField('lastName');
const { value: phone } = useField('phone');
const { value: email } = useField('email');

const onRecaptchaVerified = (token) => {
  recaptchaToken.value = token;
};

const onRecaptchaExpired = () => {
  recaptchaToken.value = null;
};

const onSubmit = handleSubmit(async (values) => {
  if (!recaptchaToken.value) {
    alert('Please verify reCAPTCHA');
    return;
  }

  isLoading.value = true;
  try {
    const response = await axios.post(
      'http://localhost/naxum_rest_endpoint/index.php',
      {
        firstname: values.firstName,
        lastname: values.lastName,
        phone: values.phone,
        email: values.email,
        recaptcha_token: recaptchaToken.value
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    if (response.data.status === 'success') {
      alert('✅ User registered successfully!');
      modalStore.closeRegisterModal();
      resetForm();
      recaptchaToken.value = null;
    } else {
      error.value = 'Please try again later.';
    }
  } catch (err) {
    error.value = 'An error occurred. Please try again later.';
  } finally {
    isLoading.value = false;
  }
});

</script>

<template>
  <section class="w-full font-[Montserrat]">
    <div class="relative w-full min-h-screen flex items-center justify-center py-6 md:py-0 ">
      <img src="/screenShot.png" alt="screenshot bella" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/80"></div>

      <transition name="fade">
        <form @submit.prevent="onSubmit" v-if="modalStore.isRegisterModalOpen"
          class="bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] max-w-3xl w-full overflow-hidden relative z-10">
          <button @click="modalStore.closeRegisterModal()" class="absolute text-[12.92px] top-4 right-4 z-10">
            <img src="/icon.svg" alt="close" class="w-auto h-auto object-contain" />
          </button>

          <div class="flex flex-col md:flex-row">
            <div class="hidden lg:block w-1/2">
              <img src="/Register.png" alt="sign-up-today" class="w-full h-auto object-cover" />
            </div>

            <div class="w-full max-h-[calc(100vh-3rem)] md:max-h-[653px] p-8 lg:px-[30px] lg:w-1/2 overflow-y-auto">
              <h2 class="text-2xl text-[#416887] font-bold lg:font-[350] tracking-[-0.02em] pt-[67px]">
                REGISTER TO LEARN<br />MORE
              </h2>
              <p v-if="error" class="text-red-500 text-sm text-center pt-2">{{ error }}</p>
              <div class="mt-6 space-y-[20px] lg:space-y-[26px]">
                <div>
                  <input type="text" v-model="firstName" placeholder="First Name"
                    class="w-full px-0 py-[13px] border-0 border-b-[1.5px] border-[#000000A6] focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]" />
                  <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
                </div>

                <div>
                  <input type="text" v-model="lastName" placeholder="Last Name"
                    class="w-full px-0 py-[13px] border-0 border-b-[0.75px] border-[#000000A6] focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]" />
                  <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
                </div>

                <div>
                  <input type="tel" v-model="phone" placeholder="Best Phone Number"
                    class="w-full px-0 py-[13px] border-0 border-b-[0.75px] border-[#000000A6] focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]" />
                  <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
                </div>

                <div>
                  <input type="email" v-model="email" placeholder="Email"
                    class="w-full px-0 py-[13px] border-0 border-b-[0.75px] border-[#000000A6] focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]" />
                  <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                </div>

                <!-- reCAPTCHA -->
                <div class="recaptcha-container">

                  <GoogleRecaptcha sitekey="6LeKcO8rAAAAAPTjimnW0QEsV3mfUBunfGS0aA03" @verify="onRecaptchaVerified"
                    @expired="onRecaptchaExpired" />
                </div>
                <Button type="submit"
                  class="w-full rounded-[8px] py-[15px] flex flex-1 font-[450] text-[16px] tracking-[-0.02em]">
                  {{ isLoading ? 'Loading...' : 'Register Now' }}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.recaptcha-container {
  position: relative;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>