import { queryApiGetMethod, queryFormatJson } from "@/services/app";

export default {
  namespaced: true,
  state: () => ({
    account: "account name is here",
    viewCount: 109,
    data: {},
    formatData: [],
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
  },
};
