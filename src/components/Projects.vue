<template>
  <v-card max-width="450">
    <v-img :src="require(`@/assets/${this.project.image}`)" height="200px"></v-img>

    <v-card-title>{{ project.title }}</v-card-title>

    <v-card-actions x-large class="mx-auto">
      <v-btn icon class="mx-auto" @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="text--primary">
          <div><b>Description:</b> {{ project.description }}</div>
          <div><b>Status:</b> {{ project.status }}</div>
          <div><b>Framework:</b> {{ project.framework }}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script scoped>

export default {
  name: "Projects",
  props: ["project"],
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.title {
  color: black;
}
</style>

