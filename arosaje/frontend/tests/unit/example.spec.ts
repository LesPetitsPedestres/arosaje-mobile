import { mount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage.vue'

describe('LoginPage.vue', () => {
  it('renders tab 1 LoginPage', () => {
    const wrapper = mount(LoginPage)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
