import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getter'
import * as actions from './action'
import createLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

let store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store; 