<template>
  <div>
    <v-row>
      <v-text-field
        @keydown.enter="addGuestClicked(guestName)"
        v-model="guestName"
        label="Guest name"
      >
      </v-text-field>
      <NameInputButton
        class="input-button"
        @button-pressed="addGuestClicked(guestName)"
      />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
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
    addGuestClicked(guest: String) {
      if (guest == "") return;
      this.addGuest(guest);
      this.guestName = "";
    },
  },
  mounted() {
    this.guestName = "";
  },
});
</script>