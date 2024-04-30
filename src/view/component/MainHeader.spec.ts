import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from './Header.vue';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'My Title',
        subtitle: 'My Subtitle'
      }
    });

    expect(wrapper.exists()).toBeTruthy();

    const titleElement = wrapper.find('h2');
    const subtitleElement = wrapper.find('h4');
    expect(titleElement.text()).toBe('My Title');
    expect(subtitleElement.text()).toBe('(My Subtitle)');
    expect(titleElement.classes()).toContain('text-grey-lighten-1');
    expect(subtitleElement.classes()).toContain('text-grey-darken-1');

    const icon = wrapper.find('v-icon');
    expect(icon.exists()).toBeTruthy();
  });

  it('updates properly when props change', async () => {
    const wrapper = mount(Header, {
      props: {
        title: 'Initial Title',
        subtitle: 'Initial Subtitle'
      }
    });

    await wrapper.setProps({ title: 'Updated Title', subtitle: 'Updated Subtitle' });

    expect(wrapper.find('h2').text()).toBe('Updated Title');
    expect(wrapper.find('h4').text()).toBe('(Updated Subtitle)');
  });

  it('has the correct styling', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'My Title',
        subtitle: 'My Subtitle'
      }
    });
    const mainHeaderDiv = wrapper.find('.main-header');
    expect(mainHeaderDiv.classes()).toContain('bg-black');
  });

  it('uses semantic HTML correctly', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'My Title',
        subtitle: 'My Subtitle'
      }
    });

    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.find('h4').exists()).toBeTruthy();
  });
});
