<template>
  <div class="select-pokemon-page">
    <img src="./../assets/logo-pixel.gif" alt="pokémon" />
    <div class="select-pokemon-content">
      <pokemon-list :pokemon-list="statePokemonDataList" />
      <pagination
        :total-pages="16"
        :total="151"
        :per-page="10"
        :current-page="currentPage"
        :pokemon="statePokemonDataList"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList";
import Pagination from "@/components/Pagination";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    PokemonList,
    Pagination,
  },
   data: {
    page: 1,
    perPage: 10,
    pokemon: [],
    dataLength: 16
  },
  // this caches the PokemonDataList in the 'statePokemonDataList' variable in the global store (React's globalContext)
  computed: {
    ...mapState(["statePokemonDataList"]),
  },
  // created is the lifecycle hook where you usually make API requests
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    // you can use an async here cause of Vuex
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    },
    getPage: function(page) {
      // we simulate an api call that fetch the records from a backend
      this.pokemon = [];
      const startIndex = this.perPage * (page - 1) + 1;
      const endIndex = startIndex + this.perPage - 1;
      for (let i = startIndex; i <= endIndex; i++) {
        this.records.push(`Item ${i}`);
      }
    },
    ...mapActions(["setPokemonData"]),
  },
};
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