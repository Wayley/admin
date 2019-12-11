import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config/index';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
let BASE_URL =
  config.basicUrl === '/' ? window.location.origin : config.basicUrl;
let uploadUrl = `${BASE_URL}${config.docUrl}`;

// states
const state = {
  siteName: 'XXXXX',
  metaName: 'XXXXX',
  metaShow: true,
  basicUrl: BASE_URL,
  docUrl: uploadUrl,
  account: '',
  pageSize: 25, // 分页
  menus: [],
  containerClient: 100,
  tableClient: 200
};

// getters
const getters = {
  siteName: state => state.siteName,
  metaName: state => state.metaName,
  metaShow: state => state.metaShow,
  basicUrl: state => state.basicUrl,
  docUrl: state => state.docUrl,
  account: state => state.account,
  pageSize: state => state.pageSize,
  menus: state => state.menus,
  containerClient: state => state.containerClient,
  tableClient: state => state.tableClient
};

// actions
const actions = {
  menus({ commit }) {
    // TODO:
    commit('menus', []);
  },
  storeTableClient({ commit }) {
    const clientH = document.documentElement.clientHeight;
    commit('containerClient', clientH - 60);
    commit('tableClient', clientH - 140 > 140 ? clientH - 140 : 150);
  }
};

// mutations
const mutations = {
  siteName(state, name) {
    state.siteName = name;
  },
  metaName(state, name) {
    state.metaName = name;
  },
  metaShow(state, status) {
    state.metaShow = status;
  },
  menus(state, menus) {
    state.menus = menus;
  },
  account(state, email) {
    state.account = email;
  },
  containerClient(state, high) {
    state.containerClient = high;
  },
  tableClient(state, high) {
    state.tableClient = high - 8;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
});
