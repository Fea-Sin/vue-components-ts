import { queryApiGetMethod } from "@/services/app";

export default {
  namespaced: true,
  state: () => ({
    acount: "method",
    viewCount: 10,
    data: {},
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
  },
  actions: {
    async incrementBy({ commit }: any, payload: any) {
      const response = await queryApiGetMethod(payload);
      commit("saveData", response);
    },
  },
};
