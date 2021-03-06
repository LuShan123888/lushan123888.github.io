import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Style
import "./styles/index.scss"

//Plugins
import vuetify from './plugins/vuetify';
// import './plugins/element.js'
// import './plugins/bootstrap-vue'
// import './plugins/fontawesome'

//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
