<template>
  <div class="select-pokemon-page">
    <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon"
    >
    <div class="select-pokemon-content">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :favourites="stateFavouritePokemonList"
        @deleteFavourite="deleteFavourite"
      />
      <summary-faves
        :pokemon-list="statePokemonDataList"
        :favourites="stateFavouritePokemonList"
        @eraseFavouritePokemonList="eraseFavouritePokemonList"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        PokemonList,
    },
    computed: {
        ...mapState(['statePokemonDataList', 'stateFavouritePokemonList']),
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        ...mapActions(['setPokemonData']),
    },
}
</script>

<style scoped>
.select-pokemon-page {
    text-align: center;
}
.select-pokemon-content {
    text-align: left;
    display: flex;
    justify-content: space-evenly;
}
</style>