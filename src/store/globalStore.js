const globalStore = () => {
  return {
    currentLocal: '全国',
    newLocation(location) {
      this.currentLocal = location;
    },
  };
};

export default globalStore;
