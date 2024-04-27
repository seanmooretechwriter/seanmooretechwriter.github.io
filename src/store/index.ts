import { defineStore } from "pinia";
import { ComputedRef, computed, ref } from "vue";

const defineMainApplicationStore = () => {
  const state = {
    applicationID: ref("seanVue3Website"),
    applicationTitle: ref("Sean Moore - Software Developer & Technical Writer")
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
