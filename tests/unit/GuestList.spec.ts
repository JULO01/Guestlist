import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from "Vuex"
import GuestList from "@/components/GuestList.vue"

const localVue = createLocalVue()

localVue.use(Vuex);

describe('GuestList.vue', () => {
    let vuetify: any;
    let store: any;
    let state: any;
    let mutations: any;

    beforeEach(() => {
        vuetify = new Vuetify();
        mutations = {
            deleteGuest: jest.fn()
        };
        state = {
            guests: [
                "Tom Foo", "Michael Bar", "Kevin Coding",
            ]
        };
        store = new Vuex.Store({ state, mutations });

    })


    it('renders all items of state.guests as v-list-items', () => {
        const wrapper = mount(GuestList, {
            localVue,
            vuetify,
            store
        });

        const firstItem = wrapper.findAll(".v-list-item").at(0);
        const secondItem = wrapper.findAll(".v-list-item").at(1);
        const thirdItem = wrapper.findAll(".v-list-item").at(2);

        expect(firstItem.text()).toBe("Tom Foo");
        expect(secondItem.text()).toBe("Michael Bar");
        expect(thirdItem.text()).toBe("Kevin Coding");
    });

    it(`commits the mutation "deleteGuest" with list-item index (same as vuex guests array index) 
        as argument when clicking delete button`, async () => {
        const wrapper = mount(GuestList, {
            localVue,
            vuetify,
            store
        });


        const firstItem = wrapper.findAll(".v-list-item").at(0);
        const secondItem = wrapper.findAll(".v-list-item").at(1);
        const firstItemDeleteButton = firstItem.find(".v-icon");
        const secondItemDeleteButton = secondItem.find(".v-icon");

        await firstItemDeleteButton.trigger("click");
        
        expect(mutations.deleteGuest).toHaveBeenCalledWith(expect.anything(), 0);

        await secondItemDeleteButton.trigger("click");
        // first item is deleted, so second item becomes first, therefore has index 0
        expect(mutations.deleteGuest).toHaveBeenCalledWith(expect.anything(), 0);
    })

})
