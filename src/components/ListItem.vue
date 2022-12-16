<template>
  <div class="con_body">
    <div class="classification">
      <h2>분류</h2>
      <ul class="new_tab">
        <li>
          <a :class="$store.state.Category == '' ? 'active' : ''" @click="changeCategory('')"
            >전체</a
          >
        </li>
        <li v-for="(obj, index) in this.$store.state.tourlist.data.Categoryreturnlist" :key="index">
          <a
            :class="obj.id == $store.state.Category ? 'active' : ''"
            @click="changeCategory(obj.id)"
            >{{ obj.categoryname }}</a
          >
        </li>
      </ul>
    </div>
    <div class="total_infor">
      <p class="block txt03">
        전체
        <span class="color_mid_blue" v-text="$store.state.tourlist.data.pageinfo.totalcount"></span>
        건
      </p>
      <div class="total_list_view">
        <div class="jg_common_selectbox" title="검색조건 선택">
          <button class="jg_common_selected"><span>10개씩 보기</span></button>
          <ul class="jg_common_select_list">
            <li class="jg_common_select_item">
              <label>
                <input
                  type="radio"
                  name="select_1"
                  value="10개씩 보기"
                  checked
                  @change="changeSize(10)"
                />
                <span>10개씩 보기</span>
              </label>
            </li>
            <li class="jg_common_select_item">
              <label>
                <input type="radio" name="select_1" value="30개씩 보기" @change="changeSize(30)" />
                <span>30개씩 보기</span>
              </label>
            </li>
            <li class="jg_common_select_item">
              <label>
                <input type="radio" name="select_1" value="50개씩 보기" @change="changeSize(50)" />
                <span>50개씩 보기</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <table class="tbl02 col">
      <caption>
        관광정보 검색결과 목록
      </caption>
      <colgroup>
        <col style="width: 12%;" />
        <col style="width: 12%;" />
        <col style="width: 45%;" />
        <col style="width: 31%;" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">분류</th>
          <th scope="col">관광지명</th>
          <th scope="col">전화번호</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in this.$store.state.tourlist.data.tourinfolist" :key="index">
          <td v-text="$store.state.tourlist.data.pageinfo.maxnocount - index"></td>
          <td>{{ obj.categoryName }}</td>
          <td>
            <a href="../html/tourist_information_view.html" class="txt_wsp">{{ obj.tourname }}</a>
          </td>
          <td>
            <a :href="'tel:' + obj.phonenumber" class="txt_tel">{{ obj.phonenumber }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paging">
      <a class="btn_pg_first" @click="paging($store.state.tourlist.data.pageinfo.firstpage)"
        >처음페이지</a
      >
      <a class="btn_pg_prev" @click="paging($store.state.tourlist.data.pageinfo.prevpage)"
        >이전페이지</a
      >
      <a
        v-bind:class="obj == $store.state.tourPage ? 'active' : ''"
        v-for="(obj, index) in this.$store.state.tourlist.data.pageinfo.disppage"
        :key="index"
        @click="paging(obj)"
      >
        {{ obj }}
      </a>
      <!--<strong title="현재페이지">1</strong> -->
      <a class="btn_pg_next" @click="paging($store.state.tourlist.data.pageinfo.nextpage)"
        >다음페이지</a
      >
      <a class="btn_pg_last" @click="paging($store.state.tourlist.data.pageinfo.lastpage)"
        >마지막페이지</a
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeSize(size) {
      this.$store.state.Page = 1;
      this.$store.state.Size = size;
      this.$store.dispatch('BOARD_TOURLIST', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        categoryid: this.$store.state.Category,
      });
    },
    changeCategory(categoryid) {
      this.$store.state.Page = 1;
      this.$store.state.Category = categoryid;
      this.$store.dispatch('BOARD_TOURLIST', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        categoryid: this.$store.state.Category,
      });
    },
    paging(page) {
      this.$store.state.Page = page;
      this.$store.dispatch('BOARD_TOURLIST', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        categoryid: this.$store.state.Category,
      });
    },
  },
  created() {
    const name = this.$route.name;
    if (name === 'tour') {
      this.$store.dispatch('BOARD_TOURLIST', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        categoryid: this.$store.state.Category,
      });
      console.log(this.$route);
    } else if (name === 'notice') {
      this.$store.dispatch('BOARD_NOTICE', {
        page: this.$store.state.Page,
        size: this.$store.state.Size,
        categoryid: this.$store.state.Category,
      });
      console.log(this.$route);
    }
  },
  computed: {
    ListItems() {
      const name = this.$route.name;
      if (name === 'tour') {
        return this.$stroe.state.tour;
      } else if (name === 'notice') {
        return this.$stroe.state.notice;
      }
      return this;
    },
  },
};
</script>

<style></style>
