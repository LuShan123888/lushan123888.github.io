<template>
  <div :style="{ width: '100%' }">
    <v-row
      :style="{
        width: '100%',
        position: 'fixed',
        bottom: '0px',
      }"
      no-gutters
    >
      <v-col
        :cols="this.$vuetify.breakpoint.mobile ? 10 : 9"
        :style="[style.panel,{background:this.$vuetify.theme.dark ? '#272727' : '#FFFFFF'}]"
        id="panel"
        class="mx-auto"
        v-click-outside="{ handler: shrink, include: include }"
      >
        <v-btn class="ma-2" fab color="primary" @click="stretch">
          <v-icon dark> mdi-minus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      title: "个人信息",
      info: null,
      style: {
        panel: {
          height: "70px",
          width: "90%",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          transition: "all 1s",
          transitionTimingFunction: "cubic-bezier(.6,.24,.51,1.03)",
        },
      },
      class: {
        title: {
          "text-h2": !this.$vuetify.breakpoint.mobile,
          "text-h3": this.$vuetify.breakpoint.mobile,
          "ml-3": this.$vuetify.breakpoint.mobile,
          "ml-9": !this.$vuetify.breakpoint.mobile,
          "mt-3": this.$vuetify.breakpoint.mobile,
          "mt-9": !this.$vuetify.breakpoint.mobile,
        },
      },
    };
  },
  methods: {
    stretch: function () {
      this.style.panel.height = "90vh";
      this.$emit("collapse", "true");
    },
    shrink: function () {
      this.style.panel.height = "70px";
      this.$emit("collapse", "false");
    },
    include() {
      return [document.querySelector("#dark-button")];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>