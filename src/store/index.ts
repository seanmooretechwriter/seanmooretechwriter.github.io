import { defineStore } from "pinia";
import { ComputedRef, Ref, computed, ref } from "vue";

const defineMainApplicationStore = () => {
  //const state = {
    
  //};

  const applicationID: Ref<string> = ref("seanVue3Website");
  const getterFunction: ComputedRef<string> = computed(() => "some value" );

  return {
    //...state,
    applicationID,
    getterFunction
  };
};

export const useMainApplicationStore = defineStore('mainApplicationStore', () => {
  return { ...defineMainApplicationStore() };
});
