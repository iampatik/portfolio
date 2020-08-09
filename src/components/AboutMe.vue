<template>
  <div>
    <v-row no-gutters class="row">
      <v-col class="col1">
        <v-card>
          <div class="div1">
            <h1>Personal Information</h1>
          </div>
          <v-card-text class="text--primary">
            <div>Name: {{ profile.name }}</div>
            <div>Birthday: {{ profile.birthday }}</div>
            <div>Place of Birth: {{ profile.placeOfBirth }}</div>
            <div>Current Address: {{ profile.address.currentAddress }}</div>
            <div>Permanent Address: {{ profile.address.permanentAddress }}</div>
            <br>
            <hr>
            <div>
              <h3>Educational Attainment</h3>
            </div>
            <br>
            <div>
              <h4>Senior High</h4>
              <div>School: {{ profile.educationalAttainment.seniorHighSchool.school }}</div>
              <div>Year: {{ profile.educationalAttainment.seniorHighSchool.year }}</div>
              <div>Course: {{ profile.educationalAttainment.seniorHighSchool.course }}</div>
              <br>
              <h4>College</h4>
              <div>School: {{ profile.educationalAttainment.college.school }}</div>
              <div>Year: {{ profile.educationalAttainment.college.year }}</div>
              <div>Course: {{ profile.educationalAttainment.college.course }}</div>
            </div>
            <br>
            <hr>
            <div>
              <h3>Contacts</h3>
              <br>
              <div>Email: {{ profile.contacts.email }}</div>
              <div>Skype: {{ profile.contacts.skype }}</div>
              <div>Mobile: {{ profile.contacts.mobile }}</div>
            </div>
            <br>
            <hr>
            <div>
              <h3>Skills</h3>
              <br>
              <v-row no-gutters>
                <v-col v-for="(skills, index) in profile.skills.microsoftOffice" :key="index">
                  <v-chip class="ma-2 primary">{{ skills }}</v-chip>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col v-for="(skills, index) in profile.skills.programming" :key="index">
                  <v-chip class="ma-2 primary">{{ skills }}</v-chip>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col2">
        <!-- <v-img :src="require('../assets/back.jpg')"></v-img> -->
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "AboutMe",
  data: () => ({}),
  computed: mapGetters(["profile"])
};
</script>

<style scoped>
.col2 {
  background-image: url('../assets/back.jpg');
  background-size: cover;
}
.div1 {
  text-align: center;
  border-bottom: 0.5px black solid;
  background-color: #1abc9c;
}
</style>

