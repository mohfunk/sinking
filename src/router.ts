import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Releases from './views/Releases.vue';
import Friends from './views/Friends.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes:
        [
            { path: '/', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About },
            { path: '/releases', name: 'releases', component: Releases },
            { path: '/friends', name: 'friends', component: Friends },
            { path: '/contact', name: 'contact', component: Contact },
        ],
});
