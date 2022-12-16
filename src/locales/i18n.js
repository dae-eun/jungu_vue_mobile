import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json';
import ko from './ko.json';
import chs from './chs.json';
import cht from './cht.json';
import jp from './jp.json';
Vue.use(VueI18n);

const messages = {
  ko,
  en,
  jp,
  chs,
  cht,
};

export const i18n = new VueI18n({
  locale: 'ko', // 기본 언어
  fallbackLocale: 'en', // 기본 언어 표시에 문제가 있을 경우 대체할 언어
  messages,
});
