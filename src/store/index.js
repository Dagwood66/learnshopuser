import Vue from "vue"
import Vuex from "vuex"
import {getToken} from "../utils/auth"

export const TOKEN = "token";

const state = {
    token: getToken()
};
const getters = {};
const mutations = {};
const actions = {};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});