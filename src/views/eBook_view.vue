<template>
  <div id="content" class="jg_notice_view">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">
          {{ item.title }}
        </h2>
        <p class="date txt03">{{ $t('board.date') }} | {{ item.regdate }}</p>
        <p class="txt03 description" v-html="item.content"></p>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <!-- 슬라이드 이미지 -->
        <div class="sec01">
          <table class="tbl01 row">
            <colgroup>
              <col style="width: 270px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">{{ $t('eBook_view.add') }}</th>
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
          <a class="btn s04 c03" @click="goList">{{ $t('eBook_view.list') }}</a>
        </div>
        <div class="sec02" style="margin-top: 100px;">
          <table class="tbl01 row">
            <colgroup>
              <col style="width: 270px;" />
              <col />
            </colgroup>
            <tbody>
              <tr v-if="this.itemtitleprev">
                <th scope="row">{{ $t('eBook_view.prev') }}</th>
                <td>
                  <a :href="`/eBook&id=${this.itemtitleprev.id}`">{{ this.itemtitleprev.title }}</a>
                </td>
              </tr>
              <tr v-if="this.itemtitlenext">
                <th scope="row">{{ $t('eBook_view.next') }}</th>
                <td>
                  <a :href="`/eBook&id=${this.itemtitlenext.id}`">{{ this.itemtitlenext.title }}</a>
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
import { eBookcount } from '@/api/index';
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
      this.$router.replace(`/eBook&id=${this.itemtitleprev.id}`);
    },
    goList() {
      this.$router.push('/eBook');
    },
  },
  created() {
    this.$store.dispatch('INFO_EBOOKINFO', { id: this.$route.params.id }).then(() => {
      this.item = this.$store.state.eBookinfo.data.eventinfo;
      this.itemtitleprev = this.$store.state.eBookinfo.data.previnfo;
      this.itemtitlenext = this.$store.state.eBookinfo.data.nextinfo;
      this.addFile.push(
        { img: this.item.img, name: this.item.imgname },
        { img: this.item.img2, name: this.item.imgname2 },
        { img: this.item.img3, name: this.item.imgname3 },
        { img: this.item.img4, name: this.item.imgname4 },
        { img: this.item.img5, name: this.item.imgname5 },
      );
    });
    eBookcount(this.$route.params.id, this.$store.state.nation.Code);
  },
};
</script>

<style></style>
