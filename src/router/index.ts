import { createRouter, createWebHistory } from 'vue-router';
import UvodnaView from '@/views/HomeView.vue';
import DestinationView from "@/views/DestinationView.vue";
import SluzbyView from "@/views/ServicesView.vue";
import KontaktyView from "@/views/ContactView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import ThankYouView from "@/views/ThankYouView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'uvodna',
      component: UvodnaView,
      meta: { title: 'Home - My Vue App' },
    },
    {
      path: '/destinacie',
      name: 'destinacie',
      component: DestinationView,

    },
    {
      path: '/sluzby',
      name: 'sluzby',
      component: SluzbyView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: KontaktyView,
    },
    {
      path: '/kosik',
      name: 'kosik',
      component: ShoppingCartView,
    },
    {
      path: '/thankyou/:text/:link',
      name: 'thankyou',
      component: () => import('@/views/ThankYouView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/404.vue'),
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router
