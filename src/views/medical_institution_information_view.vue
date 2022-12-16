<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap" style="padding: 0 30px;">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('medical_institution_information_view.info') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('medical_institution_information_view.info') }}</h2>
        <div class="hospital_info_slide_container">
          <div class="slide_container">
            <swiper
              class="Swiper swiper-wrapper"
              ref="mySwiper"
              :options="swiperOptions"
              @slideChange="slideChangeTransitionStart"
            >
              <template v-if="this.$store.state.medicalinfo.data.img">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <template v-if="this.$store.state.medicalinfo.data.img2">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img2})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <template v-if="this.$store.state.medicalinfo.data.img3">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img3})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <template v-if="this.$store.state.medicalinfo.data.img4">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img4})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <template v-if="this.$store.state.medicalinfo.data.img5">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img5})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <template v-if="this.$store.state.medicalinfo.data.img6">
                <swiper-slide class="swiper-slide" :key="index">
                  <div
                    :style="{
                      background: `url(http://101.101.211.158:8082${this.$store.state.medicalinfo.data.img6})no-repeat center / cover`,
                    }"
                  ></div>
                </swiper-slide>
              </template>
              <!-- pagination -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body" style="margin-top: 60px; padding:0;">
        <!-- 슬라이드 이미지 -->
        <div class="sec01">
          <h4 class="tit03">{{ $t('medical_institution_information_view.mainInfo') }}</h4>
          <table class="tbl01 row">
            <caption>
              {{
                $t('medical_institution_information_view.mediInfo')
              }}
            </caption>
            <colgroup>
              <col style="width: 18%;" />
              <col />
              <col style="width: 18%;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" colspan="2" v-if="this.$store.state.medicalinfo.data.medicalname">
                  {{ $t('medical_institution_information_view.name') }}
                </th>
                <td colspan="3">{{ this.$store.state.medicalinfo.data.medicalname }}</td>
              </tr>
              <tr>
                <th scope="row" colspan="2">
                  {{ $t('medical_institution_information_view.class') }}
                </th>
                <td colspan="3">{{ this.$store.state.medicalinfo.data.categoryName }}</td>
              </tr>
              <tr v-if="this.$store.state.medicalinfo.data.kindofName">
                <th scope="row" colspan="2">
                  {{ $t('medical_institution_information_view.type') }}
                </th>
                <td colspan="3">
                  {{ this.$store.state.medicalinfo.data.kindofName }}
                </td>
              </tr>
              <tr
                v-if="
                  this.$store.state.medicalinfo.data.addr1 &&
                    this.$store.state.medicalinfo.data.addr2
                "
              >
                <th scope="row" colspan="2">
                  {{ $t('medical_institution_information_view.add') }}
                </th>
                <td colspan="3">
                  {{ this.$store.state.medicalinfo.data.addr1 }}
                  {{ this.$store.state.medicalinfo.data.addr2 }}
                </td>
              </tr>
              <tr v-if="this.$store.state.medicalinfo.data.phonenumber">
                <th scope="row" colspan="2">
                  {{ $t('medical_institution_information_view.tel') }}
                </th>
                <td colspan="3">
                  {{ this.$store.state.medicalinfo.data.phonenumber }}
                </td>
              </tr>
              <tr v-if="this.$store.state.medicalinfo.data.medicalcontent">
                <th scope="row" colspan="2">
                  {{ $t('medical_institution_information_view.description') }}
                </th>
                <td colspan="3" v-html="this.$store.state.medicalinfo.data.medicalcontent"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <h4 class="tit03">{{ $t('medical_institution_information_view.etc') }}</h4>
          <table class="tbl01 row">
            <caption>
              {{
                $t('medical_institution_information_view.etc')
              }}
            </caption>
            <colgroup>
              <col style="width: 18%;" />
              <col />
              <col style="width: 18%;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" colspan="2" v-if="this.$store.state.medicalinfo.data.url">
                  {{ $t('medical_institution_information_view.home') }}
                </th>
                <td colspan="3" v-if="this.$store.state.medicalinfo.data.url">
                  <a class="page_email color_mid_blue">
                    {{ this.$store.state.medicalinfo.data.url }}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="2" v-if="this.$store.state.medicalinfo.data.email">
                  {{ $t('medical_institution_information_view.email') }}
                </th>
                <td colspan="3" v-if="this.$store.state.medicalinfo.data.email">
                  <a class="page_email color_mid_blue">
                    {{ this.$store.state.medicalinfo.data.email }}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="2" v-if="this.$store.state.medicalinfo.data.optime">
                  {{ $t('medical_institution_information_view.time') }}
                </th>
                <td
                  colspan="3"
                  v-if="this.$store.state.medicalinfo.data.optime"
                  v-html="this.$store.state.medicalinfo.data.optime"
                ></td>
              </tr>
              <tr>
                <th scope="row" colspan="2" v-if="this.$store.state.medicalinfo.data.trafficinfo">
                  {{ $t('medical_institution_information_view.traffic') }}
                </th>
                <td
                  colspan="3"
                  v-if="this.$store.state.medicalinfo.data.trafficinfo"
                  v-html="this.$store.state.medicalinfo.data.trafficinfo"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ViewMap v-bind:coordinate="coordinate"></ViewMap>
        <div class="btn_area">
          <a onClick="history.back()" class="btn s04 c03">{{
            $t('medical_institution_information_view.list')
          }}</a>
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ViewMap from '@/components/map/ViewMap';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { medicalcount } from '@/api/index';
export default {
  data() {
    return {
      coordinate: {
        lat: this.$route.params.lat,
        lng: this.$route.params.lng,
        medicalname: this.$route.params.medicalname,
      },
      swiperOptions: {
        loop: false,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  components: { ViewMap, Swiper, SwiperSlide },
  computed: {},
  created() {
    this.$store.dispatch('INFO_MEDICALINFO', { id: this.$route.params.id });
    medicalcount(this.$route.params.id, this.$store.state.nation.Code);
  },
};
</script>

<style>
.slide_container {
  width: 690px;
  margin: 0;
}
.swiper-slide div {
  height: 100%;
}
</style>
