const globalStore = () => {
  return {
    currentLocal: '全国',
    historyView: [],
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
  };
};

export default globalStore;
