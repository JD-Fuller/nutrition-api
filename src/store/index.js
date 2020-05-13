import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

var _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/teamawesome",
  timeout: 8000,
});

var api = axios.create({
  baseURL: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
  timeout: 8000,
  headers: {
    "x-app-key": "27bcfa036a58c2771c65ed9dad033d5c",
    "x-app-id": "943fac47",
  },
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logs: [],
    user: {},
    activeLog: {},
    searchResults: [],
  },
  mutations: {
    addLog(state, data) {
      state.logs.push(data);
    },
    setAllLogs(state, data) {
      state.logs = data;
    },
    setActiveLog(state, data) {
      state.activeLog = data;
    },
    setSearchResults(state, searchResults) {
      debugger;
      state.searchResults = searchResults;
    },
  },
  actions: {
    async createLog({ commit, dispatch }, log) {
      let res = await _sandbox.post("logs", log);
      commit("addLog", res.data.data);
    },
    async getAllLogs({ commit, dispatch }) {
      let res = await _sandbox.get("logs");
      commit("setAllLogs", res.data.data);
    },
    async getActiveLog({ commit, dispatch }, id) {
      let res = await _sandbox.get("logs/" + id);
      commit("setActiveLog", res.data.data);
    },

    async searchNutritionixApi({ commit, dispatch }, query) {
      debugger;
      let res = await api.post(query);
      debugger;
      commit("setSearchResults", res.data.results);
    },
  },
  modules: {},
});
