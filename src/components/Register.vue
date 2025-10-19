<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
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


const { handleSubmit, errors } = useForm({
  validationSchema: schema
});


const { value: firstName } = useField('firstName');
const { value: lastName } = useField('lastName');
const { value: phone } = useField('phone');
const { value: email } = useField('email');


const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values);
  alert(`Form submitted: ${JSON.stringify(values)}`);
});
</script>

<template>
    <div class="relative w-full h-auto">
        <img src="/screenShot.png" alt="screenshot bella" class="w-full h-auto object-cover" />
         <div class="absolute inset-0 bg-black/60"></div>

        <div class="bg-white shadow-2xl max-w-3xl w-full overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
    
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-10"
        >
          ×
        </button>

        <div class="flex flex-col md:flex-row">
          <div class="hidden lg:block w-1/2">
            <img src="/Register.png" alt="sign-up-today" class="w-full h-auto object-cover" />
          </div>

          <div class="w-full p-8 lg:px-[30px] lg:w-1/2">
            <h2 class="text-2xl text-[#416887] font-[350] tracking-[-0.02em] pt-[67px]">
              REGISTER TO LEARN<br />MORE
            </h2>
            
            <div class="mt-6 space-y-[26px]">
              <div>
                <input
                  type="text"
                  v-model="firstName"
                  placeholder="First Name"
                
                  class="w-full px-0 py-[13px] border-0 border-b-[1.5px] border-gray-300 focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]"
                />
                <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
              </div>

              <div>
                <input
                  type="text"
                  v-model="lastName"
                  placeholder="Last Name"
                  class="w-full px-0 py-[13px] border-0 border-b-2 border-gray-300 focus:border-[#4FA0D5]focus:outline-none text-gray-700 placeholder-[#000000A6]"
                />
                  <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
              </div>

              <div>
                <input
                  type="tel"
                  v-model="phone"
                  placeholder="Best Phone Number"
                  class="w-full px-0 py-[13px] border-0 border-b-2 border-gray-300 focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]"
                />
                   <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
              </div>

              <div>
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="w-full px-0 py-[13px] border-0 border-b-2 border-gray-300 focus:border-[#4FA0D5] focus:outline-none text-gray-700 placeholder-[#000000A6]"
                />
                  <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
              </div>

              <div class="mt-6">
                <div class="border-2 border-gray-300 rounded p-3 bg-gray-50">
                  <label class="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isVerified}
                      class="w-6 h-6 mr-3"
                    />
                    <span class="text-sm text-gray-700">I'm not a robot</span>
                    <div class="ml-auto">
                      <div class="text-xs text-gray-500">
                        <div class="font-bold">reCAPTCHA</div>
                        <div class="text-[10px]">Privacy - Terms</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                class="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded transition-colors mt-6"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>