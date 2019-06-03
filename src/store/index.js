import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "58efe30b996d7f6c036dc935b3c3457ed21567c269b90f0299961151df35c279"
fundebugVue(fundebug, Vue);
Vue.use(Vuex)

const state = {
    isLogin: 0,   //0-未登录  1-登录
    shippingId: 0,
    followList: [],    //关注列表
    footprintList: [], //足迹
    searchHistory: []
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
