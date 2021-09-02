import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from "iview";
import "iview/dist/styles/iview.css";

import VFACE, { Ace } from "vf-vue-ace";

import VFUI, { Alert, version } from "vf-vue-ui";
import "vf-vue-ui/lib/theme/index.css";

import "./assets/css/index.less";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(VFACE);
Vue.use(VFUI);

Vue.component("MyAlert", Alert);
console.log("VFUI version---", version);

Vue.component("MyAce", Ace);

const VM = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default VM;
