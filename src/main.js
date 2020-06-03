import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

// intrernal components
import Intro from './components/Intro';
import About from './components/About';
import Career from './components/Career';
import Skills from './components/Skills';
import Year from './components/Year';
import NotFound from './components/NotFound';

// external libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faKaggle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCaretDown, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faBars,
    faCaretDown,
    faEnvelope,
    faGithub,
    faKaggle,
    faLinkedin,
    faTimes,
    faTwitter
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      redirect: {
          path: '/home'
      }
  },
  {
      path: '/home',
      name: 'home',
      component: Intro,
      meta: { pageNumber: 0, title: 'Home Page' }
  },
  {
      path: '/about',
      name: 'about',
      component: About,
      meta: { pageNumber: 1, title: 'About' }
  },
  {
      path: '/career',
      name: 'career',
      component: Career,
      title: 'Career',
      meta: { pageNumber: 2, title: 'Career' },
        children: [
            {
                path: '/career',
                redirect: { path: '/career/2019' },
                meta: { title: 'Career' },
            },
            {
                path: '/career/:year',
                component: Year,
                meta: { title: 'Career' },
            },
            {
                path: '/career/*',
                component: NotFound
            }
        ]
  },
  {
      path: '/skills',
      name: 'skills',
      component: Skills,
      meta: { pageNumber: 3, title: 'Skills' }
  },
  {
      path: '*',
      name: 'error',
      component: NotFound,
      meta: { title: 'Not Found' }
  },
];

const router = new VueRouter({
   mode: 'history',
   routes: routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
