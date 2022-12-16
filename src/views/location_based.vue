<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.nav2') }}</p>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.dropNav.nav2.n0') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav2.n0') }}</h2>
        <figure class="location_based title_banner_img"></figure>
        <div class="find_tab_menu">
          <div class="find_map">
            <h4 class="tit03">{{ $t('location_based.search') }}</h4>
            <div class="tab_menu_container">
              <ul class="new_tab">
                <li>
                  <a :class="mainCat == '1' ? 'active' : ''" @click="changeCat(1)">{{
                    $t('location_based.medi')
                  }}</a>
                </li>
                <li>
                  <a :class="mainCat == '2' ? 'active' : ''" @click="changeCat(2)">{{
                    $t('location_based.tour')
                  }}</a>
                </li>
              </ul>
              <div
                class="agency_list_view"
                style="width: 415px !important; height: 60px !important; margin-top: 20px;"
              >
                <div
                  class="jg_common_selectbox"
                  title="검색조건 선택"
                  style="width: 415px !important; height: 60px !important;"
                >
                  <template v-if="mainCat == '1'">
                    <template v-if="this.$store.state.nation.Code == 'ko'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="callmediItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynameko }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'eu'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="callmediItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynameeu }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'jp'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="callmediItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamejp }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'chs'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="callmediItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamechs }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'cht'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="callmediItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamecht }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                  </template>
                  <template v-if="mainCat == '2'">
                    <template v-if="this.$store.state.nation.Code == 'ko'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="calltourItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynameko }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'eu'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="calltourItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynameeu }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'jp'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="calltourItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamejp }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'chs'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="calltourItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamechs }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                    <template v-if="this.$store.state.nation.Code == 'cht'">
                      <button
                        class="jg_common_selected"
                        style="width: 415px !important; height: 60px !important; border: 1px solid #295caa !important;"
                      >
                        <span>{{ $t('location_based.list') }}</span>
                      </button>
                      <ul class="jg_common_select_list" style="width: 100% !important;">
                        <li
                          class="jg_common_select_item"
                          v-for="(obj, index) in this.item"
                          :key="index"
                        >
                          <label>
                            <input
                              type="radio"
                              name="select_1"
                              :value="obj.id"
                              @click="calltourItem(obj.id)"
                            />
                            <span :class="obj.id == $store.state.Category ? 'active' : ''">
                              {{ obj.categorynamecht }}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </template>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="search_right_away">
            <h4 class="tit03">{{ $t('location_based.go') }}</h4>
            <ul class="new_tab">
              <li v-for="(obj, index) in this.locationItem" :key="index">
                <a @click="goMap(obj.lat, obj.lng, obj.name)">{{ obj.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <div class="sec01">
          <h4 class="tit03" @click="console">{{ $t('location_based.map') }}</h4>
          <div ref="map" id="map" class="map">네이버 지도</div>
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
      isOpen: true,
      categoryId: 1,
      locationArrayItem: [],
      item: [],
      infowindow: [],
      locationItem: [
        { lat: 35.1579587, lng: 129.0566546, name: this.$i18n.t('location_based.item0') },
        { lat: 35.1577633, lng: 129.0590374, name: this.$i18n.t('location_based.item1') },
        { lat: 35.1461158, lng: 129.0597226, name: this.$i18n.t('location_based.item2') },
        { lat: 35.1628298, lng: 129.0531867, name: this.$i18n.t('location_based.item3') },
      ],
      mainCat: '1',

      map: null,
      marker: [],
      mapOptions: {
        center: new window.naver.maps.LatLng(35.1579587, 129.0566546),
        zoom: 16,
      },
    };
  },
  mounted() {
    this.map = new window.naver.maps.Map(this.$refs.map, this.mapOptions);
  },
  beforeDestroy() {
    this.map.clearListeners();
  },
  computed: {
    // draggable() {
    //   if (!this.map) {
    //     return false;
    //   }
    //   return this.map.getOptions('draggable');
    // },
  },
  methods: {
    console() {},
    // 지도

    // 마커 제거
    onRemove() {
      this.marker.forEach(el => {
        el.setMap(null);
      });
      this.infowindow.forEach(el => {
        el.setMap(null);
      });
      this.marker = [];
      this.infowindow = [];
    },
    // 다중 마커
    multiMarker() {
      this.map.setZoom(12);
      this.map.setCenter(new window.naver.maps.LatLng(35.1579587, 129.0566546));
      this.locationArrayItem.forEach(el => {
        this.marker.push(
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(el.lat, el.lng),
            map: this.map,
          }),
        );
        console.log(el);

        if (this.categoryId == 1) {
          this.infowindow.push(
            new window.naver.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:10px;"><a href="/medical_institution_information_list/id=${el.id}&lat=${el.lat}&lng=${el.lng}&medicalname=${el.medicalname}">
              ${el.medicalname}
              </b></div>`,
            }),
          );
        } else if (this.categoryId == 2) {
          this.infowindow.push(
            new window.naver.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:10px;"><a href="/tourist_information_list/id=${el.id}&lat=${el.lat}&lng=${el.lng}&tourname=${el.tourname}">
              ${el.tourname}
              </b></div>`,
            }),
          );
        }
      });

      // console.log(this.infowindow[i]);
      // this.infowindow[i].open(this.map, this.marker[i]);
      for (var j = 0, ii = this.marker.length; j < ii; j++) {
        window.naver.maps.Event.addListener(this.marker[j], 'click', this.getClickHandler(j));
      }
    },
    // 마커 담는 함수
    getClickHandler(seq) {
      return () => {
        let marker = this.marker[seq];
        let infoWindow = this.infowindow[seq];

        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(this.map, marker);
          console.log();
        }
      };
    },

    // 단일 마커
    goMap(lat, lng, name) {
      this.radioUnlock();
      this.map.setZoom(16);
      this.onRemove();
      this.map.setCenter(new window.naver.maps.LatLng(lat, lng));
      this.marker.push(
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(lat, lng),
          map: this.map,
          zIndex: 100,
        }),
      );
      this.infowindow.push(
        new window.naver.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:10px;">' + name + '</b></div>',
        }),
      );
      this.infowindow[0].open(this.map, this.marker[0]);

      // 마커 위치조정
      // this.marker.setPosition(window.naver.maps.LatLng(lat, lng));
    },
    // toggle옵션
    toggleInteraction() {
      this.map.setOptions({
        draggable: !this.map.getOptions('draggable'),
      });
    },

    // 카테고리 선택 시 데이터 불러오기
    async calltourItem(id) {
      // this.categoryId = id;
      await this.$store
        .dispatch('BOARD_TOURLIST', {
          page: 1,
          size: 9999,
          categoryid: id,
          searchtext: '',
        })
        .then(
          setTimeout(() => {
            this.locationArrayItem = this.$store.state.tourlist.data.currenttourlist.tourinfolist;
            this.onRemove();
            this.multiMarker();
          }, 500),
        );
    },
    callmediItem(id) {
      // this.categoryId = id;
      this.$store
        .dispatch('BOARD_MEDICALLIST', {
          page: 1,
          size: 9999,
          categoryid: id,
          searchtext: '',
        })
        .then(
          setTimeout(() => {
            this.locationArrayItem = this.$store.state.medicalList.data.currentmedicallist.medicalinfolist;
            this.onRemove();
            this.multiMarker();
          }, 500),
        );
    },

    // 리스트 호출
    changeCat(id) {
      this.radioUnlock();
      if (id == 1) {
        this.categoryId = 1;
      } else if (id == 2) {
        this.categoryId = 2;
      }
      this.mainCat = id;
      this.$store.state.categorykindof = id;
      this.$store
        .dispatch('MAP_CATLIST', {
          categorykindof: this.$store.state.categorykindof,
        })
        .then(() => {
          this.item = this.$store.state.categoryinfo.data.categorylist;
        });
    },
    radioUnlock() {
      let radio = document.getElementsByName('select_1');
      radio.forEach(el => {
        el.checked = false;
      });
    },
  },
  created() {
    this.$store.state.categorykindof = 1;
    this.$store
      .dispatch('MAP_CATLIST', {
        categorykindof: this.$store.state.categorykindof,
      })
      .then(() => {
        this.item = this.$store.state.categoryinfo.data.categorylist;
      });
  },
};
</script>

<style>
.con_body {
  padding: 0 30px;
}
.find_tab_menu {
  margin-bottom: 0 !important;
}
.new_tab li a {
  line-height: 28px;
}
#map {
  width: 100%;
  height: 618px;
}
</style>
