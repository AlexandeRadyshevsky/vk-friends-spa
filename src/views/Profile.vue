<template>
    <div>
      <h2>Профиль: {{ user.first_name }} {{ user.last_name }}</h2>
      <img :src="user.photo_50" alt="Фото" />
      <div v-for="post in wallPosts" :key="post.id">
        <p>{{ post.text }}</p>
      </div>
      <button @click="$router.go(-1)">Назад</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {},
        wallPosts: [],
      };
    },
    async created() {
      const userId = this.$route.params.id;
      const userResponse = await fetch(`https://api.vk.com/method/users.get?user_ids=${userId}&fields=photo_50&access_token=ВАШ_ТОКЕН&v=5.131`);
      const wallResponse = await fetch(`https://api.vk.com/method/wall.get?owner_id=${userId}&access_token=ВАШ_ТОКЕН&v=5.131`);
      this.user = (await userResponse.json()).response[0];
      this.wallPosts = (await wallResponse.json()).response.items;
    }
  };
  </script>
  