import {reactive} from 'vue';

export default{
    state: reactive({
        sourceUsers: [],
        friendsList: [],
        selectedFriend: null
      }),
      addUser(user) {
        if (!this.state.sourceUsers.find(u => u.id === user.id)) {
          this.state.sourceUsers.push(user);
        }
      },
      removeUser(userId) {
        this.state.sourceUsers = this.state.sourceUsers.filter(u => u.id !== userId);
      },
      setFriendsList(friends) {
        this.state.friendsList = friends;
      },
      setSelectedFriend(friend) {
        this.state.selectedFriend = friend;
      }
};
  
