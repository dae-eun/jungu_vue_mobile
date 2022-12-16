<template>
  <div>
    <div>
      <button @click="moveJeju">제주도로 이동</button>
      <button @click="toggleInteraction">인터랙션</button>
      {{ draggable }}
    </div>
    <div ref="map" id="map" class="map">네이버 지도</div>
  </div>
</template>

<script>
export default {
  data() {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    return {
      naverMap: null,
      jeju: new window.naver.maps.LatLng(33.3590628, 126.534361),
      mapOptions,
    };
  },
  mounted() {
    this.naverMap = new window.naver.maps.Map(this.$refs.map, this.mapOptions);
  },
  beforeDestroy() {
    this.naverMap.clearListeners();
  },
  computed: {
    draggable() {
      if (!this.naverMap) {
        return false;
      }
      return this.naverMap.getOptions('draggable');
    },
  },
  methods: {
    moveJeju() {
      this.naverMap.setCenter(this.jeju);
    },
    toggleInteraction() {
      this.naverMap.setOptions({
        draggable: !this.naverMap.getOptions('draggable'),
      });
    },
  },
};
</script>

<style>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
