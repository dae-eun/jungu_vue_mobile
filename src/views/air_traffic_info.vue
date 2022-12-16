<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap" style="padding: 0 30px">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav4.n0') }}</h2>
      </div>
    </div>
    <figure style="text-align: center; margin-bottom: 40px">
      <img src="../assets/images/busan_banner.svg" alt="" />
    </figure>
    <div class="wrap">
      <div class="con_body air_traffic_info">
        <div class="find_tab_menu">
          <div class="air_info_search_container">
            <div class="international_domestic">
              <router-link :to="`/air_traffic_info?category=${1}`">
                <button :class="this.categoryid === 1 ? 'active' : ''" @click="changeCat(1)">
                  {{ $t('air_traffic_info.item0') }}
                </button>
              </router-link>
              <router-link :to="`/air_traffic_info?category=${2}`">
                <button :class="this.categoryid === 2 ? 'active' : ''" @click="changeCat(2)">
                  {{ $t('air_traffic_info.item1') }}
                </button>
              </router-link>
            </div>
            <div class="scheduled_departure_date">
              <h4 class="tit03">{{ $t('air_traffic_info.item4') }}</h4>
              <date-picker v-model="time1" valueType="format"></date-picker>
            </div>
            <div class="how_starting_destination">
              <div class="air_starting">
                <h4 class="tit03">{{ $t('air_traffic_info.item2') }}</h4>
                <input
                  id="depAir"
                  type="text"
                  :placeholder="$t('placeHolder.type5')"
                  @input="inputDep($event.target.value)"
                  @keypress.enter="enterDepData($event.target.value)"
                />
                <ul class="jg_air_search_comp" v-if="searchDep">
                  <li v-for="(obj, index) in this.$store.state.airsearch.data" :key="index">
                    <button
                      :value="obj.citycode"
                      @click="clickDepSelect($event.target.value, obj.citykor)"
                    >
                      {{ obj.citykor }}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="air_destination">
                <h4 class="tit03">{{ $t('air_traffic_info.item3') }}</h4>
                <input
                  id="ArrAir"
                  type="text"
                  :placeholder="$t('placeHolder.type6')"
                  @input="inputArr($event.target.value)"
                  @keypress.enter="enterArrData($event.target.value)"
                />
                <ul class="jg_air_search_comp" v-if="searchArr">
                  <li v-for="(obj, index) in this.$store.state.airsearcharr.data" :key="index">
                    <button
                      :value="obj.citycode"
                      @click="clickArrSelect($event.target.value, obj.citykor)"
                    >
                      {{ obj.citykor }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn_air_search_container">
              <button class="btn_air_search" @click="search">
                {{ $t('air_traffic_info.item5') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap" v-if="searchPlay">
      <div class="con_body air_traffic_table">
        <div class="sec01" v-if="this.$store.state.airinfo.data">
          <h4 class="tit03">
            {{ $t('board.count0') }} <span>{{ this.$store.state.airinfo.data.totalCount }}</span
            >{{ $t('board.count1') }}
          </h4>
          <ul class="air_traffic_info_tbl" v-if="this.$store.state.airinfo.data">
            <li v-for="(obj, index) in this.$store.state.airinfo.data.items.item" :key="index">
              <div class="flex">
                <h5 class="tit04">{{ obj.airlineKorean }}</h5>
              </div>
              <p class="txt03">
                {{ $t('air_traffic_info.item9') }}: <span>{{ obj.internationalTime }}</span>
              </p>
              <p class="txt03">
                {{ $t('air_traffic_info.item11') }}:
                <span>{{
                  obj.internationalStdate.substr(0, 4) +
                    '-' +
                    obj.internationalStdate.substr(5, 2) +
                    '-' +
                    obj.internationalStdate.substr(8, 2)
                }}</span>
                ~
                <span>{{
                  obj.internationalEddate.substr(0, 4) +
                    '-' +
                    obj.internationalEddate.substr(5, 2) +
                    '-' +
                    obj.internationalEddate.substr(8, 2)
                }}</span>
              </p>
              <table class="tbl01 row">
                <thead>
                  <tr>
                    <th>{{ $t('air_traffic_info.item12') }}</th>
                    <th>{{ $t('air_traffic_info.item13') }}</th>
                    <th>{{ $t('air_traffic_info.item14') }}</th>
                    <th>{{ $t('air_traffic_info.item15') }}</th>
                    <th>{{ $t('air_traffic_info.item16') }}</th>
                    <th>{{ $t('air_traffic_info.item17') }}</th>
                    <th>{{ $t('air_traffic_info.item18') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="txt_center col_jingu" v-if="obj.internationalMon == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalTue == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalWed == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalThu == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalFri == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalSat == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                    <td class="txt_center col_jingu" v-if="obj.internationalSun == 'Y'">
                      &#9675;
                    </td>
                    <td class="txt_center col_jingu" v-else></td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div
          class="search_none"
          style="background-color: #fafafb; font-weight: 600"
          v-if="this.$store.state.airinfo.data.items.length < 1"
        >
          {{ $t('air_traffic_info.item6') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  components: { DatePicker },
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;
    return {
      isLoading: false,
      searchPlay: false,
      totalCount: '',
      time1: dateStr,
      searchDep: false,
      searchArr: false,
      categoryid: 1,
      // return된 data
      resultData: [],
    };
  },
  methods: {
    changeCat(e) {
      this.searchPlay = false;
      this.categoryid = e;
      this.$store.state.DepAirportId = '';
      this.$store.state.ArrAirportId = '';
    },
    clickDepSelect(value, text) {
      this.searchDep = false;
      this.$store.state.startcitycode = value;
      document.querySelector('#depAir').value = text;
      this.$store.state.DepAirportId = value;
    },
    enterDepData() {
      this.searchDep = false;
      let data = document.querySelector('.air_starting .jg_air_search_comp li').firstChild.value;
      let text = document.querySelector('.air_starting .jg_air_search_comp li').firstChild
        .textContent;
      document.querySelector('#depAir').value = text;
      this.$store.state.DepAirportId = data;
    },
    inputDep(text) {
      this.searchDep = true;
      this.$store.dispatch('TRAFFIC_AIRSEARCH', {
        airsearch: text,
      });
      if (text == '') {
        this.searchDep = false;
      }
      setTimeout(() => {
        document.querySelector('.jg_air_search_comp li').classList.add('searchHover');
      }, 400);
    },
    clickArrSelect(value, text) {
      this.searchArr = false;
      this.$store.state.startcitycode = value;
      document.querySelector('#ArrAir').value = text;
      this.$store.state.ArrAirportId = value;
    },
    enterArrData() {
      this.searchArr = false;
      let data = document.querySelector('.air_destination .jg_air_search_comp li').firstChild.value;
      let text = document.querySelector('.air_destination .jg_air_search_comp li').firstChild
        .textContent;
      document.querySelector('#ArrAir').value = text;
      this.$store.state.ArrAirportId = data;
    },
    inputArr(text) {
      this.searchArr = true;
      this.$store.dispatch('TRAFFIC_AIRSEARCHARR', {
        airsearch: text,
      });
      if (text == '') {
        this.searchArr = false;
      }
      setTimeout(() => {
        document.querySelector('.jg_air_search_comp li').classList.add('searchHover');
      }, 400);
    },
    search() {
      this.searchDep = false;
      this.searchArr = false;
      this.isLoading = true;
      this.$store.state.airinfo = {};
      let depTime = this.time1;
      let regex = /[^0-9]/g;
      let result = depTime.replace(regex, '');
      if (this.$store.state.DepAirportId && this.$store.state.ArrAirportId) {
        this.searchPlay = true;
        if (this.categoryid === 1) {
          this.$store
            .dispatch('TRAFFIC_AIRINFO', {
              searchdate: result,
              startcitycode: this.$store.state.DepAirportId,
              arrvcitycode: this.$store.state.ArrAirportId,
            })
            .then(() => {
              this.resultData = this.$store.state.airinfo.data.items.item;
              this.totalCount = this.$store.state.airinfo.data.totalCount;
            });
          // setTimeout(() => {
          //   this.resultData = this.$store.state.airinfo.data.items.item;
          //   this.totalCount = this.$store.state.airinfo.data.totalCount;
          // }, 5000);
        }
        if (this.categoryid === 2) {
          this.$store
            .dispatch('TRAFFIC_AIRINFO', {
              searchdate: result,
              startcitycode: this.$store.state.DepAirportId,
              arrvcitycode: this.$store.state.ArrAirportId,
            })
            .then(() => {
              this.resultData = this.$store.state.airinfo.data.items.item;
              this.totalCount = this.$store.state.airinfo.data.totalCount;
            });
          // setTimeout(() => {
          //   this.resultData = this.$store.state.airinfo.data.items.item;
          //   this.totalCount = this.$store.state.airinfo.data.totalCount;
          // }, 5000);
        }
      } else {
        alert(this.$i18n.t('alert.input'));
        return alert;
      }
    },
  },
};
</script>

<style>
.mx-calendar {
  width: 630px;
}
.mx-calendar-content {
  height: 400px;
}
.mx-datepicker .mx-input-wrapper {
  width: 100% !important;
  border: none !important;
}
input[type='text'] {
  border: none;
  font-size: 24px;
}
.mx-datepicker {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  margin-top: 0;
  font-size: 24px;
  border: 1px solid #295caa;
  background-color: #fff;
}
.air_starting,
.air_destination {
  position: relative;
}
.jg_air_search_comp {
  background-color: #fff;
  position: absolute;
  top: 114px;
  right: 0;
  width: 100%;
  max-height: 400px;
  margin: 0;
  outline: 0;
  border: 1px solid #295caa;
  border-top: 0;
  font-size: 20px;
  z-index: 1;
  overflow: auto;
}
.jg_air_search_comp li {
  padding: 8px 40px;
}
.searchHover {
  background-color: rgba(200, 200, 200, 0.2);
}
.jg_air_search_comp li button {
  border: none;
  font-size: 1em;
  color: #d7d7d7;
  height: 31px;
}
.wrap {
  padding-bottom: 150px;
}
</style>
