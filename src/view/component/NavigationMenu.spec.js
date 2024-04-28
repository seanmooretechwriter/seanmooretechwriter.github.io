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
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    const blogItem = wrapper.find('[title="Blog"]');
    const aboutItem = wrapper.find('[title="About"]');
    const resumeItem = wrapper.find('[title="Resume"]');

    await blogItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/blog");

    await aboutItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/about");

    await resumeItem.trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/resume");
  });
});
