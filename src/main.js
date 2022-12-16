import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import { store } from './store/index.js';
import './assets/css/common.css';
import './assets/css/style.css';
import busan_jingu from './assets/js/busan_jingu';
import axios from 'axios';
import naver from 'vue-naver-maps';
import { i18n } from '@/locales/i18n';
import VueClipboard from 'vue-clipboard2';
import translation from './assets/js/translation.js';

Vue.prototype.$axios = axios;
Vue.use(translation);
Vue.config.productionTip = false;
Vue.use(busan_jingu);
Vue.use(VueClipboard);
Vue.use(naver, {
  clientID: 'dolu3wx8q8',
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  subModules: '', // 서브모듈 (선택)
});

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app');
