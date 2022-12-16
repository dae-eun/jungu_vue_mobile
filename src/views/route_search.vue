<template>
  <div id="content" class="jg_route">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('route_search.search') }}</h2>
        <figure class="title_banner_img route_search_bg">
          <img src="../assets/images/route_search.svg" alt="경로찾기배너이미지" />
        </figure>
        <div class="route_search">
          <div class="start_arrival">
            <h4 class="tit03">{{ $t('route_search.dep') }}</h4>
            <input
              type="text"
              name="start_area"
              id=""
              v-model="sName"
              :placeholder="$t('placeHolder.type5')"
            />
          </div>
          <a><img src="../assets/images/icon_change.png" alt="위치바꾸기아이콘"/></a>
          <div class="start_arrival">
            <h4 class="tit03">{{ $t('route_search.arr') }}</h4>
            <input
              type="text"
              name="start_area"
              id=""
              v-model="eName"
              :placeholder="$t('placeHolder.type6')"
            />
          </div>
          <button type="button" class="get_directions">
            <a
              style="color:#fff;"
              :href="`https://map.kakao.com/?sName=${sName}&eName=${eName}`"
              target="_blank"
              >{{ $t('route_search.load') }}</a
            >
          </button>
        </div>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <div class="sec01">
          <h4 class="tit03">{{ $t('route_search.map') }}</h4>
          <div id="map">
            <naver-maps
              :width="this.width"
              :height="this.height"
              :mapOptions="this.mapOptions"
              :initLayers="this.initLayers"
              @load="callback"
            >
              <naver-marker
                :lat="35.1579587"
                :lng="129.0566546"
                @click="onMarkerClicked"
                @load="onMarkerLoaded"
              ></naver-marker>
              <naver-info-window
                class="info-window"
                @load="onWindowLoad"
                :isOpen="info"
                :marker="marker"
              >
                <div
                  class="info-window-container"
                  style="width:150px;text-align:center;padding:10px;"
                >
                  <h1>{{ hello }}</h1>
                </div>
              </naver-info-window>
            </naver-maps>
          </div>
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eName: '',
      sName: '',
      mainCat: '1',
      width: 690,
      height: 335,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      info: true,
      mapOptions: {
        lat: 35.1579587,
        lng: 129.0566546,
        zoom: 15,
      },
      initLayers: [
        'BACKGROUND',
        'BACKGROUND_DETAIL',
        'POI_KOREAN',
        'TRANSIT',
        'ENGLISH',
        'CHINESE',
        'JAPANESE',
      ],
    };
  },
  computed: {
    hello() {
      return this.$i18n.t('route_search.dot');
    },
  },
  methods: {
    // 지도
    onMarkerLoaded(vue) {
      this.marker = vue.marker;
    },
    onMarkerClicked(event) {
      console.log(event); // 네이버 event 객체
      this.info = !this.info;
    },
    onWindowLoad() {
      this.info = !this.info;
    },
    onLoad(map) {
      this.map = map;
    },
    callback() {
      this.info = true;
      console.log('callback::' + this.info);
    },
  },
  created() {},
};
</script>

<style scoped></style>
