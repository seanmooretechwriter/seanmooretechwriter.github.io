import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NavigationMenu from "./NavigationMenu.vue";

const mockRouter = {
  push: vi.fn(),
  currentRoute: { value: { path: "/" } },
};

vi.mock("vue-router", () => ({
  useRouter: () => mockRouter,
}));

describe("NavigationMenu", () => {
  it("navigates to correct path when list items are clicked", async () => {
    const wrapper = mount(NavigationMenu, {
      props: {
        width: 300
      },
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    const homeItem = wrapper.find('[title="Home"]');
    const blogItem = wrapper.find('[title="Blog"]');
    const aboutItem = wrapper.find('[title="About"]');
    const resumeItem = wrapper.find('[title="Resume"]');

    await homeItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/");

    await blogItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/blog");

    await aboutItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/about");

    await resumeItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/resume");
  });
});

  describe("NavigationMenu", () => {
    it("sets props correctly and has correct icons", async () => {
      const wrapper = mount(NavigationMenu, {
        props: {
          width: 300
        }
      });
  
      expect(wrapper.attributes('width')).toBe('300');
  
      expect(wrapper.classes()).toContain('bg-grey-darken-4');
      expect(wrapper.attributes('theme')).toBe('dark');
  
      const homeItem = wrapper.find('[title="Home"]');
      const blogItem = wrapper.find('[title="Blog"]');
      const aboutItem = wrapper.find('[title="About"]');
      const resumeItem = wrapper.find('[title="Resume"]');
  
     expect(homeItem.attributes("prepend-icon")).toBe("mdi-home-outline");
     expect(blogItem.attributes("prepend-icon")).toBe("mdi-post");
     expect(aboutItem.attributes("prepend-icon")).toBe("mdi-information");
     expect(resumeItem.attributes("prepend-icon")).toBe("mdi-file-account");
  
    });
});
