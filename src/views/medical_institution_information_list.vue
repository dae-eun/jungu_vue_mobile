<template>
  <div id="content" class="medical_institution_information_list">
    <div class="sub_header bg01">
      <div class="wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.nav0') }}</p>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.dropNav.nav0.n0') }}</p>
        </div>
        <h2 class="tit01">{{ $t('nav.dropNav.nav0.n0') }}</h2>
        <div class="sub_header_wrap_medical">
          <div class="search_box">
            <label for="inp_search"
              ><input
                type="text"
                id="inp_search"
                title="영업소 또는 업체명 입력"
                :placeholder="$t('placeHolder.type1')"
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
          <h2>{{ $t('board.type') }}</h2>
          <ul class="new_tab">
            <li>
              <a :class="$store.state.Category == '' ? 'active' : ''" @click="changeCategory('')">{{
                $t('board.count0')
              }}</a>
            </li>
            <li
              v-for="(obj, index) in this.$store.state.medicalList.data.currentmedicallist
                .medicalcategoryreturnlist"
              :key="index"
            >
              <a
                :class="obj.id == $store.state.Category ? 'active' : ''"
                @click="changeCategory(obj.id)"
                >{{ obj.categoryname }}</a
              >
            </li>
          </ul>
        </div>
        <template v-if="$store.state.medicalList.data.currentmedicallist.pageinfo.totalcount != 0">
          <div class="total_infor">
            <p class="block txt03">
              {{ $t('board.count0') }}
              <span
                class="color_mid_blue"
                v-text="$store.state.medicalList.data.currentmedicallist.pageinfo.totalcount"
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
          <table class="tbl02 col">
            <caption>
              부산진구 의료관광서비스업체정보 검색결과 목록
            </caption>
            <colgroup>
              <col style="width: 13%;" />
              <col style="width: 15%;" />
              <col style="width: 28%;" />
              <col style="width: 21%;" />
              <col style="width: 23%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">{{ $t('board.no') }}</th>
                <th scope="col">{{ $t('board.type') }}</th>
                <th scope="col">{{ $t('board.mediname') }}</th>
                <th scope="col">{{ $t('board.mainType') }}</th>
                <th scope="col">{{ $t('board.number') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(obj, index) in this.$store.state.medicalList.data.currentmedicallist
                  .medicalinfolist"
                :key="index"
              >
                <td
                  v-text="
                    $store.state.medicalList.data.currentmedicallist.pageinfo.maxnocount - index
                  "
                ></td>
                <td>{{ obj.categoryName }}</td>
                <td>
                  <router-link
                    @click="info(obj.id)"
                    v-bind:to="
                      `medical_institution_information_list/id=${obj.id}&lat=${obj.lat}&lng=${obj.lng}&medicalname=${obj.medicalname}`
                    "
                    >{{ obj.medicalname }}</router-link
                  >
                </td>
                <td v-if="$store.state.nation.Code == 'ko'">
                  {{ obj.categoryInfo.categorynameko }}
                </td>
                <td v-if="$store.state.nation.Code == 'chs'">
                  {{ obj.categoryInfo.categorynamechs }}
                </td>
                <td v-if="$store.state.nation.Code == 'cht'">
                  {{ obj.categoryInfo.categorynamecht }}
                </td>
                <td v-if="$store.state.nation.Code == 'en'">
                  {{ obj.categoryInfo.categorynameen }}
                </td>
                <td v-if="$store.state.nation.Code == 'jp'">
                  {{ obj.categoryInfo.categorynamejp }}
                </td>
                <td>
                  <a class="txt_tel" :href="`tel:${obj.phonenumber}`">{{ obj.phonenumber }}</a>
                </td>
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
            v-show="$store.state.medicalList.data.currentmedicallist.pageinfo.currentpage > 10"
            class="btn_pg_first"
            @click="paging($store.state.medicalList.data.currentmedicallist.pageinfo.firstpage)"
            >처음페이지</a
          >
          <a
            v-show="$store.state.medicalList.data.currentmedicallist.pageinfo.currentpage > 10"
            class="btn_pg_prev"
            @click="paging($store.state.medicalList.data.currentmedicallist.pageinfo.prevpage)"
            >이전페이지</a
          >
          <a
            v-bind:class="obj == $store.state.Page ? 'active' : ''"
            v-for="(obj, index) in this.$store.state.medicalList.data.currentmedicallist.pageinfo
              .disppage"
            :key="index"
            @click="paging(obj)"
          >
            {{ obj }}
          </a>
          <!--<strong title="현재페이지">1</strong> -->
          <a
            v-show="
              parseInt($store.state.medicalList.data.currentmedicallist.pageinfo.lastpage / 10) !=
                parseInt(
                  ($store.state.medicalList.data.currentmedicallist.pageinfo.currentpage - 1) / 10,
                )
            "
            class="btn_pg_next"
            @click="paging($store.state.medicalList.data.currentmedicallist.pageinfo.nextpage)"
            >다음페이지</a
          >
          <a
            v-show="
              parseInt($store.state.medicalList.data.currentmedicallist.pageinfo.lastpage / 10) !=
                parseInt(
                  ($store.state.medicalList.data.currentmedicallist.pageinfo.currentpage - 1) / 10,
                )
            "
            class="btn_pg_last"
            @click="paging($store.state.medicalList.data.currentmedicallist.pageinfo.lastpage)"
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
    return { searchtext: '' };
  },
  methods: {
    copyText(text) {
      window.navigator.clipboard.writeText(text);
      alert(this.$i18n.t('alert.copy'));
    },
    info(id) {
      this.$store.state.Id = id;
      this.$store.dispatch('INFO_MEDICALINFO', { id: this.$store.state.Id });
    },
    search() {
      if (this.searchtext == '') {
        alert(this.$i18n.t('alert.search'));
      } else {
        this.$store.state.Searchtext = this.searchtext;
        this.$store
          .dispatch('BOARD_MEDICALLIST', {
            page: this.$store.state.Page,
            size: this.$store.state.Size,
            code: this.$store.state.nation.Code,
            categoryid: this.$store.state.Category,
            searchtext: this.searchtext,
          })
          .then(() => {
            let item = this.$store.state.medicalList.data.currentmedicallist
              .medicalcategoryreturnlist;
            item.reverse();
          });
      }
    },
    changeSize(size) {
      this.$store.state.Page = 1;
      this.$store.state.Size = size;
      this.$store
        .dispatch('BOARD_MEDICALLIST', {
          page: this.$store.state.Page,
          size: this.$store.state.Size,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.$store.state.Searchtext,
        })
        .then(() => {
          let item = this.$store.state.medicalList.data.currentmedicallist
            .medicalcategoryreturnlist;
          item.reverse();
        });
    },
    changeCategory(categoryid) {
      this.$store.state.Page = 1;
      this.$store.state.Category = categoryid;
      this.$store
        .dispatch('BOARD_MEDICALLIST', {
          page: this.$store.state.Page,
          size: this.$store.state.Size,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.$store.state.Searchtext,
        })
        .then(() => {
          let item = this.$store.state.medicalList.data.currentmedicallist
            .medicalcategoryreturnlist;
          item.reverse();
        });
    },
    paging(page) {
      this.$store.state.Page = page;
      this.$store
        .dispatch('BOARD_MEDICALLIST', {
          page: this.$store.state.Page,
          size: this.$store.state.Size,
          code: this.$store.state.nation.Code,
          categoryid: this.$store.state.Category,
          searchtext: this.$store.state.Searchtext,
        })
        .then(() => {
          let item = this.$store.state.medicalList.data.currentmedicallist
            .medicalcategoryreturnlist;
          item.reverse();
        });
    },
  },
  created() {
    if (this.$route.query.searchtext) {
      this.$store.state.Searchtext = this.$route.query.searchtext;
    } else {
      this.$store.state.Searchtext = '';
    }
    this.$store.state.Page = 1;
    this.$store.state.Size = 10;
    this.$store.state.Category = '';
    this.$store
      .dispatch('BOARD_MEDICALLIST', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        code: this.$store.state.nation.Code,
        categoryid: this.$store.state.Category,
        searchtext: this.$store.state.Searchtext,
      })
      .then(() => {
        let item = this.$store.state.medicalList.data.currentmedicallist.medicalcategoryreturnlist;
        item.reverse();
      });
  },
};
</script>

<style>
.new_tab li {
  font-size: 19px;
}
</style>
