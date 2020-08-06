<template>
  <v-container>
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
        <Project :project="project"></Project>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Project from "@/components/Projects.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Project
  },
  data: () => ({
  }),
  computed: mapGetters(["projects"]),
 
};
</script>

<style>
</style>
