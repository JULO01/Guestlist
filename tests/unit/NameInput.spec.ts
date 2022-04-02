import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from "Vuex"
import NameInput from "@/components/NameInput.vue"

const localVue = createLocalVue()


localVue.use(Vuex);


describe('NameInput.vue', () => {
    let vuetify: any;
    let store: any;
    let mutations: any;

    beforeEach(() => {
        vuetify = new Vuetify()
        mutations = {
            addGuest: jest.fn()
        }
        store = new Vuex.Store({mutations});

    })


    it('clears input when clicking button', async () => {
        const wrapper = mount(NameInput, {
            localVue,
            vuetify,
            store
        });

        const input = wrapper.find(".v-text-field").get("input");
        const button = wrapper.find('.v-btn');

        await input.setValue("Mister Foo");
        await button.trigger("click");
        const inputElement = input.element as HTMLInputElement;

        expect(inputElement.value).toBe("");
    });

    it('commits the mutation "addGuest" with input value as argument when clicking button', async () => {
        const wrapper = mount(NameInput, {
            localVue,
            vuetify,
            store
        });
        
        const mockArgument: String = "Mister Foo";
        const input = wrapper.find(".v-text-field").get("input");
        const button = wrapper.find('.v-btn');

        await input.setValue(mockArgument);
        await button.trigger("click");

        // mutation gets the argument as second argument
        expect(mutations.addGuest).toHaveBeenCalledWith({}, mockArgument);
    })

})

  //Need to import vuex to make the test work --> vuex function in component raises error ad disrupts functionality