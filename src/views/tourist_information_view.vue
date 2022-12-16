<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <router-link to="/tourist_information_list">{{
            $t('tourist_information_view.info')
          }}</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('tourist_information_view.place') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue" v-if="this.$store.state.nation.Code == 'ko'">
          {{ this.$store.state.tourinfo.data.categoryInfo.categorynameko }}
        </h2>
        <h2 class="tit01 color_mid_blue" v-if="this.$store.state.nation.Code == 'en'">
          {{ this.$store.state.tourinfo.data.categoryInfo.categorynameen }}
        </h2>
        <h2 class="tit01 color_mid_blue" v-if="this.$store.state.nation.Code == 'jp'">
          {{ this.$store.state.tourinfo.data.categoryInfo.categorynamejp }}
        </h2>
        <h2 class="tit01 color_mid_blue" v-if="this.$store.state.nation.Code == 'chs'">
          {{ this.$store.state.tourinfo.data.categoryInfo.categorynamechs }}
        </h2>
        <h2 class="tit01 color_mid_blue" v-if="this.$store.state.nation.Code == 'cht'">
          {{ this.$store.state.tourinfo.data.categoryInfo.categorynamecht }}
        </h2>
        <div class="institution_slide_container">
          <div class="slide_container">
            <ul class="swiper-wrapper">
              <li
                class="swiper-slide"
                :style="{
                  background: `url(${this.$store.state.tourinfo.data.img})no-repeat center / cover`,
                }"
              ></li>
            </ul>
            <div class="circle_container">
              <span class="active"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <!-- 슬라이드 이미지 -->
        <div class="sec01">
          <h4 class="tit03">{{ $t('tourist_information_view.maininfo') }}</h4>
          <table class="tbl01 row">
            <caption>
              쇼핑정보
            </caption>
            <colgroup>
              <col style="width: 18%;" />
              <col />
              <col style="width: 18%;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">{{ $t('tourist_information_view.name') }}</th>
                <td>{{ this.$store.state.tourinfo.data.tourname }}</td>
                <th scope="row">{{ $t('tourist_information_view.type') }}</th>
                <td v-if="this.$store.state.nation.Code == 'ko'">
                  {{ this.$store.state.tourinfo.data.categoryInfo.categorynameko }}
                </td>
                <td v-if="this.$store.state.nation.Code == 'en'">
                  {{ this.$store.state.tourinfo.data.categoryInfo.categorynameen }}
                </td>
                <td v-if="this.$store.state.nation.Code == 'jp'">
                  {{ this.$store.state.tourinfo.data.categoryInfo.categorynamejp }}
                </td>
                <td v-if="this.$store.state.nation.Code == 'chs'">
                  {{ this.$store.state.tourinfo.data.categoryInfo.categorynamechs }}
                </td>
                <td v-if="this.$store.state.nation.Code == 'cht'">
                  {{ this.$store.state.tourinfo.data.categoryInfo.categorynamecht }}
                </td>
              </tr>
              <tr v-if="this.$store.state.tourinfo.data.addr1">
                <th scope="row">{{ $t('tourist_information_view.add') }}</th>
                <td colspan="3">{{ this.$store.state.tourinfo.data.addr1 }}</td>
              </tr>
              <tr v-if="this.$store.state.tourinfo.data.phonenumber">
                <th scope="row">{{ $t('tourist_information_view.num') }}</th>
                <td colspan="3">
                  {{ this.$store.state.tourinfo.data.phonenumber }}
                </td>
              </tr>
              <tr v-if="this.$store.state.tourinfo.data.medicalcontent">
                <th scope="row">{{ $t('tourist_information_view.description') }}</th>
                <td colspan="3">
                  {{ this.$store.state.tourinfo.data.medicalcontent }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <h4 class="tit03">{{ $t('tourist_information_view.etc') }}</h4>
          <table class="tbl01 row">
            <caption>
              {{
                $t('tourist_information_view.etc')
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
                <template v-if="this.$store.state.tourinfo.data.url">
                  <th scope="row">{{ $t('tourist_information_view.homepage') }}</th>
                  <td colspan="3">
                    <a
                      :href="`${this.$store.state.tourinfo.data.url}`"
                      class="page_email color_mid_blue"
                      >{{ this.$store.state.tourinfo.data.url }}</a
                    >
                  </td>
                </template>
                <template v-if="this.$store.state.tourinfo.data.email">
                  <th scope="row">{{ $t('tourist_information_view.email') }}</th>
                  <td colspan="3">
                    <a class="page_email color_mid_blue">{{
                      this.$store.state.tourinfo.data.email
                    }}</a>
                  </td>
                </template>
              </tr>
              <tr v-if="this.$store.state.tourinfo.data.optime">
                <th scope="row">{{ $t('tourist_information_view.time') }}</th>
                <td colspan="3">
                  {{ this.$store.state.tourinfo.data.optime }}
                </td>
              </tr>
              <tr v-if="this.$store.state.tourinfo.data.trafficinfo">
                <th scope="row">{{ $t('tourist_information_view.traffic') }}</th>
                <td colspan="3">
                  {{ this.$store.state.tourinfo.data.trafficinfo }}
                </td>
              </tr>
              <!-- <tr v-if="this.$store.state.tourinfo.data.etcinfo==''">
							<th scope="row">기타 안내사항</th>
							<td colspan="3">{{this.$store.state.tourinfo.data.etcinfo}}</td>
						</tr> -->
            </tbody>
          </table>
        </div>
        <ViewMap v-bind:coordinate="coordinate"></ViewMap>
        <div class="btn_area">
          <a onClick="history.back()" class="btn s04 c03">{{
            $t('tourist_information_view.list')
          }}</a>
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
import ViewMap from '@/components/map/ViewMap';
export default {
  data() {
    return {
      coordinate: {
        lat: this.$route.params.lat,
        lng: this.$route.params.lng,
        tourname: this.$route.params.tourname,
      },
    };
  },
  components: { ViewMap },
  computed: {},
  created() {
    this.$store.dispatch('INFO_TOURINFO', { id: this.$route.params.id });
  },
};
</script>

<style>
.sub_header {
  margin-bottom: 50px;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.institution_slide_container {
  width: 690px;
  margin: 0 auto;
  height: 450px;
}
.institution_slide_container .slide_container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.slide_container {
  width: 690px;
  margin: 0;
}
.swiper-slide div {
  height: 100%;
}
</style>
