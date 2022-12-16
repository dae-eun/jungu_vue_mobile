<template>
  <div id="content" class="jg_faq">
    <div class="sub_header bg01">
      <div class="wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.nav5') }}</p>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.dropNav.nav5.n0') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav5.n0') }}</h2>
        <div class="sub_header_no_bg">
          <div class="search_box">
            <label for="inp_search"
              ><input
                type="text"
                id="inp_search"
                title="영업소 또는 업체명 입력"
                :placeholder="$t('placeHolder.type0')"
                v-model="searchtext"
                v-on:keyup.enter="search"
            /></label>
            <button type="button" class="btn_search" @click="search">검색</button>
          </div>
        </div>
      </div>

      <!-- sub contents -->
      <div class="con_body">
        <div class="classification">
          <ul class="new_tab" v-if="this.item">
            <li>
              <a :class="$store.state.Category == '' ? 'active' : ''" @click="changeCategory('')">{{
                $t('board.count0')
              }}</a>
            </li>
            <li v-for="(obj, index) in this.item" :key="index">
              <a
                :class="obj.id == $store.state.Category ? 'active' : ''"
                @click="changeCategory(obj.id)"
                >{{ obj.categoryname }}</a
              >
            </li>
          </ul>
        </div>
        <template v-if="$store.state.faqList.data.faqlist.length > 0">
          <table class="tbl02 col">
            <caption>
              관광정보 검색결과 목록
            </caption>
            <colgroup>
              <col style="width: 25%;" />
              <col />
              <col style="width: 15%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">{{ $t('faq_view.cat') }}</th>
                <th scope="col">{{ $t('faq_view.f') }}</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(obj, index) in this.$store.state.faqList.data.faqlist">
                <tr class="jg_faq_question" :key="index">
                  <td v-if="$store.state.nation.Code == 'ko'">
                    {{ obj.kindofInfo.kindofnameko }}
                  </td>
                  <td v-if="$store.state.nation.Code == 'chs'">
                    {{ obj.kindofInfo.kindofnamechs }}
                  </td>
                  <td v-if="$store.state.nation.Code == 'cht'">
                    {{ obj.kindofInfo.kindofnamecht }}
                  </td>
                  <td v-if="$store.state.nation.Code == 'en'">
                    {{ obj.kindofInfo.kindofnameen }}
                  </td>
                  <td v-if="$store.state.nation.Code == 'jp'">
                    {{ obj.kindofInfo.kindofnamejp }}
                  </td>
                  <td>{{ obj.title }}</td>
                  <td><button class="faq_toggle">보기/숨기기</button></td>
                </tr>
                <tr class="jg_faq_answer" :key="index">
                  <td colspan="3">
                    <h3>{{ $t('faq_view.q') }}</h3>
                    <p v-html="obj.reply"></p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </template>
        <template v-else>
          <p class="faq_none">{{ $t('faq_view.none') }}</p>
        </template>
        <div class="paging">
          <a
            href="#none"
            v-show="$store.state.faqList.data.pageinfo.currentpage > 10"
            class="btn_pg_first"
            @click="paging($store.state.faqList.data.pageinfo.firstpage)"
            >처음페이지</a
          >
          <a
            href="#none"
            v-show="$store.state.faqList.data.pageinfo.currentpage > 10"
            class="btn_pg_prev"
            @click="paging($store.state.faqList.data.pageinfo.prevpage)"
            >이전페이지</a
          >
          <a
            v-bind:class="obj == $store.state.Page ? 'active' : ''"
            v-for="(obj, index) in this.$store.state.faqList.data.pageinfo.disppage"
            :key="index"
            @click="paging(obj)"
          >
            {{ obj }}
          </a>
          <!--<strong title="현재페이지">1</strong> -->
          <a
            href="#none"
            v-show="
              parseInt($store.state.faqList.data.pageinfo.lastpage / 10) !=
                parseInt(($store.state.faqList.data.pageinfo.currentpage - 1) / 10)
            "
            class="btn_pg_next"
            @click="paging($store.state.faqList.data.pageinfo.nextpage)"
            >다음페이지</a
          >
          <a
            href="#none"
            v-show="
              parseInt($store.state.faqList.data.pageinfo.lastpage / 10) !=
                parseInt(($store.state.faqList.data.pageinfo.currentpage - 1) / 10)
            "
            class="btn_pg_last"
            @click="paging($store.state.faqList.data.pageinfo.lastpage)"
            >마지막페이지</a
          >
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { searchtext: '', item: [] };
  },
  methods: {
    search() {
      if (this.searchtext == '') {
        alert(this.$i18n.t('alert.search'));
      } else {
        this.$store.state.Searchtext = this.searchtext;
        this.$store.dispatch('BOARD_FAQLIST', {
          page: this.$store.state.Page,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.searchtext,
        });
      }
      console.log(this.$store.dispatch);
    },
    changeCategory(categoryid) {
      this.$store.state.Page = 1;
      this.$store.state.Category = categoryid;
      console.log(categoryid);
      this.$store
        .dispatch('BOARD_FAQLIST', {
          page: this.$store.state.Page,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.$store.state.Searchtext,
        })
        .then(() => {});
    },
    paging(page) {
      this.$store.state.Page = page;
      this.$store.dispatch('BOARD_FAQLIST', {
        page: this.$store.state.Page,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      });
    },
  },
  created() {
    this.$store.state.Page = 1;
    this.$store.state.Category = '';
    this.$store.state.Searchtext = '';
    this.$store
      .dispatch('BOARD_FAQLIST', {
        page: this.$store.state.Page,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      })
      .then(() => {
        this.item = this.$store.state.faqList.data.faqkindofreturnlist;
        this.item.reverse();
      });
  },
};
</script>

<style></style>
