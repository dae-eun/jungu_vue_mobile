import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import nation from '@/store/nation.js';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { nation },
  plugins: [
    createPersistedState({
      paths: ['nation'],
    }),
  ],
  state: {
    banner: [],
    totalsearch: [],
    mainstatics: [],
    mainnotice: [],
    tourist: [],
    notice: [],
    noticeinfo: [],
    tourlist: [],
    tourinfo: [],
    medicalList: [],
    medicalinfo: [],
    faqList: [],
    eBook: [],
    eBookinfo: [],
    categoryinfo: [],
    airinfo: [],
    traininfo: [],
    trainlistdep: [],
    trainlistarr: [],

    // 게시판
    Size: 10,
    Page: 1,
    Id: '',
    Category: '',
    Searchtext: '',
    // Code: 'ko', // module nation
    itemNo: '',

    // 번역
    Text: '',
    Source: '',
    Target: 'ko',
    translate: [],

    // 항공정보
    airsearch: [],
    airsearcharr: [],
    searchDep: [],
    DepAirportId: '',
    searchArr: [],
    ArrAirportId: '',

    // 기차정보
    DepPlaceId: '',
    ArrPlaceId: '',
    // 기차역 코드
    CityCode: '',

    // 교통 공통
    NumOfRows: 10,
    PageNo: 1,

    gonggongkey: process.env.VUE_APP_GONGGONG_KEY,
  },
  getters: {},
  mutations,
  actions,
});
