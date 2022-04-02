<template>
    <div>
        <v-list>
            <v-list-item v-for="(guest, index) in guests" :key="index"> 
                <v-list-item-title>{{guest}}</v-list-item-title>
                <v-list-item-action>
                    <v-icon @click="deleteGuest(index)" >mdi-delete</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState, mapMutations} from "vuex" 

export default Vue.extend({
    name: "GuestList",
    computed: mapState({
        guests: (state: any) => state.guests,
    }),
    methods: {
        ...mapMutations(["deleteGuest"]),
    }
})
</script>