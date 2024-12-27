import { createRouter, createWebHistory } from 'vue-router';
import UvodnaView from '@/views/HomeView.vue';
import DestinationView from "@/views/DestinationView.vue";
import SluzbyView from "@/views/ServicesView.vue";
import KontaktyView from "@/views/ContactView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

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
  ],
  scrollBehavior(to, from, savedPosition) {
    // Ak je uložená pozícia (napr. po návrate späť), použije sa táto
    if (savedPosition) {
      return savedPosition;
    } else {
      // Inak vždy scrolluje na vrch
      return { top: 0 };
    }
  },
})

export default router
