<template>
    <div :style="{ backgroundColor: getColor() }">
      <img :src="friend.photo_50" alt="Фото" />
      <p>{{ friend.first_name }} {{ friend.last_name }}</p>
      <button @click="goToProfile">Подробнее</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['friend'],
    methods: {
      getColor() {
        const mutualCount = this.friend.common_count || 0;
        const intensity = Math.min(mutualCount * 20, 255);
        return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
      },
      goToProfile() {
        this.$router.push({ name: 'profile', params: { id: this.friend.id } });
      }
    }
  };
  </script>
  