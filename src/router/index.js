import Vue from 'vue';
import VueRouter from 'vue-router';
// import DefortLayout from "@/layouts/DefortLayout.vue";
// import main from '@/views/jinguMain.vue'
// import notice_list from "@/views/notice_list.vue";
// import route_search from "@/views/route_search.vue";
// import search_result from "@/views/search_result.vue";
// import subway_map from "@/views/subway_map.vue";
// import tourist_information_list from "@/views/tourist_information_list.vue";
// import faq from "@/views/faq_view.vue";
// import ai_translation from "@/views/ai_translation.vue";
// import medical_institution_information_list from "@/views/medical_institution_information_list.vue";
// import medical_institution_information_view from "@/views/medical_institution_information_view.vue";
// import location_based from "@/views/location_based.vue";
// import notice_view from "@/views/notice_view.vue";
// import board_test from "@/views/board_test.vue";
// import tourist_information_view from "@/views/tourist_information_view.vue"
// import ai_travel_recommendation from "@/views/ai_travel_recommendation.vue"
// import air_traffic_info from "@/views/air_traffic_info.vue"
// import emergency_response from "@/views/emergency_response.vue"
// import refund_application_info from "@/views/refund_application_info.vue"
// import train_service_info from "@/views/train_service_info.vue"

// 동일한 라우터로 연결 시 새로고침
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(() => {
//     return window.location.reload();
//   });
// };

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    // {
    //   path:'/',
    //   component:DefortLayout,
    //   redirect:DefortLayout,
    // },
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/views/jinguMain.vue'),
      name: 'main',
    },
    {
      path: '/location_based',
      component: () => import('@/views/location_based.vue'),
    },
    {
      path: '/tourist_information_list/',
      name: 'tour',
      component: () => import('@/views/tourist_information_list.vue'),
    },
    {
      path: '/tourist_information_list/id=:id&lat=:lat&lng=:lng&tourname=:tourname',
      component: () => import('@/views/tourist_information_view.vue'),
    },
    {
      path: '/medical_institution_information_list',
      component: () => import('@/views/medical_institution_information_list.vue'),
    },
    {
      path:
        '/medical_institution_information_list/id=:id&lat=:lat&lng=:lng&medicalname=:medicalname',
      name: 'medical',
      component: () => import('@/views/medical_institution_information_view.vue'),
    },
    {
      // patt : url주소
      path: '/notice',
      // component : url 주소로 갔을 때 표시될 컴포넌트
      component: () => import('@/views/notice_list.vue'),
    },
    {
      path: '/notice&id=:id',
      name: 'notice',
      component: () => import('@/views/notice_view.vue'),
    },
    {
      path: '/ai_translation',
      component: () => import('@/views/ai_translation.vue'),
    },
    {
      path: '/route_search',
      component: () => import('@/views/route_search.vue'),
    },
    {
      path: '/search_result',
      component: () => import('@/views/search_result.vue'),
    },
    {
      path: '/subway_map',
      component: () => import('@/views/subway_map.vue'),
    },
    {
      path: '/faq',
      component: () => import('@/views/faq_view.vue'),
    },
    {
      path: '/ai_travel_recommendation',
      component: () => import('@/views/ai_travel_recommendation.vue'),
    },
    {
      path: '/air_traffic_info',
      component: () => import('@/views/air_traffic_info.vue'),
    },
    {
      path: '/emergency_response',
      component: () => import('@/views/emergency_response.vue'),
    },
    {
      path: '/refund_application_info',
      component: () => import('@/views/refund_application_info.vue'),
    },
    {
      path: '/train_service_info',
      component: () => import('@/views/train_service_info.vue'),
    },
    {
      // patt : url주소
      path: '/eBook',
      // component : url 주소로 갔을 때 표시될 컴포넌트
      component: () => import('@/views/eBook_list.vue'),
    },
    {
      path: '/eBook&id=:id',
      name: 'eBook',
      component: () => import('@/views/eBook_view.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/404',
      component: () => import('@/views/notFoundPage.vue'),
    },
  ],
});
router.beforeEach(function(to, from, next) {
  // to : 이동할 url
  // from : 현재 url
  // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
  next();
});
