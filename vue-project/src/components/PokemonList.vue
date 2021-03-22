<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <p
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      class="pokemon-list-item"
    >
      {{ index + 1 + ". " }}

      {{ pokemon.name }}
      <img
        :key="pokemon.url"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`"
        alt="Pokemon`"
      />
      <a
        class="nes-btn"
        :class="{ 'is-disabled': favouriteListLength === 10 }"
        @click="playPokemonCry(index + 1)"
        >Pick me!</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    playPokemonCry(pokemonId) {
      const audio = new Audio(
        `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
      );
      audio.play();
    },
  },
};
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