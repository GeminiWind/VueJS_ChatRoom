import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@components/auth/Login.vue';
import Logout from '@components/auth/Logout.vue';
import Setting from '@components/auth/profile/Setting.vue';
import Profile from '@components/auth/profile/Profile.vue';
import Register from '@components/auth/Register.vue';
import Chat from '@components/chat/Chat.vue';
import Email from '@components/auth/password/Email.vue';
import Reset from '@components/auth/password/Reset.vue';
import Feed from '@components/feed/Feed.vue';
import PageNotFound from '@components/404.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            forVisitor: true
        }
    }, {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            forVisitor: true
        }
    }, {
        path: '/forget',
        name: 'forget',
        component: Email,
        meta: {
            forVisitor: true
        }
    },{
        path: '/reset/:token',
        name: 'reset',
        component: Reset,
        meta: {
            forVisitor: true
        }
    },{
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {
            forAuth: true
        }
    },{
        path: '/setting',
        name: 'setting',
        component: Setting,
        meta: {
            forAuth: true
        }
    },{
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            forAuth: true
        }
    },{
        path: '/chat',
        name: 'chat',
        component: Chat,
        meta: {
            forAuth: true
        }
    },{
        path: '/feed',
        name: 'feed',
        component: Feed,
        meta: {
            forAuth: true
        }
    },{
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
    }]
});
export default router