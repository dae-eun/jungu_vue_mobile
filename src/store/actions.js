import {
  banner,
  totalsearch,
  mainstatics,
  mainnotice,
  notice,
  noticeinfo,
  tourlist,
  tourinfo,
  medicalList,
  medicalinfo,
  faqList,
  eBook,
  eBookinfo,
  categoryinfo,
  airinfo,
  airsearch,
  airsearcharr,
  traininfo,
  trainlistdep,
  trainlistarr,
  detectlang,
  translate,
} from '../api/index.js';

export default {
  // banner
  BANNER({ commit }, payload) {
    return banner(payload.code)
      .then(({ data }) => {
        commit('BANNER', data);
      })
      .catch(error => console.log(error));
  },
  // totalsearch
  TOTAL_SEARCH({ commit }, payload) {
    totalsearch(payload.code, payload.searchtext)
      .then(({ data }) => {
        commit('TOTAL_SEARCH', data);
      })
      .catch(error => console.log(error));
  },
  // mainstatics
  MAIN_STATICS({ commit }, payload) {
    return mainstatics(payload.code)
      .then(({ data }) => {
        commit('MAIN_STATICS', data);
      })
      .catch(error => console.log(error));
  },
  MAIN_NOTICE({ commit }, payload) {
    return mainnotice(payload.page, payload.size, payload.code, payload.searchtext)
      .then(({ data }) => {
        commit('MAIN_NOTICE', data);
      })
      .catch(error => console.log(error));
  },

  // Notice
  BOARD_NOTICE({ commit }, payload) {
    return notice(payload.page, payload.size, payload.code, payload.searchtext)
      .then(({ data }) => {
        commit('BOARD_NOTICE', data);
      })
      .catch(error => console.log(error));
  },
  async INFO_NOTICEINFO({ commit }, payload) {
    try {
      const { data } = await noticeinfo(payload.id);
      commit('INFO_NOTICEINFO', data);
    } catch (error) {
      return console.log(error);
    }
  },

  // Tourlist
  BOARD_TOURLIST({ commit }, payload) {
    tourlist(payload.page, payload.size, payload.code, payload.categoryid, payload.searchtext)
      .then(({ data }) => {
        commit('BOARD_TOURLIST', data);
      })
      .catch(error => console.log(error));
  },
  INFO_TOURINFO({ commit }, payload) {
    tourinfo(payload.id)
      .then(({ data }) => {
        commit('INFO_TOURINFO', data);
      })
      .catch(error => console.log(error));
  },

  BOARD_MEDICALLIST({ commit }, payload) {
    return medicalList(
      payload.page,
      payload.size,
      payload.code,
      payload.categoryid,
      payload.searchtext,
    )
      .then(({ data }) => {
        commit('BOARD_MEDICALLIST', data);
      })
      .catch(error => console.log(error));
  },
  INFO_MEDICALINFO({ commit }, payload) {
    medicalinfo(payload.id)
      .then(({ data }) => {
        commit('INFO_MEDICALINFO', data);
      })
      .catch(error => console.log(error));
  },

  BOARD_FAQLIST({ commit }, payload) {
    return faqList(payload.page, payload.code, payload.categoryid, payload.searchtext)
      .then(({ data }) => {
        commit('BOARD_FAQLIST', data);
      })
      .catch(error => console.log(error));
  },

  // eBook
  BOARD_EBOOK({ commit }, payload) {
    return eBook(payload.page, payload.size, payload.code, payload.searchtext)
      .then(({ data }) => {
        commit('BOARD_EBOOK', data);
      })
      .catch(error => console.log(error));
  },
  async INFO_EBOOKINFO({ commit }, payload) {
    try {
      const { data } = await eBookinfo(payload.id);
      commit('INFO_EBOOKINFO', data);
    } catch (error) {
      return console.log(error);
    }
  },

  // PAPAPGO
  PAPAGO_DETECTLANG({ commit }, payload) {
    detectlang(payload.text)
      .then(({ data }) => {
        commit('PAPAGO_DETECTLANG', data);
      })
      .catch(error => console.log(error));
  },
  PAPAGO_TRANSLATE({ commit }, payload) {
    translate(payload.text, payload.source, payload.target)
      .then(({ data }) => {
        commit('PAPAGO_TRANSLATE', data);
      })
      .catch(error => console.log(error));
  },

  // 항공
  // 항공 운행시간
  TRAFFIC_AIRINFO({ commit }, payload) {
    return airinfo(payload.searchdate, payload.startcitycode, payload.arrvcitycode)
      .then(({ data }) => {
        commit('TRAFFIC_AIRINFO', data);
      })
      .catch(error => console.log(error));
  },
  // 공항검색
  TRAFFIC_AIRSEARCH({ commit }, payload) {
    airsearch(payload.airsearch)
      .then(({ data }) => {
        commit('TRAFFIC_AIRSEARCH', data);
      })
      .catch(error => console.log(error));
  },
  TRAFFIC_AIRSEARCHARR({ commit }, payload) {
    airsearcharr(payload.airsearch)
      .then(({ data }) => {
        commit('TRAFFIC_AIRSEARCHARR', data);
      })
      .catch(error => console.log(error));
  },

  // 기차
  // 기차운행시간
  TRAFFIC_TRAININFO({ commit }, payload) {
    traininfo(payload.depPlaceId, payload.arrPlaceId, payload.depPlandTime)
      .then(({ data }) => {
        commit('TRAFFIC_TRAININFO', data);
      })
      .catch(error => console.log(error));
  },
  // 출발역
  TRAFFIC_TRAINLISTDEP({ commit }, payload) {
    trainlistdep(payload.cityCode)
      .then(({ data }) => {
        commit('TRAFFIC_TRAINLISTDEP', data);
      })
      .catch(error => console.log(error));
  },
  // 도착역
  TRAFFIC_TRAINLISTARR({ commit }, payload) {
    trainlistarr(payload.cityCode)
      .then(({ data }) => {
        commit('TRAFFIC_TRAINLISTARR', data);
      })
      .catch(error => console.log(error));
  },

  MAP_tourlist({ commit }, payload) {
    tourlist(payload.page, payload.size, 'ko', payload.categoryid, payload.boardId)
      .then(({ data }) => {
        commit('MAP_tourlist', data);
      })
      .catch(error => console.log(error));
  },
  MAP_CATLIST({ commit }, payload) {
    return categoryinfo(payload.categorykindof)
      .then(({ data }) => {
        commit('MAP_CATLIST', data);
      })
      .catch(error => console.log(error));
  },
};
