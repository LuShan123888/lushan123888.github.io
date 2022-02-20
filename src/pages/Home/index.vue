<template>
  <div :style="{ width: '100%' }">
    <v-row no-gutters style="top: 30vh; position: fixed">
      <v-col
          class="text-center"
          cols="12"
          style="color:#F5F5F5;width:100vw;"
      >
        <h1 :style="{fontSize: isMobile ? '3rem' : '8rem'}" v-text="title"/>
        <h4 :style="{fontSize: isMobile ? '1rem' : '1.5rem'}" v-text="subtitle"/>
      </v-col>
    </v-row>
    <v-row no-gutters style="width: 100%; position: fixed; bottom: 0">
      <v-col
          id="panel"
          v-click-outside="{ handler: shrink, include: include }"
          :cols="isMobile ? 12 : 9"
          :style="[style.panel]"
          class="mx-auto"
      >
        <v-tabs
            v-model="tab.index"
            grow
            icons-and-text
            style="border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem"
        >
          <v-tabs-slider/>
          <v-tab
              v-for="(item, index) in tab.data"
              :key="index"
              :href="'#tab-' + index"
              @click="stretch"
          >
            {{ item.title }}
            <v-icon>{{ item.icon }}</v-icon>
          </v-tab>
          <v-tab v-show="false" href="#tab-4"/>
        </v-tabs>
        <v-tabs-items v-model="tab.index">
          <v-tab-item
              v-for="(item, index) in tab.data"
              :key="item"
              :style="{overflow: 'scroll', height: isMobile ? '80vh' : '90vh'}"
              :value="'tab-' + index">
            <v-row
                class="pt-8"
                justify="center"
                style="padding-bottom: 100px">
              <v-col
                  v-for="(item, index) in item.cards"
                  :key="index"
                  :cols="isMobile ? 10 : 5">
                <v-hover v-slot="{ hover }">
                  <v-card
                      :class="[`elevation-${hover ? 24 : 6}`, $vuetify.breakpoint.mobile ? 'mx-0' : 'mx-7']"
                      class="my-2 transition-swing">
                    <v-img
                        :src="item.img"
                        :style="{
                        height: $vuetify.breakpoint.mobile ? '200px' : '300px',
                      }"
                        style="border-bottom: solid #1976d2"/>
                    <v-card-title v-text="item.title"/>
                    <v-card-subtitle style="text-indent:2em}" v-text="item.describe"/>
                    <v-card-actions class="pb-5">
                      <v-btn
                          :disabled="item.link == null"
                          :href="item.link"
                          color="primary"
                          target="_blank">
                        <span class="mr-1" v-text="'预览效果'"/>
                        <v-icon>mdi-monitor-cellphone</v-icon>
                      </v-btn>
                      <v-btn
                          :disabled="item.github == null"
                          :href="item.github"
                          color="primary"
                          target="_blank">
                        <span class="mr-1" v-text="'查看源码'"/>
                        <v-icon>mdi-code-braces</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
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
  computed: {
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },
    isDark: function () {
      return this.$vuetify.theme.dark;
    },
  },
  data: function () {
    return {
      title: "MyProjects",
      subtitle: "一个用于展示项目的个人主页",
      info: null,
      tab: {
        index: "tab-4",
        data: null,
      },
      style: {
        panel: {
          height: "70px",
          width: "90%",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          transition: "height 0.5s cubic-bezier(.6,.24,.51,1.03), background 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
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
  mounted() {
    this.tab.data = this.GLOBAL.tab.data;
  },
  methods: {
    stretch: function () {
      this.style.panel.height = this.$vuetify.breakpoint.mobile ? "80vh" : "90vh";
      this.$emit("collapse", true);
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