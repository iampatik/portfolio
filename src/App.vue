<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
html {
  overflow-x: auto;
  overflow-y: auto;
}
body {
  overflow: auto;
  height: 100%;
}
</style>
