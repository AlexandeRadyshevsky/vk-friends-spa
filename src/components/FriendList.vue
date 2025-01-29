<template>
  <div>
    <button @click="buildFriends">Построить список друзей</button>
    <div v-if="friends.length">
      <FriendCard v-for="friend in sortedFriends" :key="friend.id" :friend="friend" />
    </div>
  </div>
</template>

<script>
import FriendCard from './FriendCard.vue';

export default {
  components: { FriendCard },
  computed: {
    friends() {
      return this.$store.state.friends;
    },
    sortedFriends() {
      return [...this.friends].sort((a, b) => a.last_name.localeCompare(b.last_name));
    }
  },
  methods: {
    buildFriends() {
      this.$store.dispatch('fetchFriends');
    }
  }
};
</script>
