import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Pages/HomePage.vue';
import JobFairPage from '@/components/Pages/JobFairPage.vue';
import MeetingsPage from '@/components/Pages/MeetingsPage.vue';
import ContactPage from '@/components/Pages/ContactPage.vue';

Vue.use(Router)

const router = new Router({
  base: "/mharrison7787.github.io/",
  routes: [
    {
      path: "/",
      name: "Technology Career Network (TCN)",
      component: HomePage,
    },
    {
      path: "/JobFairPage",
      name: "TCN Job Fairs",
      component: JobFairPage,
    },
    {
      path: "/MeetingsPage",
      name: "TCN Meetings",
      component: MeetingsPage,
    },
    {
      path: "/ContactPage",
      name: "TCN Contact Us",
      component: ContactPage,
    },
  ],
});

router.beforeEach((route, from, next) => {
  document.title = route.name;
  next();
});

export default router;
