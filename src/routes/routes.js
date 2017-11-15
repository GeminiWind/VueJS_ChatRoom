import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@components/auth/Login';
import Logout from '@components/auth/Logout';
import Setting from '@components/auth/profile/Setting';
import Profile from '@components/auth/profile/Profile';
import Register from '@components/auth/Register';
import Chat from '@components/chat/Chat';
import Email from '@components/auth/password/Email';
import Reset from '@components/auth/password/Reset';
import Feed from '@components/feed/Feed';
import PageNotFound from '@components/404';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      forVisitor: true,
    },
  }, {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      forVisitor: true,
    },
  }, {
    path: '/forget',
    name: 'forget',
    component: Email,
    meta: {
      forVisitor: true,
    },
  }, {
    path: '/reset/:token',
    name: 'reset',
    component: Reset,
    meta: {
      forVisitor: true,
    },
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      forAuth: true,
    },
  }, {
    path: '/setting',
    name: 'setting',
    component: Setting,
    meta: {
      forAuth: true,
    },
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      forAuth: true,
    },
  }, {
    path: '/chat',
    name: 'chat',
    component: Chat,
    meta: {
      forAuth: true,
    },
  }, {
    path: '/feed',
    name: 'feed',
    component: Feed,
    meta: {
      forAuth: true,
    },
  }, {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  }],
});

// define custom middleware function
router.middlewares = (middlewares) => {
  middlewares.forEach((middleware) => {
    middleware(router);
  });
};

export default router;
