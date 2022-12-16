import axios from 'axios';

const config = {
  baseUrl: 'http://101.101.211.158:8082/api/',
};
// 메인화면
// 배너 출력
function banner(code) {
  return axios.get(`${config.baseUrl}main/banner/bannerlist?code=${code}`);
}
// 전체 검색
function totalsearch(code, searchtext) {
  return axios.get(`${config.baseUrl}totalsearch?code=${code}&searchtext=${searchtext}`);
}
// 게시판 등록갯수 및 최신글
function mainstatics(code) {
  return axios.get(`${config.baseUrl}mainstatics?code=${code}`);
}
// 공지 출력
function mainnotice(page, size, code, searchtext) {
  return axios.get(
    `${config.baseUrl}main/noticelist?page=${page}&size=${size}&code=${code}&searchtext=${searchtext}`,
  );
}

// 공지
// list
function notice(page, size, code, searchtext) {
  return axios.get(
    `${config.baseUrl}noticelist?page=${page}&size=${size}&code=${code}&searchtext=${searchtext}`,
  );
}
// info
function noticeinfo(id) {
  return axios.get(`${config.baseUrl}noticeinfo?id=${id}`);
}
// 조회수
function noticecount(id, nationcode) {
  return axios.get(`${config.baseUrl}notice/updateviewcount?id=${id}&nationcode=${nationcode}`);
}

// 관광정보
// list
function tourlist(page, size, code, categoryid, searchtext) {
  return axios.get(
    `${config.baseUrl}tourlist?page=${page}&size=${size}&code=${code}&categoryid=${categoryid}&searchtext=${searchtext}`,
  );
}
// info
function tourinfo(id) {
  return axios.get(`${config.baseUrl}tourinfo?id=${id}`);
}

// 의료기관정보
function medicalList(page, size, code, categoryid, searchtext) {
  return axios.get(
    `${config.baseUrl}medicallist?page=${page}&size=${size}&code=${code}&categoryid=${categoryid}&searchtext=${searchtext}`,
  );
}
function medicalinfo(id) {
  return axios.get(`${config.baseUrl}medicalinfo?id=${id}`);
}
// 조회수
function medicalcount(id, nationcode) {
  return axios.get(
    `${config.baseUrl}medicalinfo/updateviewcount?id=${id}&nationcode=${nationcode}`,
  );
}

// eBook
// list
function eBook(page, size, code, searchtext) {
  return axios.get(
    `${config.baseUrl}eventlist?page=${page}&size=${size}&code=${code}&searchtext=${searchtext}`,
  );
}
// info
function eBookinfo(id) {
  return axios.get(`${config.baseUrl}eventinfo?id=${id}`);
}
// 조회수
function eBookcount(id, nationcode) {
  return axios.get(`${config.baseUrl}event/updateviewcount?id=${id}&nationcode=${nationcode}`);
}

// faq
function faqList(page, code, kindof, searchtext) {
  return axios.get(
    `${config.baseUrl}faqlist?page=${page}&code=${code}&kindof=${kindof}&searchtext=${searchtext}`,
  );
}

// 위치기반 지도
function categoryinfo(categorykindof) {
  return axios.get(`${config.baseUrl}categoryinfo?categorykindof=${categorykindof}`);
}

// 번역
function detectlang(text) {
  return axios.post(`${config.baseUrl}detectlang?text=${text}`);
}
function translate(text, source, target) {
  return axios.post(`${config.baseUrl}translate?text=${text}&source=${source}&target=${target}`);
}

// 항공운행정보
// 항공편 조회
function airinfo(searchdate, startcitycode, arrvcitycode) {
  return axios.get(
    `${config.baseUrl}AirportInfo?searchdate=${searchdate}&startcitycode=${startcitycode}&arrvcitycode=${arrvcitycode}`,
  );
}
// 공항검색
function airsearch(airsearch) {
  return axios.get(`${config.baseUrl}AirportCityListByText?searchtext=${airsearch}`);
}
function airsearcharr(airsearch) {
  return axios.get(`${config.baseUrl}AirportCityListByText?searchtext=${airsearch}`);
}

// 기차운행정보
// 열차조회
function traininfo(DepPlaceId, ArrPlaceId, depPlandTime) {
  return axios.post(
    `${config.baseUrl}getTraininfo?&startstatioinid=${DepPlaceId}&arrstationid=${ArrPlaceId}&searchdate=${depPlandTime}`,
  );
}
// 역조회
function trainlistdep(cityCode) {
  return axios.get(`${config.baseUrl}TrainStationListByCityid?cityid=${cityCode}`);
}
function trainlistarr(cityCode) {
  return axios.get(`${config.baseUrl}TrainStationListByCityid?cityid=${cityCode}`);
}

export {
  banner,
  totalsearch,
  mainstatics,
  mainnotice,
  notice,
  noticeinfo,
  noticecount,
  tourlist,
  tourinfo,
  medicalList,
  medicalinfo,
  medicalcount,
  eBook,
  eBookinfo,
  eBookcount,
  faqList,
  categoryinfo,
  airinfo,
  airsearch,
  airsearcharr,
  traininfo,
  trainlistdep,
  trainlistarr,
  detectlang,
  translate,
};
