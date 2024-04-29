// App.spec.js
import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createPinia, setActivePinia } from "pinia";
import { useMainApplicationStore } from "@/store"; // Make sure this import path matches your project structure
import { createRouter, createWebHistory } from "vue-router";

vi.mock("@/view/component/Header.vue", () => ({
  default: {
    template: "<div />",
  },
}));

vi.mock("@/view/component/NavigationMenu.vue", () => ({
  default: {
    template: "<div />",
  },
}));

describe("App.vue", () => {
  let pinia;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
  });

  it("initializes store values and checks computed properties", async () => {
    const store = useMainApplicationStore(); // Access the actual store used in your app

    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", component: { template: "<div />" } }],
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    });

    await router.isReady();

    // Check initial values from the store
    expect(store.applicationID).toBe("seanVue3Website");
    expect(store.applicationTitle).toBe("Sean Moore - Software Developer & Technical Writer");
    expect(store.getterFunction).toBe("some value");

    // Example if you had an action to change the applicationID
    // store.setApplicationID("newID");
    // expect(store.applicationID).toBe("newID");
    
    // Verify that the DOM reflects these values if they are rendered
    // For example, if you display the applicationTitle somewhere in App.vue
    // expect(wrapper.text()).toContain("Sean Moore - Software Developer & Technical Writer");

    // Verify component renders
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "NavigationMenu" }).exists()).toBe(true);
    expect(wrapper.find("v-main").exists()).toBe(true);
    expect(wrapper.find("v-footer").text()).toContain("2024—Sean Moore ©");
  });
});
