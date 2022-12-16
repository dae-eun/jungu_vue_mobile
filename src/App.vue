<template>
  <div>
    <jinguHeader></jinguHeader>
    <router-view></router-view>
    <jinguFooter></jinguFooter>
  </div>
</template>

<script>
import jinguHeader from './layouts/jinguHeader.vue';
import jinguFooter from './layouts/jinguFooter.vue';
import { i18n } from '@/locales/i18n';

export default {
  components: {
    jinguHeader,
    jinguFooter,
  },
  created() {
    i18n.locale = this.$store.state.nation.Code;
  },
};
</script>

<style></style>
