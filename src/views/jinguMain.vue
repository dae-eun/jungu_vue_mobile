<template>
  <div>
    <div id="content">
      <div class="visual">
        <p class="txt_visual">{{ $t('main.visual.text0') }}<br />{{ $t('main.visual.text1') }}</p>
        <div action="#none" class="search_form">
          <fieldset>
            <legend>검색</legend>
            <div class="hasg_tag_list">
              <dfn class="hidden">인기검색어</dfn>
              <ul>
                <li>
                  <router-link :to="`/search_result?searchtext=${$t('junguMain.item0')}`"
                    >#{{ $t('junguMain.item0') }}</router-link
                  >
                </li>
                <li>
                  <router-link :to="`/search_result?searchtext=${$t('junguMain.item1')}`"
                    >#{{ $t('junguMain.item1') }}</router-link
                  >
                </li>
                <li>
                  <router-link :to="`/search_result?searchtext=${$t('junguMain.item2')}`"
                    >#{{ $t('junguMain.item2') }}</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="search_box long_search_box" style="bottom: auto;">
              <label for="inp_search"
                ><input
                  type="text"
                  id="inp_search"
                  title="검색어 입력"
                  :placeholder="$t('placeHolder.type0')"
                  v-model="searchtext"
                  @keyup.enter="search"
              /></label>
              <button type="submit" class="btn_search" @click="search">검색</button>
            </div>
          </fieldset>
        </div>
        <div class="button-container">
          <button type="button" class="btn_download" @click="ebook">
            {{ $t('main.visual.download') }}
            <img src="../assets/images/download_icon.png" alt="다운로드아이콘" />
          </button>
        </div>
      </div>
      <div class="wrap">
        <div class="atc_main">
          <figure class="icon_container">
            <img src="../assets/images/course_icon.png" alt="이미지" />
          </figure>
          <h3 class="tit02 color_pink" v-html="newline0"></h3>
          <p class="txt01 color_dark_grey" v-html="newline1"></p>
          <div class="more_btn_container">
            <!-- <router-link to="/ai_travel_recommendation" class="more_btn color_mid_blue"
              >{{ $t('btn.moreBtn') }}<img src="../assets/images/icon_more.png" alt="더보기아이콘"
            /></router-link> -->
          </div>
          <ul class="safety_information_network">
            <li class="li01">
              <figure>
                <img src="../assets/images/main_course01.png" alt="비건푸드이미지" />
              </figure>
              <span class="color_dark_blue_grey">{{ $t('main.article.tema0.content0') }}</span>
            </li>
            <li class="li02">
              <figure>
                <img src="../assets/images/main_course02.png" alt="임산부이미지" />
              </figure>
              <span class="color_dark_blue_grey">{{ $t('main.article.tema0.content1') }}</span>
            </li>
            <li class="li03">
              <figure>
                <img src="../assets/images/main_course03.png" alt="구급차이미지" />
              </figure>
              <span class="color_dark_blue_grey">{{ $t('main.article.tema0.content2') }}</span>
            </li>
            <li class="li04">
              <figure>
                <img src="../assets/images/main_course04.png" alt="비행기이미지" />
              </figure>
              <span class="color_dark_blue_grey">{{ $t('main.article.tema0.content3') }}</span>
            </li>
          </ul>
        </div>
        <div class="atc_main">
          <form class="map_amusement_facility">
            <fieldset>
              <div class="slide_container">
                <swiper
                  class="Swiper swiper-wrapper"
                  ref="mySwiper"
                  :options="swiperOptions"
                  @slideChange="slideChangeTransitionStart"
                >
                  <template v-if="this.$store.state.banner.data">
                    <swiper-slide
                      class="swiper-slide"
                      v-for="(obj, index) in this.$store.state.banner.data"
                      :key="index"
                    >
                      <a :href="obj.link"><img :src="env + obj.img" :alt="obj.name"/></a
                    ></swiper-slide>
                  </template>
                  <!-- pagination -->
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
              <div class="maf_infor">
                <h4 class="tit color color_dark_grey">
                  {{ $t('main.article.tem1.title') }}
                </h4>
                <dl class="company_status_list" v-if="this.$store.state.mainstatics.data">
                  <dt class="hidden color_dark_grey">서비스 현황</dt>
                  <dd class="color_dark_grey">
                    <dfn>{{ $t('main.article.tem1.subtitle0') }}</dfn
                    >{{ this.$store.state.mainstatics.data.medicalCount }}
                  </dd>
                  <dd class="color_dark_grey">
                    <dfn>{{ $t('main.article.tem1.subtitle1') }}</dfn
                    >{{ this.$store.state.mainstatics.data.foodCount }}
                  </dd>
                  <dd class="color_dark_grey">
                    <dfn>{{ $t('main.article.tem1.subtitle2') }}</dfn
                    >{{ this.$store.state.mainstatics.data.tourCount }}
                  </dd>
                </dl>
                <!-- 2020-01-22 수정 -->
                <div class="company_board_list">
                  <ul v-if="this.$store.state.mainstatics.data">
                    <li v-if="this.$store.state.mainstatics.data.medicalInfo">
                      <router-link
                        v-bind:to="
                          `medical_institution_information_list/id=${this.$store.state.mainstatics.data.medicalInfo.id}&lat=${this.$store.state.mainstatics.data.medicalInfo.lat}&lng=${mainstatics.data.medicalInfo.lng}&medicalname=${mainstatics.data.medicalInfo.medicalname}`
                        "
                        class="color_dark_grey"
                        ><strong>{{
                          this.$store.state.mainstatics.data.medicalInfo.categoryName
                        }}</strong>
                        {{
                          this.$store.state.mainstatics.data.medicalInfo.medicalname
                        }}</router-link
                      >
                    </li>
                    <li v-if="this.$store.state.mainstatics.data.tourInfo">
                      <router-link
                        v-bind:to="
                          `tourist_information_list/id=${this.$store.state.mainstatics.data.tourInfo.id}&lat=${this.$store.state.mainstatics.data.tourInfo.lat}&lng=${this.$store.state.mainstatics.data.tourInfo.lng}&tourname=${this.$store.state.mainstatics.data.tourInfo.tourname}`
                        "
                        class="color_dark_grey"
                        ><strong>{{
                          this.$store.state.mainstatics.data.tourInfo.categoryName
                        }}</strong
                        >{{ this.$store.state.mainstatics.data.tourInfo.tourname }}</router-link
                      >
                    </li>
                    <li v-if="this.$store.state.mainstatics.data.foodInfo">
                      <router-link
                        v-bind:to="
                          `tourist_information_list/id=${this.$store.state.mainstatics.data.foodInfo.id}&lat=${this.$store.state.mainstatics.data.foodInfo.lat}&lng=${this.$store.state.mainstatics.data.foodInfo.lng}&tourname=${this.$store.state.mainstatics.data.foodInfo.tourname}`
                        "
                        class="color_dark_grey"
                        ><strong>{{
                          this.$store.state.mainstatics.data.foodInfo.categoryName
                        }}</strong
                        >{{ this.$store.state.mainstatics.data.foodInfo.tourname }}</router-link
                      >
                    </li>
                  </ul>
                  <!-- 데이터 없는경우 -->
                  <p class="no_data" v-else>데이터가 없습니디.</p>
                  <!-- //데이터 없는경우 -->
                </div>
                <div class="btn_area">
                  <router-link to="/tourist_information_list" class="btn s04 c03">{{
                    $t('btn.moreBtn')
                  }}</router-link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="atc_main">
          <h3 class="tit02">{{ $t('main.article.tem3.title') }}</h3>
          <p class="txt01">
            {{ $t('main.article.tem3.infoText') }}
          </p>
          <ul class="agency_family_list">
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer_header">
      <div class="wrap">
        <a href="#content" class="btn_top">상단으로 바로가기</a>
        <div class="left_area">
          <div class="content_wrap">
            <figure class="left_content"></figure>
            <div class="center_content">
              <p class="content_tel">051-1234-5678</p>
              <p class="content_time">AM 09:00 ~ PM 06:00</p>
              <p class="content_day_off">{{ $t('footerHeader.dayOff') }}</p>
              <p class="content_lunch">{{ $t('footerHeader.lunch') }}</p>
            </div>
          </div>
          <ul class="right_content" v-if="this.$store.state.nation.Code == 'en'">
            <li>
              <a
                target="_blank"
                href="https://www.k-medi.or.kr//lay1/S1T130C154/contents.do"
                style="font-size: 20px;'"
                >{{ $t('footerHeader.btn0') }}</a
              >
            </li>
            <li>
              <a target="_blank" href="https://www.k-medi.or.kr/Index.do" style="font-size: 17px;'">
                {{ $t('footerHeader.btn1-0') }}<br /><span
                  style="font-size:30px;transform:translateY(-2px)"
                  >·</span
                >{{ $t('footerHeader.btn1-1') }}
              </a>
            </li>
          </ul>
          <ul class="right_content" v-else>
            <li>
              <a target="_blank" href="https://www.k-medi.or.kr//lay1/S1T130C154/contents.do">{{
                $t('footerHeader.btn0')
              }}</a>
            </li>
            <li>
              <a target="_blank" href="https://www.k-medi.or.kr/Index.do">
                {{ $t('footerHeader.btn1-0')
                }}<span style="font-size:30px;transform:translateY(-2px)">·</span
                >{{ $t('footerHeader.btn1-1') }}
              </a>
            </li>
          </ul>
        </div>
        <ul class="right_area">
          <li>
            <a href="https://youtu.be/ENgvzfmqujs" target="_blank"
              ><span>{{ $t('footerHeader.content0') }}</span></a
            >
          </li>
          <li>
            <a
              ><span>{{ $t('footerHeader.content1') }}</span></a
            >
          </li>
          <li>
            <a href="https://www.visitbusan.net/kr/index.do" target="_blank"
              ><span>{{ $t('footerHeader.content2') }}</span></a
            >
          </li>
          <li>
            <a
              ><span>{{ $t('footerHeader.content3') }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'ListItem',
  data() {
    return {
      mainstatics: [],
      item: [],
      searchtext: '',
      env: process.env.VUE_APP_SERVER_URL,
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
  components: {
    Swiper,
    SwiperSlide,
  },
  //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    newline0() {
      return this.$translation('main.article.tema0.title');
    },
    newline1() {
      return this.$translation('main.article.tema0.subText');
    },
  },

  //el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
  mounted() {
    //console.log('Current Swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    // go EBook
    ebook() {
      this.$router.push('/ebook');
    },
    // swiper
    slideChangeTransitionStart() {
      // console.log(this.swiper.activeIndex); //현재 index값 얻기
    },

    // search
    search() {
      this.$store.state.Searchtext = this.searchtext;
      this.$store.dispatch('TOTAL_SEARCH', {
        searchtext: this.searchtext,
      });
      this.$router.push({
        path: '/search_result',
        query: { searchtext: this.searchtext },
      });
    },
    mainLoad() {
      this.$store.dispatch('MAIN_STATICS', { code: this.$store.state.nation.Code }).then(() => {
        this.mainstatics = this.$store.state.mainstatics;
      });
      this.$store.dispatch('BANNER', { code: this.$store.state.nation.Code });
      this.$store
        .dispatch('MAIN_NOTICE', {
          page: 1,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
        })
        .then(() => {
          this.item = this.$store.state.mainnotice.data.currentlist.noticelist;
        });
    },
  },
  created() {
    this.mainLoad();
  },
};
</script>

<style scoped>
#content .wrap {
  padding: 0 0 129px;
}
#content .atc_main {
  padding: 150px 30px 0;
}
.footer_header .footer_wrap {
  padding: 100px 0 !important;
}
</style>
