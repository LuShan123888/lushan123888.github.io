<template>
  <v-app>
    <img id="background-img" :src="bgImg" />
    <dark-button id="dark-button" :style="style.darkButton"></dark-button>
    <v-app-bar app :collapse="isCollapse" :style="{ 'z-index': '101' }">
      <v-app-bar-nav-icon class="ml-3">
        <v-avatar size="45" rounded>
          <img :src="icon" alt="avatar" />
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="text-h6" v-text="title"></v-app-bar-title>
    </v-app-bar>

    <v-main
      v-touch="{
        left: () => swipe('Left'),
        right: () => swipe('Right'),
        up: () => swipe('Up'),
        down: () => swipe('Down'),
      }"
    >
      <v-container fluid class="pa-0">
        <home @collapse="collapse" @changeIcon="changeIcon" ref="home"></home>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import logo from "../src/assets/img/favicon.png";
import backButtonLight from "../src/assets/img/back-light.png";
import backButtonDark from "../src/assets/img/back-dark.png";
import DarkButton from "./components/DarkButton.vue";
import Home from "./views/Home.vue";
export default {
  name: "app",
  components: { Home, DarkButton },
  computed: {
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },
    backButton: function () {
      return this.$vuetify.theme.dark ? backButtonDark : backButtonLight;
    },
    isDark: function () {
      return this.$vuetify.theme.dark;
    },
  },
  watch: {
    isDark: function () {
      this.icon = this.backButton;
    },
  },
  data: function () {
    return {
      icon: logo,
      title: "MyProjects",
      domain: "lushan.tech",
      bgImg: "https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/img/bg.jpg",
      isCollapse: false,
      style: {
        darkButton: {
          top: this.isMobile ? "10px" : "10px",
          right: this.isMobile ? "10px" : "40px",
        },
      },
    };
  },
  methods: {
    collapse: function (active) {
      this.isCollapse = active ? true : false;
    },
    swipe(direction) {
      if (direction == "Up") {
        this.$refs.home.stretch();
      }
      if (direction == "Down") {
        this.$refs.home.shrink();
      }
    },
    changeIcon: function (active) {
      this.icon = active ? this.backButton : logo;
    },
  },
};
</script>

<style lang="scss" scoped>
#background-img {
  position: fixed;
}
#dark-button {
  position: fixed;
  z-index: 100;
}
</style>