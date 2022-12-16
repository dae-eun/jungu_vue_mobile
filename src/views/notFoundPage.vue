<template>
  <div id="content">
    <div class="page_none_container">
      <div class="page_none">
        <img src="../assets/images/icon_search_none.svg" alt="페이지없음아이콘" />
        <h3>{{ $t('notFoundPage.line0') }}</h3>
        <p>
          {{ $t('notFoundPage.line1') }}<br />
          {{ $t('notFoundPage.line2') }}
        </p>
        <router-link to="/main">{{ $t('notFoundPage.line3') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
