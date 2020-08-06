<template>
  <div>
    <br>
    <v-card class="mx-auto" flat max-width="500">
      <pdf src="./pdf/PatchanResume.pdf"/>
    </v-card>
  </div>
</template>
 
<script>
import pdf from "vue-pdf";

export default {
  name: "Resume",
  components: {
    pdf
  }
};
</script>