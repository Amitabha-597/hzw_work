import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/css/flex.css";
import "./utils/css/index.css";
import "./utils/css/element.css";
import "./utils/css/iconfont/iconfont.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import VDistpicker from "v-distpicker";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.prototype.$IP = 'http://101.200.201.238:62519' 


Vue.component("v-distpicker", VDistpicker);
Vue.config.productionTip = false;
Vue.use(ElementUI).use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App),
}).$mount("#app");
