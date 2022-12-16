export default {
  install(Vue) {
    Vue.prototype.$translation = function(text) {
      return this.$i18n.t(text).replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
  },
};
