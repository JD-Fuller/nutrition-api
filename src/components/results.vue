<template>
  <div class="results container-fluid">
    RESULTS HERE
    {{ food.food_name }}
  </div>
</template>

<script>
export default {
  name: "Results",
  computed: {
    foods() {
      return this.$store.state.searchResults;
    },
  },
};
</script>

<style></style>
