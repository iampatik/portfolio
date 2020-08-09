<template>
  <div>
    <v-app-bar color="blue-grey lighten-5" absolute app height="75px">
      <v-toolbar-title>Tancinco</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text large to="/home">Home</v-btn>
      <v-btn text large to="/aboutme">About Me</v-btn>
      <v-btn text large to="/resume">Resume</v-btn>
      <!-- <v-btn text large to="/hobbies">Hobbies</v-btn> -->
      <v-btn text large to="/projects">Projects</v-btn>
    </v-app-bar>
  </div>
</template>

<style>
v-btn {
  font-family: "Courier New", Courier, monospace;
}
</style>