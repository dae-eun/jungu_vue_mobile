<template>
  <div id="content" class="jg_notice_view">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <router-link to="/notice">{{ $t('notice_view.title') }}</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('notice_view.title') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">
          {{ item.title }}
        </h2>
        <p class="date txt03">
          {{ $t('notice_view.date') }} | <span>{{ item.regdate }}</span>
        </p>
        <p class="txt03 description" v-html="item.content"></p>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <!-- 슬라이드 이미지 -->
        <div class="sec01">
          <table class="tbl01 row">
            <caption>
              쇼핑정보
            </caption>
            <colgroup>
              <col style="width: 18%;" />
              <col />
            </colgroup>
            <tbody v-if="this.addFile[0].img !== null">
              <tr>
                <th scope="row">{{ $t('notice_view.addFile') }}</th>
                <td>
                  <ul>
                    <template v-for="(obj, index) in this.addFile">
                      <li v-if="obj.img != null" :key="index">
                        <a :href="`${env}${obj.img}`" class="color_mid_blue" target="_blank">{{
                          obj.name
                        }}</a>
                      </li>
                    </template>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn_area">
          <a class="btn s04 c03" @click="goList">{{ $t('notice_view.list') }}</a>
        </div>
        <div class="sec02" style="margin-top: 100px;">
          <table class="tbl01 row">
            <colgroup>
              <col style="width: 270px;" />
              <col />
            </colgroup>
            <tbody>
              <tr v-if="this.itemtitleprev">
                <th scope="row">{{ $t('notice_view.prev') }}</th>
                <td>
                  <a :href="`/notice&id=${this.itemtitleprev.id}`">{{
                    this.itemtitleprev.title
                  }}</a>
                </td>
              </tr>
              <tr v-if="this.itemtitlenext">
                <th scope="row">{{ $t('notice_view.next') }}</th>
                <td>
                  <a :href="`/notice&id=${this.itemtitlenext.id}`">{{
                    this.itemtitlenext.title
                  }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
import { noticecount } from '@/api/index';
export default {
  data() {
    return {
      item: [],
      addFile: [],
      env: process.env.VUE_APP_SERVER_URL,
      itemtitleprev: '',
      itemtitlenext: '',
    };
  },
  props: {
    obj: Object,
  },
  methods: {
    goItem() {
      this.$router.replace(`/notice&id=${this.itemtitleprev.id}`);
    },
    goList() {
      this.$router.push('/notice');
    },
  },
  created() {
    this.$store.dispatch('INFO_NOTICEINFO', { id: this.$route.params.id }).then(() => {
      this.item = this.$store.state.noticeinfo.data.noticeinfo;
      this.itemtitleprev = this.$store.state.noticeinfo.data.previnfo;
      this.itemtitlenext = this.$store.state.noticeinfo.data.nextinfo;
      this.addFile.push(
        { img: this.item.img, name: this.item.imgname },
        { img: this.item.img2, name: this.item.imgname2 },
        { img: this.item.img3, name: this.item.imgname3 },
        { img: this.item.img4, name: this.item.imgname4 },
        { img: this.item.img5, name: this.item.imgname5 },
      );
    });
    noticecount(this.$route.params.id, this.$store.state.nation.Code);
  },
};
</script>

<style></style>
