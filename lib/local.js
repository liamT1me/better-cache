const local = {
  localCache: {},
  getLocal(key) {
    return key ? JSON.parse(localStorage.getItem(key)) : null;
  },
  setLocal(key, value) {
    const src = JSON.stringify(value);
    localStorage.setItem(key, src);
  },
  removeLocal(key) {
    localStorage.removeItem(key);
    // delete this.cacheData[key];
  },
  clearLocal() {
    const storages = Object.keys(localStorage);
    if (storages.length > 0) {
      storages.forEach((storage) => {
        if (!/^GLOBAL_\S*$/.test(storage)) {
          this.removeLocal(storage);
        }
      });
    }
  },
  clearLocalAll() {
    localStorage.clear();
    // this.cacheData = {};
  },
};

export default local;
