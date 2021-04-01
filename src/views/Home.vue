<template>
  <div :style="{ width: '100%' }">
    <v-row style="top: 30vh; position: fixed" no-gutters>
      <v-col
        class="text-center"
        cols="12"
        :style="{
          color: '#F5F5F5',
          width: '100vw'
        }"
      >
        <h1
          :style="{
            fontSize: this.$vuetify.breakpoint.mobile ? '3rem' : '8rem',
          }"
        >
          {{ title }}
        </h1>
        <h4
          :style="{
            fontSize: this.$vuetify.breakpoint.mobile ? '1rem' : '1.5rem',
          }"
        >
          {{ subtitle }}
        </h4>
      </v-col>
    </v-row>
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
            class="font-weight-bold"
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
            :style="{
              overflow: 'scroll',
              height: $vuetify.breakpoint.mobile ? '80vh' : '90vh',
            }"
          >
            <v-row
              justify="center"
              class="pt-8"
              :style="{ 'padding-bottom': '100px' }"
            >
              <v-col
                v-for="(item, index) in item.cards"
                :key="index"
                :cols="$vuetify.breakpoint.mobile ? 10 : 5"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="my-2 transition-swing"
                    :class="[
                      `elevation-${hover ? 24 : 6}`,
                      $vuetify.breakpoint.mobile ? 'mx-0' : 'mx-7',
                    ]"
                  >
                    <v-img
                      :src="item.img"
                      height="200px"
                      style="border-bottom: solid #1976d2"
                    ></v-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle :style="{height:$vuetify.breakpoint.mobile?null:'50px','text-indent':'2em'}">
                      {{ item.describe }}
                    </v-card-subtitle>
                    <v-card-actions class="pb-5">
                      <v-btn
                        :href="item.link"
                        target="_blank"
                        color="primary"
                        :disabled="item.link == null"
                      >
                        <span class="mr-1">预览效果</span>
                        <v-icon>mdi-monitor-cellphone</v-icon>
                      </v-btn>
                      <v-btn
                        :href="item.github"
                        target="_blank"
                        color="primary"
                        :disabled="item.github == null"
                      >
                        <span class="mr-1">查看源码</span>
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
  data: function () {
    return {
      title: "MyProjects",
      subtitle: "一个关于项目展示的个人主页",
      info: null,
      tab: "tab-4",
      tabs: [
        {
          title: "前端",
          icon: "mdi-web",
          cards: null,
        },
        {
          title: "后端",
          icon: "mdi-database",
          cards: null,
        },
        {
          title: "其他",
          icon: "mdi-dots-horizontal-circle-outline",
          cards: null,
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
  mounted() {
    this.axios.get(this.GLOBAL.dataSrc).then((response) => {
      this.tabs = response.data.tabs;
    });
  },
  methods: {
    stretch: function () {
      this.style.panel.height = this.$vuetify.breakpoint.mobile
        ? "80vh"
        : "90vh";
      this.$emit("collapse", true);
      this.$emit("changeIcon", true);
    },
    shrink: function () {
      this.style.panel.height = "70px";
      this.$emit("collapse", false);
      this.$emit("changeIcon", false);
    },
    include() {
      return [document.querySelector("#dark-button")];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>