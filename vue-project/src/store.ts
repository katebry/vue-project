import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'pokedex'
    })],
    state: {
        statePokemonDataList: [],
    },
    actions: {
        setPokemonData(context, payload) {
            context.commit('setPokemonData', payload)
        }
    },
    mutations: {
        setPokemonData(state, list) {
            state.statePokemonDataList = list
        },
    },
})

export default store