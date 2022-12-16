<template>
  <footer id="footer">
    <div class="wrap">
      <ul class="f_etc_list">
        <li>
          <a class="point_yellow">{{ $t('footer.h0') }}</a>
        </li>
        <li>
          <a>{{ $t('footer.h1') }}</a>
        </li>
        <br />
        <li>
          <a>{{ $t('footer.h2') }}</a>
        </li>
        <li>
          <a>{{ $t('footer.h3') }}</a>
        </li>
        <!-- <li><a >오시는길</a></li> -->
      </ul>
      <div class="f_etc">
        <figure class="jingu_logo">
          <img src="../assets/images/jingu_logo.png" alt="" />
        </figure>
        <div class="f_etc_etc">
          <address>
            <span>{{ $t('footer.add') }}</span
            ><span>{{ $t('footer.tell') }}</span
            ><span>{{ $t('footer.comNum') }}</span
            ><span>{{ $t('footer.bizNum') }}</span>
          </address>
          <p class="copyright">
            Copyright &copy; 2019 by KTO. All rights reserved.
          </p>
        </div>
      </div>
      <div class="slt_box up family">
        <a class="btn">{{ $t('footer.selectBx') }}</a>
        <ul>
          <li>
            <a href="https://www.busanjin.go.kr/index.busanjin" target="_blank">{{
              $t('footer.selectBx0')
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
