<template>
  <div class="sec01">
    <h4 class="tit03" @click="console">지도</h4>
    <div id="map">
      <naver-maps
        :width="this.width"
        :height="this.height"
        :mapOptions="this.mapOptions"
        :initLayers="this.initLayers"
        @load="callback"
      >
        <naver-marker
          :lat="this.mapOptions.lat"
          :lng="this.mapOptions.lng"
          @click="onMarkerClicked"
          @load="onMarkerLoaded"
        ></naver-marker>
        <naver-info-window class="info-window" @load="onWindowLoad" :isOpen="info" :marker="marker">
          <div class="info-window-container">
            <h1>{{ coordinate.tourname }}</h1>
          </div>
        </naver-info-window>
      </naver-maps>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coordinate: {},
  },
  data() {
    return {
      mainCat: '1',
      width: '100%',
      height: 560,
      info: true,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: this.coordinate.lat,
        lng: this.coordinate.lng,
        zoom: 17,
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
      return this.coordinate.tourname;
    },
  },
  methods: {
    console() {
      console.log(this.$props);
    },
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
      console.log('callback::');
    },
  },
  created() {},
};
</script>

<style></style>
