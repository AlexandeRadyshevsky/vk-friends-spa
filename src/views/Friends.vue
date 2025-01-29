<template>
    <div>
      <button @click="$router.back()">Назад</button>
      <h2>{{ friend.first_name }} {{ friend.last_name }}</h2>
      <ul>
        <li v-for="user in commonUsers" :key="user.id">
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import store from '../store';
  
  export default {
    computed: {
      friend() {
        return store.state.selectedFriend;
      },
      commonUsers() {
        return store.state.sourceUsers.filter(u => u.friends?.includes(this.friend.id));
      }
    },
    created() {
      store.setSelectedFriend(this.$route.params.id);
    }
  };
  </script>
  