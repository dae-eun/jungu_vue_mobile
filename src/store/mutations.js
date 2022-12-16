export default {
  // 메인 배너
  BANNER(state, banner) {
    state.banner = banner;
  },
  // 메인 검색
  TOTAL_SEARCH(state, totalsearch) {
    state.totalsearch = totalsearch;
  },
  MAIN_STATICS(state, mainstatics) {
    state.mainstatics = mainstatics;
  },
  MAIN_NOTICE(state, mainnotice) {
    state.mainnotice = mainnotice;
  },

  // 공지
  BOARD_NOTICE(state, notice) {
    let item = notice.data.currentlist.pageinfo;
    let itemNo = item.totalcount - (item.currentpage - 1) * 10;
    state.itemNo = itemNo;
    let period = notice.data.currentlist.noticelist;
    period.forEach(el => {
      el.regdate = el.regdate.toString().substr(0, 10);
    });
    state.notice = notice;
  },
  INFO_NOTICEINFO(state, noticeinfo) {
    state.noticeinfo = noticeinfo;
  },

  // 관광정보
  BOARD_TOURLIST(state, tourlist) {
    state.tourlist = tourlist;
  },
  INFO_TOURINFO(state, tourinfo) {
    state.tourinfo = tourinfo;
  },

  // 의료기관
  BOARD_MEDICALLIST(state, medicalList) {
    state.medicalList = medicalList;
  },
  INFO_MEDICALINFO(state, medicalinfo) {
    state.medicalinfo = medicalinfo;
  },
  MAP_tourlist(state, tourlist) {
    state.tourlist = tourlist;
  },

  // FAQ
  BOARD_FAQLIST(state, faqList) {
    state.faqList = faqList;
  },
  MAP_CATLIST(state, categoryinfo) {
    if (state.categorykindof == 1) {
      categoryinfo.data.categorylist.reverse();
    }
    state.categoryinfo = categoryinfo;
  },

  // eBook
  BOARD_EBOOK(state, eBook) {
    let item = eBook.data.currentlist.pageinfo;
    let itemNo = item.totalcount - (item.currentpage - 1) * 10;
    state.itemNo = itemNo;
    let period = eBook.data.currentlist.eventlist;
    period.forEach(el => {
      el.regdate = el.regdate.toString().substr(0, 10);
    });
    state.eBook = eBook;
  },
  INFO_EBOOKINFO(state, eBookinfo) {
    state.eBookinfo = eBookinfo;
  },

  // 번역
  PAPAGO_DETECTLANG(state, detectlang) {
    state.detectlang = detectlang;
  },
  PAPAGO_TRANSLATE(state, translate) {
    state.translate = translate;
  },

  // 항공운행
  TRAFFIC_AIRINFO(state, airinfo) {
    state.airinfo = airinfo;
    let period = airinfo.data.items.item;
    period.forEach(el => {
      el.internationalTime =
        el.internationalTime.toString().substr(0, 2) +
        ':' +
        el.internationalTime.toString().substr(2, 2);
    });
    state.airinfo = airinfo;
  },
  TRAFFIC_AIRSEARCH(state, airsearch) {
    state.airsearch = airsearch;
  },
  TRAFFIC_AIRSEARCHARR(state, airsearcharr) {
    state.airsearcharr = airsearcharr;
  },

  // 기차운행
  // 운행일정 검색
  TRAFFIC_TRAININFO(state, traininfo) {
    state.traininfo = traininfo;
    let period = traininfo.data.items.item;
    period.forEach(el => {
      el.arrplandtime =
        el.arrplandtime.toString().substr(8, 2) + ':' + el.arrplandtime.toString().substr(10, 2);
      el.depplandtime =
        el.depplandtime.toString().substr(8, 2) + ':' + el.depplandtime.toString().substr(10, 2);
    });
    state.traininfo = traininfo;
  },
  // 출발역 선택
  TRAFFIC_TRAINLISTDEP(state, trainlistdep) {
    state.trainlistdep = trainlistdep;
  },
  // 도착역 선택
  TRAFFIC_TRAINLISTARR(state, trainlistarr) {
    state.trainlistarr = trainlistarr;
  },
};
