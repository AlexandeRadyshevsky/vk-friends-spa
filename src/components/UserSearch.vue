<template>
  <div>
    <input v-model="query" @input="searchUsers" placeholder="Введите имя, фамилию или ID" />
    <ul v-if="searchResults.length">
      <li v-for="user in searchResults" :key="user.id">
        {{ user.first_name }} {{ user.last_name }}
        <button @click="addUser(user)">Добавить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      searchResults: [],
    };
  },
  methods: {
    async searchUsers() {
      if (this.query.length < 3) return;
      const response = await fetch(`https://api.vk.com/method/users.search?q=${this.query}&access_token=ВАШ_ТОКЕН&v=5.131`);
      const data = await response.json();
      this.searchResults = data.response.items;
    },
    addUser(user) {
      this.$store.commit('addUser', user);
    }
  }
};
</script>
