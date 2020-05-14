<template>
  <div class="results container-fluid">
    RESULTS HERE
    {{ foods }}
  </div>
</template>

<script>
export default {
  name: "Results",
  mounted() {
    this.$store.dispatch("getActiveLog", this.$route.params.id);
  },
  computed: {
    foods() {
      return this.$store.state.searchResults;
    },
  },
};
</script>

<style></style>
