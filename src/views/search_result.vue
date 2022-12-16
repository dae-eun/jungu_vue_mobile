<template>
  <div id="content" class="jg_search_result">
    <div class="sub_header bg01">
      <div class="wrap">
        <div class="location">
          <a class="home">HOME</a> <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">검색결과</h2>
        <div class="sub_header_no_bg">
          <div class="search_box long_search_box">
            <label for="inp_search"
              ><input
                type="text"
                id="inp_search"
                title="영업소 또는 업체명 입력"
                :placeholder="$t('placeHolder.type0')"
                v-model="searchtext"
                v-on:keyup.enter="search"
            /></label>
            <button type="button" class="btn_search" @click="search">
              {{ $t('search_result.search') }}
            </button>
          </div>
          <div class="search_result bg_gray">
            <p class="txt03">
              <b v-text="`'${$store.state.Searchtext}'`"></b>{{ $t('search_result.searchText0')
              }}<b class="orange" v-text="`${$store.state.totalsearch.data.totalcount}`"></b
              >{{ $t('search_result.searchText1') }}
            </p>
          </div>
        </div>
      </div>

      <!-- sub contents -->
      <div class="con_body">
        <template v-if="this.$store.state.totalsearch.data.medicallist.medicalinfolist != ''">
          <div class="result_list bg_gray">
            <h3 class="txt03">{{ $t('search_result.mediInfo') }}</h3>
            <ul>
              <li
                v-for="(obj, index) in this.$store.state.totalsearch.data.medicallist
                  .medicalinfolist"
                :key="index"
              >
                <router-link
                  class="txt03 color_mid_blue"
                  @click="info(obj.id)"
                  v-bind:to="
                    `medical_institution_information_list/id=${obj.id}&lat=${obj.lat}&lng=${obj.lng}&medicalname=${obj.medicalname}`
                  "
                  >{{ obj.medicalname }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="btn_area">
            <a class="btn s04 c03" @click="moreBtn('/medical_institution_information_list')">{{
              $t('search_result.resultMore')
            }}</a>
          </div>
        </template>

        <!-- <template v-else>
          <div class="result_list bg_gray">
            <h3 class="txt03">의료기관 정보</h3>
            <div class="search_none color_cloudy_blue">
              검색결과가 없습니다.
            </div>
          </div>
        </template> -->

        <template v-if="this.$store.state.totalsearch.data.tourlist.tourinfolist != ''">
          <div class="result_list bg_gray">
            <h3 class="txt03">{{ $t('search_result.tourInfo') }}</h3>
            <ul>
              <li
                v-for="(obj, index) in this.$store.state.totalsearch.data.tourlist.tourinfolist"
                :key="index"
              >
                <router-link
                  class="txt03 color_mid_blue"
                  @click="info(obj.id)"
                  v-bind:to="
                    `tourist_information_list/id=${obj.id}&lat=${obj.lat}&lng=${obj.lng}&tourname=${obj.tourname}`
                  "
                >
                  {{ obj.tourname }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="btn_area">
            <a class="btn s04 c03" @click="moreBtn('/tourist_information_list')">{{
              $t('search_result.resultMore')
            }}</a>
          </div>
        </template>
        <!-- <template v-else>
          <div class="result_list bg_gray">
            <h3 class="txt03">관광지 정보</h3>
            <div class="search_none color_cloudy_blue">
              검색결과가 없습니다.
            </div>
          </div>
        </template> -->

        <template v-if="this.$store.state.totalsearch.data.noticelist.noticelist != ''">
          <div class="result_list bg_gray">
            <h3 class="txt03">{{ $t('search_result.notice') }}</h3>
            <ul>
              <li
                v-for="(obj, index) in this.$store.state.totalsearch.data.noticelist.noticelist"
                :key="index"
              >
                <router-link
                  class="txt03 color_mid_blue"
                  @click="info(obj.id)"
                  v-bind:to="`notice&id=${obj.id}`"
                  >{{ obj.title }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="btn_area">
            <a class="btn s04 c03" @click="moreBtn('/notice')">{{
              $t('search_result.resultMore')
            }}</a>
          </div>
        </template>
        <!-- <template v-else>
          <div class="result_list bg_gray">
            <h3 class="txt03">공지사항</h3>
            <div class="search_none color_cloudy_blue">
              검색결과가 없습니다.
            </div>
          </div>
        </template> -->
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { searchtext: this.$store.state.Searchtext };
  },
  methods: {
    moreBtn(route) {
      this.$router.push({
        path: route,
        query: { searchtext: this.$store.state.Searchtext },
      });
    },
    search() {
      if (this.searchtext == '') {
        alert(this.$i18n.t('alert.search'));
      } else {
        this.$store.state.Searchtext = this.searchtext;
        this.$store.dispatch('TOTAL_SEARCH', {
          code: this.$store.state.nation.Code,
          searchtext: this.searchtext,
        });
      }
    },
  },
  created() {
    this.$store
      .dispatch('TOTAL_SEARCH', {
        code: this.$store.state.nation.Code,
        searchtext: this.$store.state.Searchtext,
      })
      .then((this.$store.state.Searchtext = this.$route.query.searchtext));
  },
};
</script>
