<template>
  <div class="div" :style="{'background-image': `url(${require('../assets/homebackground.jpg')})`}">
    <div class="div1">
      <div class="div2">
        <h1>Jan Patrick Tancinco</h1>
        <h2>
          <p>Web Developer</p>
        </h2>
        <div>"Obstacles are the cost of greatness" <p class="sub">-Robin Sharma</p></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style scoped>
.div {
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
.div1 {
  padding-top: 20%;
}
.div1 h1 {
  text-decoration: underline;
}
</style>
