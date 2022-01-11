import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    getters: {
        getToken(state){
            // 获取token逻辑
            return state.token
        }
    },
    mutations: { // 同步逻辑 commit
        setToken(state, data){
            state.token = data
        }
    },
    actions: {
        clearAll({ commit }) {
            return new Promise(resolve => {
                commit('setToken', '')
                resolve('ok')
            })
        }
    }
})