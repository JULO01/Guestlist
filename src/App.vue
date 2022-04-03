<template>
  <div id="app">
    <v-container>
      <img alt="Vue logo" height="250em" src="./assets/guestlist.png" />
      <NameInput />
      <GuestList />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NameInput from "./components/NameInput.vue";
import GuestList from "./components/GuestList.vue";

export default Vue.extend({
  name: "App",
  components: {
    NameInput,
    GuestList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
