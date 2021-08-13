import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from "iview";
import "iview/dist/styles/iview.css";
import "./assets/css/index.less";

import { Ace } from "vf-vue-ace";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.component("VfAce", Ace);

const VM = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default VM;
