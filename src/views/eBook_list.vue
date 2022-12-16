<template>
  <div id="content" class="jg_notice">
    <div class="sub_header bg01">
      <div class="wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.eBook') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.eBook') }}</h2>
        <div class="sub_header_no_bg">
          <div class="search_box">
            <label for="inp_search"
              ><input
                type="text"
                id="inp_search"
                title="e-book자료실 검색"
                :placeholder="$t('placeHolder.type0')"
                v-model="searchtext"
                v-on:keyup.enter="search"
            /></label>
            <button type="button" class="btn_search" v-on:click="search">
              검색
            </button>
          </div>
        </div>
      </div>

      <!-- sub contents -->
      <div class="con_body">
        <div class="total_infor">
          <p class="block txt03">
            {{ $t('board.count0') }}
            <span
              class="color_mid_blue"
              v-text="$store.state.eBook.data.currentlist.pageinfo.totalcount"
            ></span>
            {{ $t('board.count1') }}
          </p>
          <div class="total_list_view">
            <div class="jg_common_selectbox" title="검색조건 선택">
              <button class="jg_common_selected">
                <span>{{ $t('board.viewNum10') }}</span>
              </button>
              <ul class="jg_common_select_list">
                <li class="jg_common_select_item">
                  <label>
                    <input
                      type="radio"
                      name="select_1"
                      :value="$t('board.viewNum10')"
                      checked
                      @change="changeSize(10)"
                    />
                    <span>{{ $t('board.viewNum10') }}</span>
                  </label>
                </li>
                <li class="jg_common_select_item">
                  <label>
                    <input
                      type="radio"
                      name="select_1"
                      :value="$t('board.viewNum30')"
                      @change="changeSize(30)"
                    />
                    <span>{{ $t('board.viewNum30') }}</span>
                  </label>
                </li>
                <li class="jg_common_select_item">
                  <label>
                    <input
                      type="radio"
                      name="select_1"
                      :value="$t('board.viewNum50')"
                      @change="changeSize(50)"
                    />
                    <span>{{ $t('board.viewNum50') }}</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <template v-if="$store.state.eBook.data.currentlist.pageinfo.totalcount != 0">
          <table class="tbl02 col">
            <caption>
              관광정보 검색결과 목록
            </caption>
            <colgroup>
              <col style="width: 10%;" />
              <col />
              <col style="width: 20%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">{{ $t('board.no') }}</th>
                <th scope="col">{{ $t('board.title') }}</th>
                <th scope="col">{{ $t('board.date') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(obj, index) in this.$store.state.eBook.data.currentlist.eventlist"
                :key="index"
              >
                <td>{{ itemNo - index }}</td>
                <td>
                  <router-link
                    style="display: flex; align-items: center;"
                    @click="info(obj.id)"
                    v-bind:to="`eBook&id=${obj.id}`"
                    >{{ obj.title }}<span class="fix-top-icon" v-if="obj.isfix == 'Y'"></span
                  ></router-link>
                </td>
                <td>{{ obj.regdate }}</td>
              </tr>
            </tbody>
          </table>
        </template>
        <template v-else-if="this.searchtext.length > 0">
          <div class="search_none color_cloudy_blue">
            {{ $t('board.noSearch') }}
          </div>
        </template>
        <template v-else>
          <div class="search_none color_cloudy_blue">
            {{ $t('board.notFind') }}
          </div>
        </template>

        <div class="paging">
          <a
            v-show="$store.state.eBook.data.currentlist.pageinfo.currentpage > 10"
            class="btn_pg_first"
            @click="paging($store.state.eBook.data.currentlist.pageinfo.firstpage)"
            >처음페이지</a
          >
          <a
            v-show="$store.state.eBook.data.currentlist.pageinfo.currentpage > 10"
            class="btn_pg_prev"
            @click="paging($store.state.eBook.data.currentlist.pageinfo.prevpage)"
            >이전페이지</a
          >
          <a
            v-bind:class="obj == $store.state.Page ? 'active' : ''"
            v-for="(obj, index) in this.$store.state.eBook.data.currentlist.pageinfo.disppage"
            :key="index"
            @click="paging(obj)"
          >
            {{ obj }}
          </a>
          <a
            v-show="
              parseInt($store.state.eBook.data.currentlist.pageinfo.lastpage / 10) !=
                parseInt(($store.state.eBook.data.currentlist.pageinfo.currentpage - 1) / 10)
            "
            class="btn_pg_next"
            @click="paging($store.state.eBook.data.currentlist.pageinfo.nextpage)"
            >다음페이지</a
          >
          <a
            v-show="
              parseInt($store.state.eBook.data.currentlist.pageinfo.lastpage / 10) !=
                parseInt(($store.state.eBook.data.currentlist.pageinfo.currentpage - 1) / 10)
            "
            class="btn_pg_last"
            @click="paging($store.state.eBook.data.currentlist.pageinfo.lastpage)"
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
    return { searchtext: '', itemNo: '', item: [] };
  },
  mounted: {},
  methods: {
    info(id) {
      this.$store.state.Id = id;
      console.log(this.$store.state.Id);
      this.$store.dispatch('INFO_EBOOKINFO', { id: this.$store.state.Id });
    },
    search() {
      if (this.searchtext == '') {
        alert(this.$i18n.t('alert.search'));
      } else {
        this.$store.state.Searchtext = this.searchtext;
        console.log(this.$store.state);
        this.$store.dispatch('BOARD_EBOOK', {
          page: this.$store.state.Page,
          size: this.$store.state.Size,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.searchtext,
        });
      }
    },
    changeSize(size) {
      this.$store.state.Page = 1;
      this.$store.state.Size = size;
      this.$store.dispatch('BOARD_EBOOK', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      });
    },
    paging(page) {
      this.$store.state.Page = page;
      this.$store.dispatch('BOARD_EBOOK', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      });
    },
  },
  created() {
    if (this.$route.query.searchtext) {
      console.log('true');
      this.$store.state.Searchtext = this.$route.query.searchtext;
    } else {
      console.log('false');
      this.$store.state.Searchtext = '';
    }
    this.$store.state.Page = 1;
    this.$store.state.Size = 10;
    this.$store.state.Category = '';
    this.$store
      .dispatch('BOARD_EBOOK', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      })
      .then(() => {
        this.itemNo = this.$store.state.itemNo;
        this.item = this.$store.state.eBook;
      });
  },
};
</script>

<style scoped></style>
