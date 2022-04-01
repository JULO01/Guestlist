import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import NameInputButton from "@/components/NameInputButton.vue"


const localVue = createLocalVue()
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify()
  })

describe('NameInputButton.vue', () => {
  it('emits button-pressed when pressed', async () => {
    const wrapper = mount(NameInputButton, {
      localVue, 
      vuetify,
    });
    const button = wrapper.find('.v-btn');
  
    await button.trigger("click");

    expect(wrapper.emitted("button-pressed")).toBeTruthy();
  })
})
