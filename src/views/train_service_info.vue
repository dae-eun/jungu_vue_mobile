<template>
  <div>
    <div id="content">
      <div class="sub_header bg01">
        <div class="main_wrap" style="padding: 0 30px">
          <div class="location">
            <router-link to="/main">HOME</router-link>
            <span>&gt;</span>
            <p title="현재페이지">{{ $t('nav.nav4') }}</p>
            <span>&gt;</span>
            <p title="현재페이지">{{ $t('nav.dropNav.nav4.n1') }}</p>
          </div>
          <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav4.n1') }}</h2>
        </div>
      </div>
      <figure style="text-align: center; margin-bottom: 40px">
        <img src="../assets/images/busan_train.svg" alt="" />
      </figure>
      <div class="wrap">
        <div class="con_body air_traffic_info">
          <div class="find_tab_menu">
            <div class="air_info_search_container train">
              <div class="reservation_container">
                <div class="scheduled_departure_date" style="margin-top: 0;">
                  <h4 class="tit03" style="padding: 0;">{{ $t('train_service_info.date') }}</h4>
                  <date-picker v-model="time1" valueType="format"></date-picker>
                </div>
              </div>
              <div class="how_starting_destination">
                <div class="air_starting">
                  <h4 class="tit03" style="padding: 0;">{{ $t('train_service_info.dep') }}</h4>
                  <div class="flex_select_box">
                    <div class="select_box">
                      <label for="slt_search" class="slt_search">
                        <div class="jg_common_selectbox" title="검색조건 선택">
                          <button class="jg_common_selected">
                            <span>도시</span>
                          </button>
                          <ul class="jg_common_select_list jg_train_select_list">
                            <li
                              v-for="(obj, index) in this.city"
                              :key="index"
                              class="jg_common_select_item"
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="select"
                                  :value="obj.id"
                                  checked
                                  @click="choiceDepState($event.target.value)"
                                />
                                <span>{{ obj.cityname }}</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </label>
                    </div>
                    <div class="select_box" @click="selectDepAlert('출발')">
                      <label for="slt_search" class="slt_search">
                        <div class="jg_common_selectbox" title="검색조건 선택">
                          <button class="jg_common_selected">
                            <span>역</span>
                          </button>
                          <ul class="jg_common_select_list" v-if="this.lenderDep">
                            <li
                              v-for="(obj, index) in this.$store.state.trainlistdep.data"
                              :key="index"
                              class="jg_common_select_item"
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="select"
                                  :value="`${obj.stationid}`"
                                  checked
                                  @click="depStationCode($event.target.value)"
                                />
                                <span>{{ obj.stationname }}</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="air_destination">
                  <h4 class="tit03" style="padding: 0;">도착지</h4>
                  <div class="flex_select_box">
                    <div class="select_box">
                      <label for="slt_search" class="slt_search">
                        <div class="jg_common_selectbox" title="검색조건 선택">
                          <button class="jg_common_selected">
                            <span>도시</span>
                          </button>
                          <ul class="jg_common_select_list">
                            <li
                              v-for="(obj, index) in this.city"
                              :key="index"
                              class="jg_common_select_item"
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="select"
                                  :value="obj.id"
                                  checked
                                  @click="choiceArrState($event.target.value)"
                                />
                                <span>{{ obj.cityname }}</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </label>
                    </div>
                    <div class="select_box" @click="selectArrAlert('도착')">
                      <label for="slt_search" class="slt_search">
                        <div class="jg_common_selectbox" title="검색조건 선택">
                          <button class="jg_common_selected">
                            <span>역</span>
                          </button>
                          <ul class="jg_common_select_list" v-if="this.lenderArr">
                            <li
                              v-for="(obj, index) in this.$store.state.trainlistarr.data"
                              :key="index"
                              class="jg_common_select_item"
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="select"
                                  :value="`${obj.stationid}`"
                                  checked
                                  @click="arrStationCode($event.target.value)"
                                />
                                <span>{{ obj.stationname }}</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn_air_search_container">
                <button class="btn_air_search" @click="searchTrain">
                  {{ $t('train_service_info.search') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap" v-if="this.searchRun">
      <div class="con_body air_traffic_table">
        <div class="sec01">
          <h4 class="tit03">
            {{ $t('board.count0') }} <span>{{ this.$store.state.traininfo.data.totalCount }}</span>
            {{ $t('board.count1') }}
          </h4>
          <ul class="air_traffic_info_tbl" v-if="this.$store.state.traininfo.data.items.item">
            <li v-for="(obj, index) in this.$store.state.traininfo.data.items.item" :key="index">
              <div class="flex">
                <h5 class="tit04">{{ obj.traingradename }}</h5>
                <p class="tit04">
                  <span>{{ obj.adultcharge }}</span> 원
                </p>
              </div>
              <p class="txt03">
                {{ $t('train_service_info.depT') }}: <span>{{ obj.depplandtime }}</span>
              </p>
              <p class="txt03">
                {{ $t('train_service_info.arrT') }}: <span>{{ obj.arrplandtime }}</span>
              </p>
            </li>
          </ul>
          <div class="search_none" style="background-color: #fafafb; font-weight: 600" v-else>
            {{ $t('board.noSearch') }}
          </div>
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
      searchRun: false,
      lenderDep: false,
      lenderArr: false,
      time1: dateStr,
      city: [
        {
          id: 10,
          citycode: '32',
          cityname: '강원도',
        },
        {
          id: 9,
          citycode: '31',
          cityname: '경기도',
        },
        {
          id: 16,
          citycode: '38',
          cityname: '경상남도',
        },
        {
          id: 15,
          citycode: '37',
          cityname: '경상북도',
        },
        {
          id: 6,
          citycode: '24',
          cityname: '광주광역시',
        },
        {
          id: 4,
          citycode: '22',
          cityname: '대구광역시',
        },
        {
          id: 7,
          citycode: '25',
          cityname: '대전광역시',
        },
        {
          id: 3,
          citycode: '21',
          cityname: '부산광역시',
        },
        {
          id: 1,
          citycode: '11',
          cityname: '서울특별시',
        },
        {
          id: 2,
          citycode: '12',
          cityname: '세종특별시',
        },
        {
          id: 8,
          citycode: '26',
          cityname: '울산광역시',
        },
        {
          id: 5,
          citycode: '23',
          cityname: '인천광역시',
        },
        {
          id: 14,
          citycode: '36',
          cityname: '전라남도',
        },
        {
          id: 13,
          citycode: '35',
          cityname: '전라북도',
        },
        {
          id: 12,
          citycode: '34',
          cityname: '충청남도',
        },
        {
          id: 11,
          citycode: '33',
          cityname: '충청북도',
        },
      ],
      deptime: [],
      arrtime: [],
      times: [],
    };
  },
  async getPageInfo() {
    this.times = await this.searchTrain();
  },
  methods: {
    async searchTrain() {
      this.searchRun = true;
      let depTime = this.time1;
      let regex = /[^0-9]/g;
      let result = depTime.replace(regex, '');
      if (this.$store.state.DepPlaceId || this.$store.state.ArrPlaceId) {
        let trainDayDate = await this.$store.dispatch('TRAFFIC_TRAININFO', {
          depPlaceId: this.$store.state.DepPlaceId,
          arrPlaceId: this.$store.state.ArrPlaceId,
          depPlandTime: result,
        });

        // this.$store.state.traininfo.response.body.items.item.forEach(array => {
        //   let deptime = String(array.depplandtime);
        //   let arrtime = String(array.arrplandtime);
        //   let splitDep = deptime.substr(8, 2) + ':' + deptime.substr(10, 2);
        //   let splitArr = arrtime.substr(8, 2) + ':' + arrtime.substr(10, 2);
        //   this.deptime.push(splitDep);
        //   this.arrtime.push(splitArr);
        //   // let arrtime = array.arrplandtime;
        // });
        // console.log(this.deptime);
        return trainDayDate;
      } else {
        alert('출발지나 도착지를 입력하지 않았습니다.');
        return alert;
      }
    },

    depPlandTimeSend(time) {
      this.$store.state.DepPlandTime = time;
    },
    depStationCode(code) {
      this.$store.state.DepPlaceId = code;
    },
    selectDepAlert(text) {
      if (this.lenderDep === false) {
        alert(text + ' 도시를 선택해주세요');
      }
    },
    selectArrAlert(text) {
      if (this.lenderArr === false) {
        alert(text + ' 도시를 선택해주세요');
      }
    },
    arrStationCode(code) {
      this.$store.state.ArrPlaceId = code;
    },
    choiceDepState(code) {
      this.lenderDep = true;
      this.$store.state.CityCode = code;
      this.$store.dispatch('TRAFFIC_TRAINLISTDEP', {
        cityCode: this.$store.state.CityCode,
      });
    },
    choiceArrState(code) {
      this.lenderArr = true;
      this.$store.state.CityCode = code;
      this.$store.dispatch('TRAFFIC_TRAINLISTARR', {
        cityCode: this.$store.state.CityCode,
      });
    },
  },
  mounted() {},
  created() {},
};
</script>

<style>
.mx-calendar {
  width: 630px;
}
.mx-calendar-content {
  height: 400px;
}
.mx-datepicker {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  font-size: 24px;
  border: 1px solid #295caa;
  background-color: rgba(0, 0, 0, 0);
}
.mx-datepicker .mx-input-wrapper {
  width: 100% !important;
  border: none !important;
}
input[type='text'] {
  border: none;
  font-size: 24px;
}
.wrap {
  padding-bottom: 150px;
}
.flex_select_box {
  display: flex;
  margin-top: 13px;
  justify-content: space-between;
}
.scheduled_departure_date .mx-input {
  background-color: rgba(0, 0, 0, 0) !important;
}
.jg_common_selectbox {
  width: 260px;
  height: 60px;
}
.jg_common_selected {
  height: 60px;
  border: 1px solid #2c539d;
}
</style>
