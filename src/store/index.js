import { createStore } from 'vuex';

export default createStore({
  state: {
    initialUsers: [],
    friends: [],
  },
  mutations: {
    addUser(state, user) {
      if (!state.initialUsers.some(u => u.id === user.id)) {
        state.initialUsers.push(user);
      }
    },
    removeUser(state, userId) {
      state.initialUsers = state.initialUsers.filter(u => u.id !== userId);
    },
    setFriends(state, friends) {
      state.friends = friends;
    }
  },
  actions: {
    async fetchFriends({ state, commit }) {
      const ids = state.initialUsers.map(u => u.id).join(',');
      const response = await fetch(`https://api.vk.com/method/friends.get?user_ids=${ids}&fields=photo_50,sex,bdate&access_token=ВАШ_ТОКЕН&v=5.131`);
      const data = await response.json();
      commit('setFriends', data.response.items);
    }
  }
});
