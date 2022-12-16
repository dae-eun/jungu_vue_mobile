<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <a href="#none" class="home">HOME</a> <span>&gt;</span> <a href="#none">depth</a>
          <span>&gt;</span>
          <p title="현재페이지">현재 페이지명</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav1.n1') }}</h2>
        <figure class="emergency_response"></figure>
      </div>
    </div>
    <div class="wrap">
      <div class="con_body" style="padding: 0;">
        <div class="sec01" style="margin-top: 80px;">
          <h4 class="tit03">{{ $t('emergency.content0.title') }}</h4>
          <div class="accident_emergency">
            <figure style="flex-shrink: 0;">
              <img src="../assets/images/ambulance.svg" alt="구급차이미지" />
            </figure>
            <div>
              <p v-html="newline0"></p>
              <p v-html="newline1"></p>
              <p style="margin-top: 36px; line-height: 42px;">
                <span>{{ $t('emergency.content0.textArea.text2-0') }}</span
                >{{ $t('emergency.content0.textArea.text2-1') }}
              </p>
              <p style="line-height: 42px;">
                <span>{{ $t('emergency.content0.textArea.text3-0') }}</span
                >{{ $t('emergency.content0.textArea.text3-1') }}
              </p>
              <a href="https://www.e-gen.or.kr/egen/search_emergency_room.do">{{
                $t('emergency.content0.btn')
              }}</a>
            </div>
          </div>
        </div>
        <div class="sec01">
          <h4 class="tit03">{{ $t('emergency.content1.title') }}</h4>
          <div class="pharmacy">
            <div style="flex-shrink: 0;">
              <figure><img src="../assets/images/medicine.svg" alt="약 글자이미지" /></figure>
            </div>
            <div>
              <p>
                {{ $t('emergency.content1.textArea.text0') }}<br />
                {{ $t('emergency.content1.textArea.text1') }}
              </p>
              <a
                v-if="this.$store.state.nation.Code == 'jp'"
                style="width: 300px;"
                href="https://www.pharm114.or.kr/main.asp"
                >{{ $t('emergency.content1.btn') }}</a
              >
              <a v-else href="https://www.pharm114.or.kr/main.asp">{{
                $t('emergency.content1.btn')
              }}</a>
            </div>
          </div>
        </div>

        <div class="sec01">
          <h4 class="tit03">{{ $t('emergency.content2.title') }}</h4>
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td0') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td0.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td0.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td0') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td0.line0') }}
                  {{ $t('emergency.content2.table.line3.td0.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td1') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>{{ $t('emergency.content2.table.line2.td1') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line1.td1.line0') }}<br />
                  {{ $t('emergency.content2.table.line1.td1.line1') }}<br />
                  {{ $t('emergency.content2.table.line1.td1.line2') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td1.line0') }}
                  {{ $t('emergency.content2.table.line3.td1.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td2.line0') }}<br />{{
                    $t('emergency.content2.table.line0.td2.line1')
                  }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>{{ $t('emergency.content2.table.line2.td2') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line1.td2.line0') }}<br />
                  {{ $t('emergency.content2.table.line1.td2.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td2.line0') }}
                  {{ $t('emergency.content2.table.line3.td2.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td3') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>{{ $t('emergency.content2.table.line2.td3') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td3') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td3.line0') }}
                  {{ $t('emergency.content2.table.line3.td3.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td4') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td4.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td4.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td4') }}</td>
              </tr>

              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td4.line0') }}
                  {{ $t('emergency.content2.table.line3.td4.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td5') }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>{{ $t('emergency.content2.table.line2.td5') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line1.td5.line0') }}<br />
                  {{ $t('emergency.content2.table.line1.td5.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td5.line0') }}
                  {{ $t('emergency.content2.table.line3.td5.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td6.line0') }}<br />{{
                    $t('emergency.content2.table.line0.td6.line1')
                  }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td6.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td6.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td6') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td6.line0') }}
                  {{ $t('emergency.content2.table.line3.td6.line1') }}<br />
                  {{ $t('emergency.content2.table.line3.td6.line2') }}
                  {{ $t('emergency.content2.table.line3.td6.line3') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td7.line0') }}<br />{{
                    $t('emergency.content2.table.line0.td7.line1')
                  }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td7.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td7.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td7') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td7.line0') }}
                  {{ $t('emergency.content2.table.line3.td7.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td8') }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td8.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td8.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line1.td8.line0') }}<br />
                  {{ $t('emergency.content2.table.line1.td8.line1') }}<br />
                  {{ $t('emergency.content2.table.line1.td8.line2') }}<br />
                  {{ $t('emergency.content2.table.line1.td8.line3') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td8.line0') }}
                  {{ $t('emergency.content2.table.line3.td8.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td9.line0') }}<br />
                  {{ $t('emergency.content2.table.line0.td9.line1') }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td9') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line1.td9.line0') }}<br />
                  {{ $t('emergency.content2.table.line1.td9.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td9.line0') }}
                  {{ $t('emergency.content2.table.line3.td9.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td10.line0') }}<br />
                  {{ $t('emergency.content2.table.line0.td10.line1') }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td10.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td10.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td10') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td10.line0') }}<br />
                  {{ $t('emergency.content2.table.line3.td10.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line0.td11') }}
                </td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td11.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td11.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td11') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td11.line0') }}<br />
                  {{ $t('emergency.content2.table.line3.td11.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td12') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td12.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td12.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td12') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td12.line0') }}<br />
                  {{ $t('emergency.content2.table.line3.td12.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec01">
          <table class="tbl01 row emergency_response_tbl">
            <caption>
              국제진료센터
            </caption>
            <colgroup>
              <col style="width: 129px;" />
              <col style="width: 200px;" />
              <col style="width: 124px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>{{ $t('emergency.content2.table.line0.title') }}</th>
                <td>{{ $t('emergency.content2.table.line0.td13') }}</td>
                <th>{{ $t('emergency.content2.table.line2.title') }}</th>
                <td>
                  {{ $t('emergency.content2.table.line2.td13.line0') }}<br />
                  {{ $t('emergency.content2.table.line2.td13.line1') }}
                </td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line1.title') }}</th>
                <td colspan="3">{{ $t('emergency.content2.table.line1.td13') }}</td>
              </tr>
              <tr>
                <th>{{ $t('emergency.content2.table.line3.title') }}</th>
                <td colspan="3">
                  {{ $t('emergency.content2.table.line3.td13.line0') }}<br />
                  {{ $t('emergency.content2.table.line3.td13.line1') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newline0() {
      return this.$translation('emergency.content0.textArea.text0');
    },
    newline1() {
      return this.$translation('emergency.content0.textArea.text1');
    },
  },
};
</script>

<style scoped>
#content .wrap {
  padding: 0 30px 129px;
}
</style>
