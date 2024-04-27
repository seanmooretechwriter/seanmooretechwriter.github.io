import { defineStore } from "pinia";
import { ComputedRef, computed } from "vue";

const defineMainApplicationStore = () => {
  const state = {
    id: "seanVue3Website"
  };

  const getterFunction: ComputedRef<string> = computed(() => "some value" );

  return {
    ...state,
    getterFunction
  };
};

export const useMainApplicationStore = defineStore('mainApplicationStore', () => {
  return { ...defineMainApplicationStore() };
});
