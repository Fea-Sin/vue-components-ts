import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from "iview";
import "iview/dist/styles/iview.css";
import "./assets/css/index.less";

import VFUI from "vf-vue-ui";

import VFACE from "vf-vue-ace";
import "vf-vue-ui/lib/theme/index.css";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(VFACE);
Vue.use(VFUI);

console.log("VFUI version----", VFUI.version);
Vue.component("MyAlert", VFUI.Alert);

const VM = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default VM;
