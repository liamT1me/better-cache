import local from "./local";
import session from "./session";
const { __NAME__, __VERSION__ } = process.env;

const storage = {
  name: __NAME__,
  version: __VERSION__,
  ...local,
  ...session,
};

storage.install = (Vue) => {
  const vue_version = +Vue.version.split(".")[0];
  if (vue_version < 3) {
    const v2 = Vue.prototype.$storage;
    Vue.prototype[v2 ? "$_storage" : "$storage"] = storage;
  } else {
    const v3 = Vue.config.globalProperties.$storage;
    Vue.config.globalProperties[v3 ? '$_storage' : '$storage'] = storage;
  }
};

window[window.storage ? "_storage" : "storage"] = storage;

export default storage;
