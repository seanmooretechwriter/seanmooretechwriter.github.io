// Home.spec.js
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Home from "./Home.vue";

// Correct the mock to return an object with a `default` key
vi.mock("../assets/under-construction.png", () => ({ default: "mocked-image-path" }));

describe("Home.vue", () => {
  it("renders the home title and image correctly", () => {
    const wrapper = mount(Home);

    // Check if the title 'Home' is rendered
    const title = wrapper.find(".page-title");
    expect(title.exists()).toBe(true);
    expect(title.text()).toContain("Home");

    // Check if the image is rendered and the src is correct
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("mocked-image-path");
    expect(img.attributes("width")).toBe("600");
  });
});
