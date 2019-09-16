import Vue from "vue"
import Vuex from "vuex"
import Login from "./login/index.js"


Vue.use(Vuex);
const state = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules:{
        Login
    }
})