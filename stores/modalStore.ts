import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isRegisterModalOpen = ref(false);

  function openRegisterModal() {
    isRegisterModalOpen.value = true;
  }

  function closeRegisterModal() {
    isRegisterModalOpen.value = false;
  }

  return { isRegisterModalOpen, openRegisterModal, closeRegisterModal };
});
