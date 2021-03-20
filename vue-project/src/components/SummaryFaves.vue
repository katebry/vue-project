<template>
  <div>
    <h2>Your chosen favourite Pokémon</h2>
    <p v-if="favouriteListLength < maximumList">
      I can't choose, help me <button
        class="nes-btn is-success"
        @click="startInterval"
      >
        Pick Pokémon
      </button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favourites"
        :key="index"
        class="chosen-pokemon"
      >
        <!-- <img
          src="../assets/pokeball.png"
          alt="pokeball"
        > -->
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favouriteListLength > 1 && favouriteListLength < maximumList">
      You can add {{ maximumList - favouriteListLength }} more Pokémon
    </p>
    <p v-if="favouriteListLength > 9">
      Your list is full!
    </p>
    <p v-if="favouriteListLength > 9">
      Do you want to <button
        class="nes-btn is-error"
        @click="emptyFavouritePokemonList"
      >
        Delete
      </button> the list?
    </p>
    <router-link
      v-if="favouriteListLength > 0"
      class="nes-btn"
      to="/favourites"
    >
      View your favourite Pokémon
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'SummaryFaves',
        props: {
          pokemonList: {
            type: Array,
            required: true
          },
          favourites: {
            type: Array,
            required: true
          }
        },
        data: function() {
            return {
                maximumList: 10
            }
        },
        computed: {
            favouriteListLength() {
                return this.favourites.length
            }
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favouriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }
          },
          pickRandomPokemon() {
            const list = this.pokemonList.filter(function(pokemon){
              return !this.favourites.includes(pokemon.name)
            }, this)
            
            console.log(list)
          },
          emptyFavoritePokemonList() {
            this.$emit('eraseFavouritePokemonList')
          }
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>