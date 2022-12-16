<template>
  <div id="content">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <router-link to="/main">HOME</router-link>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.nav1') }}</p>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.dropNav.nav1.n0') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav1.n0') }}</h2>
        <figure class="refund_application"></figure>
      </div>
    </div>
    <div class="wrap">
      <div class="con_body" style="padding: 0 30px; margin-top: 80px;">
        <div class="sec01">
          <h4 class="tit03" style="padding-bottom: 30px; border-bottom: 1px solid #e1e1e4;">
            {{ $t('refund.content0.title') }}
          </h4>
          <p class="tax_free_system">
            {{ $t('refund.content0.textArea.text0') }}<br />
            {{ $t('refund.content0.textArea.text1') }}<br />
            {{ $t('refund.content0.textArea.text2') }}<br />
            {{ $t('refund.content0.textArea.text3') }}<br />
            {{ $t('refund.content0.textArea.text4') }}<br />
            {{ $t('refund.content0.textArea.text5') }}<br />
            {{ $t('refund.content0.textArea.text6') }}
          </p>
          <a
            href="http://english.visitkorea.or.kr/enu/SHP/SH_ENG_2_2.jsp"
            target="_blank"
            style="margin: 60px auto 0;"
            class="tax_free_info"
            >{{ $t('refund.content0.btn') }}</a
          >
        </div>
        <div class="sec01">
          <h4 class="tit03" style="padding-bottom: 30px; border-bottom: 1px solid #e1e1e4;">
            {{ $t('refund.content1.title') }}
          </h4>
          <p class="tax_free_guide" style="font-size: 23px;">
            {{ $t('refund.content1.textArea.text0') }}<br />
            {{ $t('refund.content1.textArea.text1') }}<br />
            {{ $t('refund.content1.textArea.text2') }}
          </p>
        </div>
        <div class="sec01">
          <h4 class="tit03" style="padding-bottom: 30px;">
            {{ $t('refund.content1.table.line0.title') }}
          </h4>
          <div class="txt-container">
            <p>{{ $t('refund.content1.table.line0.textArea.line0') }}</p>
            <p style="margin-top: 30px;">
              {{ $t('refund.content1.table.line0.textArea.line1') }}<br />
              {{ $t('refund.content1.table.line0.textArea.line2') }}<br />
              {{ $t('refund.content1.table.line0.textArea.line3') }}
            </p>
          </div>
        </div>
        <div class="sec01">
          <h4 class="tit03" style="padding-bottom: 30px;">
            {{ $t('refund.content1.table.line1.title') }}
          </h4>
          <div class="txt-container">
            <h4 class="tit03" style="font-weight: 600;">
              {{ $t('refund.content1.table.line1.textArea.line0') }}
            </h4>
            <div style="padding-left: 20px;">
              <p>
                {{ $t('refund.content1.table.line1.textArea.line0') }}<br />
                {{ $t('refund.content1.table.line1.textArea.line1') }}<br />
              </p>
              <p style="margin-top: 30px;">
                {{ $t('refund.content1.table.line1.textArea.line2') }}
              </p>
              <p style="margin-top: 30px;">
                {{ $t('refund.content1.table.line1.textArea.line3') }}
              </p>
            </div>
          </div>
        </div>
        <div class="sec01">
          <h4 class="tit03" style="padding-bottom: 30px;">
            {{ $t('refund.content1.table.line2.title') }}
          </h4>
          <div class="txt-container">
            <h4 class="tit03" style="font-weight: 600;">
              {{ $t('refund.content1.table.line2.textArea.line0') }}
            </h4>
            <div class="second_setp">
              <h4 class="tit03" style="font-weight: 500;">
                {{ $t('refund.content1.table.line2.textArea.line1') }}
              </h4>
              <p style="font-size: 21px;">
                {{ $t('refund.content1.table.line2.textArea.line2') }}<br />
                {{ $t('refund.content1.table.line2.textArea.line3') }}<br />
                &nbsp; &nbsp; &nbsp;{{ $t('refund.content1.table.line2.textArea.line4') }}<br />
                &nbsp; &nbsp; &nbsp;{{ $t('refund.content1.table.line2.textArea.line5') }}<br />
                {{ $t('refund.content1.table.line2.textArea.line6') }}<br />
                {{ $t('refund.content1.table.line2.textArea.line7') }}<br />
                &nbsp; &nbsp; &nbsp;{{ $t('refund.content1.table.line2.textArea.line8') }}
              </p>
              <div class="sub_txt_container">
                <p>
                  {{ $t('refund.content1.table.line2.textArea.line9') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line10') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line11') }}
                </p>
                <p style="margin-top: 30px;">
                  {{ $t('refund.content1.table.line2.textArea.line12') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line13') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line14') }}
                  >{{ $t('refund.content1.table.line2.textArea.line15') }}
                </p>
                <p style="margin-top: 30px;">
                  {{ $t('refund.content1.table.line2.textArea.line16') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line17') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line18') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line19') }}
                </p>
              </div>
              <h4 class="tit03" style="font-weight: 500; margin-top: 40px;">
                {{ $t('refund.content1.table.line2.textArea.line20') }}
              </h4>
              <p style="font-size: 21px;">
                {{ $t('refund.content1.table.line2.textArea.line21') }}
                {{ $t('refund.content1.table.line2.textArea.line22') }}<br />
                {{ $t('refund.content1.table.line2.textArea.line23') }}
                {{ $t('refund.content1.table.line2.textArea.line24') }}<br />
                {{ $t('refund.content1.table.line2.textArea.line25') }}
              </p>
              <div class="sub_txt_container">
                <p>
                  {{ $t('refund.content1.table.line2.textArea.line26') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line27') }}<br />
                  {{ $t('refund.content1.table.line2.textArea.line28') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
