<template>
  <v-btn @click="buttonPressed()" elevation="2" fab><v-icon>mdi-plus</v-icon></v-btn>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NameInputButton",
  props: {
    label: String,
  },

  methods: {
    buttonPressed(): void {
      this.$emit("button-pressed");
    },
  },
});
</script>