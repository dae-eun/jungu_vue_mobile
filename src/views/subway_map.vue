<template>
  <div id="content" class="jg_subway">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('subway_map.map') }}</h2>
        <figure class="title_banner_img subway_map_bg">
          <img src="../assets/images/subway_bg.svg" alt="지하철배너이미지" />
        </figure>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <div class="sec01">
          <div class="title_container">
            <h4 class="tit03">{{ $t('subway_map.mapinfo') }}</h4>
            <a href="https://www.humetro.busan.kr/homepage/cyberstation/map.do"
              >{{ $t('btn.moreBtn') }}<img src="../assets/images/icon_more.png" alt="더보기아이콘"
            /></a>
          </div>
          <div class="subway_map">
            <a href="https://www.humetro.busan.kr/homepage/cyberstation/map.do">
              <img
                v-if="$store.state.nation.Code == 'ko'"
                src="../assets/images/mapko.png"
                alt="지하철노선도"
              />
              <img
                v-if="$store.state.nation.Code == 'en'"
                src="../assets/images/mapen.png"
                alt="지하철노선도"
              />
              <img
                v-if="$store.state.nation.Code == 'jp'"
                src="../assets/images/mapjp.png"
                alt="지하철노선도"
              />
              <img
                v-if="$store.state.nation.Code == 'chs'"
                src="../assets/images/mapch.png"
                alt="지하철노선도"
              />
              <img
                v-if="$store.state.nation.Code == 'cht'"
                src="../assets/images/mapch.png"
                alt="지하철노선도"
              />
            </a>
          </div>
        </div>
        <div class="sec02">
          <h4 class="tit03">{{ $t('subway_map.mapinfo') }}</h4>
          <ul class="line_guide">
            <li><span class="line01"></span>{{ $t('subway_map.line1') }}</li>
            <li><span class="line02"></span>{{ $t('subway_map.line2') }}</li>
            <li><span class="line03"></span>{{ $t('subway_map.line3') }}</li>
            <li><span class="line04"></span>{{ $t('subway_map.line4') }}</li>
            <li><span class="donghae_line"></span>{{ $t('subway_map.line5') }}</li>
            <li><span class="kyungjincheol"></span>{{ $t('subway_map.line6') }}</li>
            <li><span class="transfer_station"></span>{{ $t('subway_map.line7') }}</li>
          </ul>
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
