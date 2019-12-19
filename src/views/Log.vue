<template>
  <div class="log container-fluid">
    <h1>Daily Food Log:</h1>
    {{ log.date }}
    <form @submit.prevent="search">
      <input v-model="query" type="text" placeholder="Search Food... " required />
      <button class="btn btn-success" type="submit">Search</button>
    </form>
    <ul>{{results}}</ul>
  </div>
</template>

<script>
import Results from "../components/results";
export default {
  name: "log",
  data() {
    return {
      query: ""
    };
  },
  components: {
    Results
  },
  mounted() {
    this.$store.dispatch("getActiveLog", this.$route.params.id);
  },
  computed: {
    log() {
      return this.$store.state.activeLog;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("searchNutritionixApi", this.query);
    }
  }
};
</script>

<style>
</style>