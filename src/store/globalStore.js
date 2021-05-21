const globalStore = () => {
  return {
    currentLocal: '全国',
    historyView: [],
    userInfo: {},
    userLoginMessages: {},
    // action
    newLocation(location) {
      this.currentLocal = location;
    },
    historyChange(value) {
      this.historyView.push(value);
    },
    removeHistory() {
      this.historyView = [];
    },
    changeLoginMessage(loginMessage) {
      this.userLoginMessages = loginMessage
    },

    changeUserInfo(loginMessage) {
      this.userInfo = loginMessage
    },

  };
};

export default globalStore;
