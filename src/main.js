// Vue
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// Style
import "./style.scss"
// Plugins
import vuetify from './plugins/vuetify';
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Utils
import global_ from './common/Global'

Vue.use(VueAxios, axios)
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
