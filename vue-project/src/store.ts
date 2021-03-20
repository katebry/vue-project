import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const LOCAL_STORAGE_PKM_NAMES = 'favouritePokemonNames'
const LOCAL_STORAGE_USER = 'userLoggedIn'

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'pokedex'
    })],
    state: {
        statePokemonDataList: [],
        stateFavouritePokemonList: [],
        loggedIn: false,
    },
    actions: {
        setUserLoggedIn(context) {
            context.commit('setUserLoggedIn')
        },
        setPokemonData(context, payload) {
            context.commit('setPokemonData', payload)
        },
        setFavouritePokemonList(context, payload) {
            context.commit('setFavouritePokemonList', payload)
        },
        // addFavourite(context, payload) {
        //     context.commit('addFavourite', payload)
        // },
        deleteFavourite(context, payload) {
            context.commit('deleteFavourite', payload)
        },
        eraseFavouritePokemonList(context) {
            context.commit('eraseFavouritePokemonList')
        },
    },
    mutations: {
        setUserLoggedIn(state) {
            state.loggedIn = true
        },
        setPokemonData(state, list) {
            state.statePokemonDataList = list
        },
        setFavoritePokemonList(state, list) {
            state.stateFavouritePokemonList = list
        },
        // addFavorite(state, name) {
        //     state.stateFavouritePokemonList.push(name)
        // },
        deleteFavorite(state, item) {
            state.stateFavouritePokemonList.splice(item, 1)
        },
        eraseFavoritePokemonList(state) {
            state.stateFavouritePokemonList = []
        },
    },
})

export default store