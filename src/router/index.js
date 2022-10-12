import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import ZoomRedesign from '@/components/ZoomRedesign'
import PixelPaper from '@/components/PixelPaper'
import CatchCursor from '@/components/CatchCursor'
import Copyrights from '@/components/Copyrights'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/zoomredesign',
      name: 'ZoomRedesign',
      component: ZoomRedesign
    },{
      path: '/pixelpaper',
      name: 'PixelPaper',
      component: PixelPaper
    },
    {
      path: '/catchcursor',
      name: 'CatchCursor',
      component: CatchCursor
    },
    {
      path: '/copyrights',
      name: 'Copyrights',
      component: Copyrights
    }
  ]
})
