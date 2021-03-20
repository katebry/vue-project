<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <p
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      class="pokemon-list-item"
    >
      {{ index + 1 + '. ' }}
      <i
        v-if="favourites.includes(pokemon.name)"
        class="nes-icon is-small heart"
      />
      <i
        v-else
        class="nes-icon is-small heart is-empty"
      />
      {{ pokemon.name }}
      <img
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      >
      <a
        v-show="!favourites.includes(pokemon.name)"
        class="nes-btn"
        :class="{ 'is-disabled': favouriteListLength === 10 }"
        @click="setFavourites(pokemon.name), playPokemonCry(index + 1)"
      >Pick me!</a>
      <button
        v-show="favourites.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setFavourites(pokemon.name), playPokemonCry(index + 1)"
      >
        Remove
      </button>
    </p>
  </div>
</template>

<script>
export default {
    name: 'PokemonList',
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favourites: {
            type: Array,
            required: true,
        },
    },
    computed: {
        favouriteListLength() {
            return this.favourites.length
        },
    },
    methods: {
        setFavourites(name) {
            if (this.favourites.includes(name)) {
                const indexInArray = this.favourites.indexOf(name)
                this.$emit('deleteFavourite', indexInArray)
                return
            }
            if (this.favouriteListLength < 10) {
                this.$emit('addFavourite', name)
            }
        },
        playPokemonCry(pokemonId) {
            const audio = new Audio(
                `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
            )
            audio.play()
        }
    },
}
</script>

<style scoped>
.pokemon-list {
    text-transform: capitalize;
}
.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>