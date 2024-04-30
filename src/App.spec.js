// App.spec.js
import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createPinia, setActivePinia } from "pinia";
import { useMainApplicationStore } from "@/store";
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
    const store = useMainApplicationStore();

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

    expect(store.applicationID).toBe("seanVue3Website");
    expect(store.applicationTitle).toBe("Sean Moore");
    expect(store.applicationSubtitle).toBe("Software Developer & Technical Writer");
    expect(store.getterFunction).toBe("some value");
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "NavigationMenu" }).exists()).toBe(true);
    expect(wrapper.find("v-main").exists()).toBe(true);
    expect(wrapper.find("v-footer").text()).toContain("2024—Sean Moore ©");
  });
});
