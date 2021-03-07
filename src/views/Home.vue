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
        :style="[
          style.panel,
          { background: this.$vuetify.theme.dark ? '#272727' : '#FFFFFF' },
        ]"
        id="panel"
        class="mx-auto"
        v-click-outside="{ handler: shrink, include: include }"
      >
        <v-tabs
          v-model="tab"
          centered
          icons-and-text
          :style="{
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          }"
          grow
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="(item, index) in tabs"
            :key="index"
            :href="'#tab-' + index"
            @click="stretch"
          >
            {{ item.title }}
            <v-icon>{{ item.icon }}</v-icon>
          </v-tab>

          <v-tab href="#tab-4" v-show="false"></v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(item, index) in tabs"
            :key="index"
            :value="'tab-' + index"
          >
            <v-card flat>
              <v-card-text :style="{ overflow: 'scroll', height: '90vh' }">
                {{ item.content }}</v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
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
      tab: "tab-4",
      tabs: [
        {
          title: "前端",
          icon: "mdi-web",
          content: "前端",
        },
        {
          title: "后端",
          icon: "mdi-database",
          content: "后端",
        },
        {
          title: "其他",
          icon: "mdi-dots-horizontal-circle-outline",
          content: "其他",
        },
      ],

      style: {
        panel: {
          height: "70px",
          width: "90%",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          transition:
            "height 0.5s cubic-bezier(.6,.24,.51,1.03), background 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
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
      this.$emit("collapse", true);
      this.$emit("changeIcon")
    },
    shrink: function () {
      this.style.panel.height = "70px";
      this.$emit("collapse", false);
    },
    include() {
      return [document.querySelector("#dark-button")];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>