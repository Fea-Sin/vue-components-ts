import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import iView from "iview";
import "iview/dist/styles/iview.css";
import "./assets/css/index.less";

Vue.config.productionTip = false;

Vue.use(iView);

const VM = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default VM;
