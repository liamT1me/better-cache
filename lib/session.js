const session = {
  sessionCache: {},
  getSession(key) {
    return key ? JSON.parse(sessionStorage.getItem(key)) : null;
  },
  setSession(key, value) {
    const src = JSON.stringify(value);
    sessionStorage.setItem(key, src);
  },
  removeSession(key) {
    sessionStorage.removeItem(key);
    // delete this.cacheData[key];
  },
  clearSession() {
    const storages = Object.keys(sessionStorage);
    if (storages.length > 0) {
      storages.forEach((storage) => {
        if (!/^GLOBAL_\S*$/.test(storage)) {
          this.removeSession(storage);
        }
      });
    }
  },
  clearSessionAll() {
    sessionStorage.clear();
    // this.cacheData = {};
  },
};

export default session;
