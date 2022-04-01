<template>
  <div>
    <v-row>
      <v-text-field v-model="guestName" label="Guest name"></v-text-field>
      <NameInputButton @button-pressed="addGuest(guestName), guestName=''" />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapMutations} from "vuex";
import NameInputButton from "@/components/NameInputButton.vue";

export default Vue.extend({
  name: "NameInput",
  components: {
    NameInputButton,
  },
  data() {
    return {
      guestName: new String(),
    };
  },
  methods: {
      ...mapMutations(["addGuest"]),
  },
  mounted(){
      this.guestName = "";
  }
});
</script>