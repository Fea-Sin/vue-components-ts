import {
  queryApiGetMethod,
  queryFormatJson,
  queryJsonData,
} from "@/services/app";
import vm from "@/main";

interface Response {
  code?: number;
  data?: any;
  msg?: string;
}

export default {
  namespaced: true,
  state: () => ({
    account: "account name is here",
    viewCount: 109,
    data: {},
    formatData: [],
    postData: {},
  }),
  mutations: {
    add(state: any, payload: any) {
      state.viewCount = state.viewCount + payload.amount;
    },
    saveData(state: any, payload: any) {
      state.data = {
        ...state.data,
        ...payload.data,
      };
    },
    saveFormatData(state: any, payload: any) {
      state.formatData = [...payload];
    },
    savePostData(state: any, payload: any): void {
      state.postData = payload;
    },
  },
  actions: {
    async performancePost({ commit }: any, payload: any) {
      const response = await queryApiGetMethod(payload);
      commit("saveData", response);
    },
    incrementBy({ commit }: any, payload: any) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("add", payload);
          resolve("commit ok");
        }, 1000);
      });
    },
    // eslint-disable-next-line
    async fetchFormatJson({ commit }: any, payload: any) {
      const response = await queryFormatJson(payload);
      commit("saveFormatData", response.data);
    },
    async fetchJsonData({ commit }: any, payload: any) {
      const response: Response = await queryJsonData(payload);
      if (response && response.code && response.code > 200) {
        vm.$Message.error(response.msg);
      }
      commit("savePostData", response);
    },
  },
};
