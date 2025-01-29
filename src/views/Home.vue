<template>
  <div class="home-container">
    <div class="search-box">
      <input v-model="query" @input="searchUsers" placeholder="Введите имя, фамилию или id пользователя" />
      <div v-if="searchResults.length">
        <ul>
          <li v-for="user in searchResults" :key="user.id">
            <span>{{ user.first_name }} {{ user.last_name }}</span>
            <button @click="addUser(user)">Добавить</button>
          </li>
        </ul>
      </div>
    </div>
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
      const response = await fetch(`https://api.vk.com/method/users.search?q=${this.query}&access_token=YOUR_ACCESS_TOKEN&v=5.131`);
      const data = await response.json();
      this.searchResults = data.response.items;
    },
    addUser(user) {
      this.$store.commit('addUser', user);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.search-box {
  width: 60vw;
  height: 50vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
</style>
