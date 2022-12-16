<template>
  <div id="content" class="jg_ai_tran">
    <div class="sub_header bg01">
      <div class="main_wrap">
        <div class="location">
          <a class="home">HOME</a> <span>&gt;</span> <a>{{ $t('nav.nav3') }}</a>
          <span>&gt;</span>
          <p title="현재페이지">{{ $t('nav.dropNav.nav3.n0') }}</p>
        </div>
        <h2 class="tit01 color_mid_blue">{{ $t('nav.dropNav.nav3.n0') }}</h2>
      </div>
    </div>
    <div class="wrap">
      <!-- sub contents -->
      <div class="con_body">
        <div class="sec01">
          <!--네이버 파파고-->
          <div class="jg_ai_tran_wrap">
            <!--네이버 파파고 : 원본-->
            <div class="jg_ai_tran_original">
              <div class="jg_ai_tran_head">
                <div class="jg_ai_tran_selectbox">
                  <button class="jg_ai_tran_selected detectLang">
                    <span>{{ $t('ai_Transition.scan') }}</span>
                  </button>
                  <ul class="jg_ai_tran_select_list">
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="언어감지" checked />
                        <span>{{ $t('ai_Transition.scan') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="ko" />
                        <span>{{ $t('ai_Transition.ko') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="en" />
                        <span>{{ $t('ai_Transition.en') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="ja" />
                        <span>{{ $t('ai_Transition.jp') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="zh-CN" />
                        <span>{{ $t('ai_Transition.chs') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item">
                      <label>
                        <input type="radio" name="tran_origin" value="zh-TW" />
                        <span>{{ $t('ai_Transition.trans') }}</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <button class="jg_ai_tran_swap" @click="exchange">
                  {{ $t('ai_Transition.change') }}
                </button>
              </div>
              <div class="jg_ai_tran_body">
                <textarea
                  name=""
                  id="inputText"
                  :placeholder="$t('placeHolder.type3')"
                  @input="detectlang1($event.target.value)"
                  v-model="detText"
                ></textarea>
                <button class="jg_ai_tran_reset">지우기</button>
              </div>
              <div class="jg_ai_tran_foot">
                <button class="jg_ai_tran_speak" @click="sayDetect">발음하기</button>
                <button
                  class="jg_ai_tran_copy"
                  @click="copyTextDetect"
                  v-clipboard:copy="this.detText"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  복사
                </button>
                <button class="jg_ai_tran_submit" @click="translate">
                  {{ $t('ai_Transition.trans') }}
                </button>
              </div>
            </div>
            <!--//네이버 파파고 : 원본-->

            <!--네이버 파파고 : 번역본-->
            <div class="jg_ai_tran_translated">
              <div class="jg_ai_tran_head">
                <div class="jg_ai_tran_selectbox">
                  <button class="jg_ai_tran_selected transLang">
                    <span>{{ $t('ai_Transition.ko') }}</span>
                  </button>
                  <ul class="jg_ai_tran_select_list">
                    <li class="jg_ai_tran_select_item transLangItem">
                      <label>
                        <input
                          type="radio"
                          name="tran_translated"
                          value="ko"
                          checked
                          @click="targetLang($event.target.value)"
                        />
                        <span>{{ $t('ai_Transition.ko') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item transLangItem">
                      <label>
                        <input
                          type="radio"
                          name="tran_translated"
                          value="en"
                          @click="targetLang($event.target.value)"
                        />
                        <span>{{ $t('ai_Transition.en') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item transLangItem">
                      <label>
                        <input
                          type="radio"
                          name="tran_translated"
                          value="ja"
                          @click="targetLang($event.target.value)"
                        />
                        <span>{{ $t('ai_Transition.jp') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item transLangItem">
                      <label>
                        <input
                          type="radio"
                          name="tran_translated"
                          value="zh-CN"
                          @click="targetLang($event.target.value)"
                        />
                        <span>{{ $t('ai_Transition.chs') }}</span>
                      </label>
                    </li>
                    <li class="jg_ai_tran_select_item transLangItem">
                      <label>
                        <input
                          type="radio"
                          name="tran_translated"
                          value="zh-TW"
                          @click="targetLang($event.target.value)"
                        />
                        <span>{{ $t('ai_Transition.cht') }}</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="jg_ai_tran_body">
                <textarea class="translated" name="" id="transText" v-model="transText"></textarea>
              </div>
              <div class="jg_ai_tran_foot">
                <button class="jg_ai_tran_speak" @click="sayTrans">발음하기</button>
                <button
                  class="jg_ai_tran_copy"
                  v-clipboard:copy="this.transText"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                >
                  복사
                </button>
              </div>
            </div>
            <!--//네이버 파파고 : 번역본-->
          </div>
          <!--//네이버 파파고-->
        </div>
      </div>
      <!-- //sub contents -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: new SpeechSynthesisUtterance(),
      voices: window.speechSynthesis.getVoices(),
      det: '',
      detText: '',
      trans: '',
      transText: '',
    };
  },
  methods: {
    onCopy: function(e) {
      alert('You just copied: ' + e.text);
    },
    onError: function() {
      alert('Failed to copy texts');
    },
    // 언어 바꾸기
    exchange() {
      let transText = this.transText;
      if (transText === '') {
        alert(this.$i18n.t('alert.trans'));
      } else {
        this.det = document.querySelector('.detectLang span').innerText;
        this.trans = document.querySelector('.transLang span').innerText;
        let det = this.detText;
        let trans = this.transText;
        document.querySelector('.detectLang span').innerText = this.trans;
        document.querySelector('.transLang span').innerText = this.det;
        this.detText = trans;
        this.transText = det;

        if (
          document.querySelector('.transLang span').innerText === this.$i18n.t('ai_Transition.ko')
        ) {
          this.$store.state.Target = 'ko';
        } else if (
          document.querySelector('.transLang span').innerText === this.$i18n.t('ai_Transition.jp')
        ) {
          this.$store.state.Target = 'ja';
        } else if (
          document.querySelector('.transLang span').innerText === this.$i18n.t('ai_Transition.en')
        ) {
          this.$store.state.Target = 'en';
        } else if (
          document.querySelector('.transLang span').innerText === this.$i18n.t('ai_Transition.chs')
        ) {
          this.$store.state.Target = 'zh-CN';
        } else if (
          document.querySelector('.transLang span').innerText === this.$i18n.t('ai_Transition.cht')
        ) {
          this.$store.state.Target = 'zh-TW';
        }
        if (
          document.querySelector('.detectLang span').innerText === this.$i18n.t('ai_Transition.ko')
        ) {
          this.$store.state.Source = 'ko';
        } else if (
          document.querySelector('.detectLang span').innerText === this.$i18n.t('ai_Transition.jp')
        ) {
          this.$store.state.Source = 'ja';
        } else if (
          document.querySelector('.detectLang span').innerText === this.$i18n.t('ai_Transition.en')
        ) {
          this.$store.state.Source = 'en';
        } else if (
          document.querySelector('.detectLang span').innerText === this.$i18n.t('ai_Transition.chs')
        ) {
          this.$store.state.Source = 'zh-CN';
        } else if (
          document.querySelector('.detectLang span').innerText === this.$i18n.t('ai_Transition.cht')
        ) {
          this.$store.state.Source = 'zh-TW';
        }
      }
    },
    copyTextDetect() {
      this.copy();
      window.navigator.clipboard.writeText(this.$store.state.Text);
    },
    copyTextTrans() {
      window.navigator.clipboard.writeText(
        this.$store.state.translate.data.message.result.translatedText,
      );
    },
    sayDetect() {
      this.msg.lang = '';
      this.msg.voice = this.voices[10];
      this.msg.voiceURI = 'native';
      this.msg.volume = 1;
      this.msg.rate = 1;
      this.msg.pitch = 0.8;
      this.msg.text = this.$store.state.Text;
      if (this.$store.state.Source === 'ko') {
        this.msg.lang = 'ko-KR';
      } else if (this.$store.state.Source === 'en') {
        this.msg.lang = 'en-US';
      } else if (this.$store.state.Source === 'ja') {
        this.msg.lang = 'ja-JP';
      } else if (this.$store.state.Source === 'zh-CN') {
        this.msg.lang = 'zh-CN';
      } else if (this.$store.state.Source === 'zh-TW') {
        this.msg.lang = 'zh-TW';
      }
      speechSynthesis.speak(this.msg);
      this.msg.lang = '';
    },
    sayTrans() {
      this.msg.lang = '';
      this.msg.voice = this.voices[10];
      this.msg.voiceURI = 'native';
      this.msg.volume = 1;
      this.msg.rate = 1;
      this.msg.pitch = 0.8;
      this.msg.text = this.transText;
      if (this.$store.state.Target === 'ko') {
        this.msg.lang = 'ko-KR';
      } else if (this.$store.state.Target === 'en') {
        this.msg.lang = 'en-US';
      } else if (this.$store.state.Target === 'ja') {
        this.msg.lang = 'ja-JP';
      } else if (this.$store.state.Target === 'zh-CN') {
        this.msg.lang = 'zh-CN';
      } else if (this.$store.state.Target === 'zh-TW') {
        this.msg.lang = 'zh-TW';
      }
      speechSynthesis.speak(this.msg);
      this.msg.lang = '';
    },
    // 자동 언어 감지
    targetLang(targetLang) {
      this.$store.state.Target = targetLang;
    },
    detectlang1(text) {
      document.querySelector('.jg_ai_tran_selected span').innerText = '언어감지 중 입니다.';
      if (text.length !== 0) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.$store.state.Text = text;
          this.$store.dispatch('PAPAGO_DETECTLANG', {
            text: this.$store.state.Text,
          });

          setTimeout(() => {
            this.detectlang2();
            this.$store.state.Source = this.$store.state.detectlang.data.langCode;
            this.$store.state.Text = text;
          }, 300);
        }, 300);
      } else {
        this.debounce = setTimeout(() => {
          document.querySelector('.jg_ai_tran_selected span').innerText = '언어감지';
        }, 200);
      }
    },
    detectlang2() {
      let detectCode = this.$store.state.detectlang.data.langCode;
      if (detectCode == 'ko') {
        document.querySelector('.jg_ai_tran_selected span').innerText = this.$i18n.t(
          'ai_Transition.ko',
        );
      } else if (detectCode == 'en') {
        document.querySelector('.jg_ai_tran_selected span').innerText = this.$i18n.t(
          'ai_Transition.en',
        );
      } else if (detectCode == 'ja') {
        document.querySelector('.jg_ai_tran_selected span').innerText = this.$i18n.t(
          'ai_Transition.jp',
        );
      } else if (detectCode == 'zh-CN') {
        document.querySelector('.jg_ai_tran_selected span').innerText = this.$i18n.t(
          'ai_Transition.chs',
        );
      } else if (detectCode == 'zh-TW') {
        document.querySelector('.jg_ai_tran_selected span').innerText = this.$i18n.t(
          'ai_Transition.cht',
        );
      } else {
        document.querySelector('.jg_ai_tran_selected span').innerText = '등록된 언어가 없습니다.';
      }
    },
    translate() {
      if (this.$store.state.Source === this.$store.state.Target) {
        alert(this.$i18n.t('alert.change'));
        return false;
      }
      this.$store.state.Text;
      this.$store.state.Source;
      this.$store.state.Target;
      this.$store.dispatch('PAPAGO_TRANSLATE', {
        text: this.$store.state.Text,
        source: this.$store.state.Source,
        target: this.$store.state.Target,
      });

      setTimeout(() => {
        this.transText = this.$store.state.translate.data.message.result.translatedText;
      }, 300);
    },
  },
  updated() {},
  created() {
    this.$store.state.Target = 'ko';
    this.$store.state.translate.data.message.result.translatedText = '';
    this.$store.state.detectlang.data.langCode = '';
  },
  mounted: {},
};
</script>

<style></style>
