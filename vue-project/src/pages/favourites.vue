<template>
  <div>
    <h1 class="overview-favourite-pokemon__title">
      Your favourite Pokémon
    </h1>
    <router-link
      class="nes-btn"
      to="/"
    >
      Go back
    </router-link>
    <div class="overview-favourite-pokemon">
      <pokemon-card
        v-for="(pokemon, index) in stateFavouritePokemonList"
        :key="index"
        :pokemon-name="pokemon"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokemonCard from '@/components/PokemonCard'
    export default {
        components: {
            PokemonCard
        },
        computed: {
            ...mapState([
            'stateFavouritePokemonList'
            ])
        }
    }
</script>

<style scoped>
.overview-favourite-pokemon {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.overview-favourite-pokemon__title {
  margin-top: 10px;
  text-align: center;
}
</style>