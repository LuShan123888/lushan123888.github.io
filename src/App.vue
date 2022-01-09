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

    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <home @collapse="collapse" @changeIcon="changeIcon" ref="home"></home>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import logo from "../src/assets/img/favicon.png";
import backButtonLight from "../src/assets/img/back-light.png";
import backButtonDark from "../src/assets/img/back-dark.png";
import DarkButton from "./components/DarkButton";
import Home from "./views/Home";
export default {
  name: "app",
  components: { Home, DarkButton },
  computed: {
    backButton: function () {
      return this.isDark ? backButtonDark : backButtonLight;
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },

    isDark: function () {
      return this.$vuetify.theme.dark;
    },
  },
  watch: {},
  data: function () {
    return {
      title: "MyProjects",
      bgImg: null,
      icon: logo,
      isCollapse: false,
      style: {
        darkButton: {
          top: this.$vuetify.breakpoint.mobile ? "10px" : "10px",
          right: this.$vuetify.breakpoint.mobile ? "10px" : "10px",
        },
      },
    };
  },
  methods: {
    collapse: function (active) {
      this.isCollapse = active ? true : false;
    },
    changeIcon: function (active) {
      this.icon = active ? this.backButton : logo;
    },
  },
  mounted() {
      this.bgImg = this.GLOBAL.bgImg;
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