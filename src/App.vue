<template>
  <v-app>
    <img id="background-img" :src="background"/>
    <dark-button id="dark-button" :style="style.darkButton"/>
    <v-app-bar :collapse="appBar.isCollapse" :style="{ 'z-index': '101' }" app>
      <v-app-bar-nav-icon class="ml-3">
        <v-avatar rounded size="45">
          <img :src="appBar.icon" alt="logo"/>
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="text-h6" v-text="appBar.title"></v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0 ma-0" fluid>
        <home ref="home" @collapse="collapse"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DarkButton from "./components/DarkButton";
import Home from "./pages/Home";

export default {
  name: "app",
  components: {Home, DarkButton},
  computed: {
    backButton: function () {
      return this.isDark ? this.GLOBAL.icons.backDark : this.GLOBAL.icons.backLight;
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },
    isDark: function () {
      return this.$vuetify.theme.dark;
    },
  },
  watch: {
    isDark: function () {
      this.icon = this.backButton;
    }
  },
  data: function () {
    return {
      background: null,
      appBar: {
        title: "MyProjects",
        icon: null,
        isCollapse: false,
      },
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
      this.appBar.isCollapse = active;
      this.changeIcon(active);
    },
    changeIcon: function (active) {
      this.appBar.icon = active ? this.backButton : this.GLOBAL.icons.favicon;
    },
  },
  mounted() {
    this.background = this.GLOBAL.images.background;
    this.appBar.icon = this.GLOBAL.icons.favicon;
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