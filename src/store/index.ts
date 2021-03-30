import Vue from "vue";
import Vuex from "vuex";
import models from "./models";
import app from "./app";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Vuex.Store({
  ...app,
  modules: {
    ...models,
  },
  strict: debug,
});
