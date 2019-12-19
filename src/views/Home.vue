<template>
  <div class="home container-fluid">
    <h1>
      <img alt="Vue logo" class="img" src="../assets/logo.png" />Nutrition App
    </h1>
    <form @submit.prevent="createLog">
      <input v-model="newLog.date" type="date" placeholder />
      <input v-model="newLog.user" type="text" placeholder="Input Name" />
      <button class="btn btn-danger" type="submit">+</button>
    </form>
    <ul>
      <li v-for="log in logs" :key="log._id">
        <router-link :to="{ name: 'log', params: { id: log._id } }">
          {{
          log.date
          }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllLogs");
  },
  data() {
    return {
      newLog: {
        date: "",
        user: "",
        foods: []
      }
    };
  },
  methods: {
    createLog() {
      let log = { ...this.newLog };
      this.$store.dispatch("createLog", log);
      this.newLog = {
        date: "",
        user: ""
      };
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  }
};
</script>



<style>
.img {
  max-height: 3rem;
}
</style>