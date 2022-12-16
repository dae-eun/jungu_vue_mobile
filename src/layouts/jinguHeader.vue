<template>
  <div>
    <div id="skip_nav">
      <a href="#gnb">메뉴 바로가기</a>
      <a href="#content">본문 바로가기</a>
    </div>
    <header id="header">
      <div class="dim" @click="closeGnb()">&nbsp;</div>
      <div class="main_header">
        <h1><router-link to="/main">부산진구 의료관광서비스</router-link></h1>
        <div class="search_container">
          <input
            type="text"
            name=""
            id=""
            :placeholder="$t('placeHolder.type0')"
            v-model="searchtext"
            @keyup.enter="search"
          />
          <a class="btn_top_search_open" @click="search">검색</a>
        </div>
        <button class="btn_top_gnb_open" @click="openGnb()">메뉴 열기</button>
      </div>
      <div class="sub_header">
        <div class="lang-container">
          <router-link to="/eBook" class="e-book" @click="closeMenu"
            >{{ $t('nav.eBook') }}
            <img src="../assets/images/download_icon.png" alt="다운로드아이콘"
          /></router-link>
          <label class="lang-kor"
            ><input
              :key="$route.fullPath"
              value="ko"
              @click="changeLocale($event.target.value)"
              type="button"
            />KOR</label
          >
          <label class="lang-eng"
            ><input value="en" @click="changeLocale($event.target.value)" type="button" />ENG</label
          >
          <label class="lang-jpn"
            ><input value="jp" @click="changeLocale($event.target.value)" type="button" />JPN</label
          >
          <label class="lang-chi"
            ><input
              value="chs"
              @click="changeLocale($event.target.value)"
              type="button"
            />CHS</label
          >
          <label class="lang-chi"
            ><input
              value="cht"
              @click="changeLocale($event.target.value)"
              type="button"
            />CHT</label
          >
          <button class="btn_top_gnb_close" @click="closeGnb()">닫기</button>
        </div>
        <div class="nav_container">
          <nav id="gnb">
            <ul>
              <li class="present">
                <a>{{ $t('nav.nav0') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/medical_institution_information_list">{{
                      $t('nav.dropNav.nav0.n0')
                    }}</a>
                  </li>
                  <li>
                    <a href="/tourist_information_list">{{ $t('nav.dropNav.nav0.n1') }}</a>
                  </li>
                </ul>
              </li>
              <li class="information">
                <a>{{ $t('nav.nav1') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/refund_application_info">{{ $t('nav.dropNav.nav1.n0') }}</a>
                  </li>
                  <li>
                    <a href="/emergency_response">{{ $t('nav.dropNav.nav1.n1') }}</a>
                  </li>
                </ul>
              </li>
              <li class="guide">
                <a>{{ $t('nav.nav2') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/location_based">{{ $t('nav.dropNav.nav2.n0') }}</a>
                  </li>
                  <li>
                    <a href="/route_search">{{ $t('nav.dropNav.nav2.n1') }}</a>
                  </li>
                  <li>
                    <a href="/subway_map">{{ $t('nav.dropNav.nav2.n2') }}</a>
                  </li>
                </ul>
              </li>
              <li class="notify">
                <a>{{ $t('nav.nav3') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/ai_translation">{{ $t('nav.dropNav.nav3.n0') }}</a>
                  </li>
                  <!-- <li>
                    <a href="/ai_travel_recommendation">{{
                      $t('nav.dropNav.nav3.n1')
                    }}</a>
                  </li> -->
                </ul>
              </li>
              <li class="participation">
                <a>{{ $t('nav.nav4') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/air_traffic_info">{{ $t('nav.dropNav.nav4.n0') }}</a>
                  </li>
                  <li>
                    <a href="/train_service_info">{{ $t('nav.dropNav.nav4.n1') }}</a>
                  </li>
                </ul>
              </li>
              <li class="participation">
                <a>{{ $t('nav.nav5') }}</a>
                <ul class="depth">
                  <li>
                    <a href="/faq">{{ $t('nav.dropNav.nav5.n0') }}</a>
                  </li>
                </ul>
              </li>
              <li id="notice">
                <a href="/notice">{{ $t('nav.nav6') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { i18n } from '@/locales/i18n';
export default {
  data() {
    return {
      searchtext: '',
      nationcode: [{ ko: 'ko', jp: 'jp', en: 'en', chs: 'chs', cht: 'cht' }],
    };
  },
  methods: {
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
    changeLocale(value) {
      this.$store.state.nation.Code = value;
      this.mainLoad();
      this.$router.push(`/main?${value}`);
      i18n.locale = value;
      this.closeGnb();
    },
    reload() {
      return window.location.reload(true);
    },
    search() {
      if (this.searchtext == '') {
        alert(this.$i18n.t('alert.search'));
      } else {
        this.$store.state.Searchtext = this.searchtext;
        this.$store.dispatch('TOTAL_SEARCH', {
          searchtext: this.searchtext,
        });
        this.$router.push({
          path: '/search_result',
          query: { searchtext: this.searchtext },
        });
      }
    },
    // search(searchtext) {
    //   if (searchtext == '') {
    //     alert('검색어를 입력해 주세요.');
    //   } else {
    //     this.$store.state.Searchtext = searchtext;
    //     this.$store.dispatch('TOTAL_SEARCH', {
    //       searchtext: this.$store.state.Searchtext,
    //     });
    //     console.log(this.$route.query);
    //     this.$router.push({
    //       path: '/search_result',
    //       query: { searchtext: this.$store.state.Searchtext },
    //     });
    //   }
    // },
    openGnb() {
      const $gnbTarget = document.querySelectorAll('.sub_header, .dim');
      document.querySelector('body').classList.add('overflow-hidden');
      $gnbTarget.forEach(el => {
        el.classList.add('active');
      });
    },
    closeGnb() {
      const $gnbTarget = document.querySelectorAll('.sub_header, .dim');
      $gnbTarget.forEach(el => {
        el.classList.remove('active');
      });
      document.querySelector('body').classList.remove('overflow-hidden');
    },
  },
};
</script>

<style scoped>
#gnb > ul > li:last-child > a::after {
  transform: rotate(90deg);
}
.router-link-exact-active,
.router-link-active {
  color: #295caa !important;
}
.lang-container a {
  color: #fff !important;
}
</style>
