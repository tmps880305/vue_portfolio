import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Coffee from '@/components/Coffee'
import ZoomRedesign from '@/components/ZoomRedesign'
import PixelPaper from '@/components/PixelPaper'
import CatchCursor from '@/components/CatchCursor'
import Article from '@/components/Article'
import ArticleWorkMyweb from '@/components/ArticleWorkMyweb'
import ArticleWorkAssign from '@/components/ArticleWorkAssign'
import ArticleWorkObjC from '@/components/ArticleWorkObjC'
import ArticleWorkConLab from '@/components/ArticleWorkConLab'
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
      name: 'CatchCursor',
      component: CatchCursor
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coffee',
      name: 'Coffee',
      component: Coffee
    },
    {
      path: '/zoomRedesign',
      name: 'ZoomRedesign',
      component: ZoomRedesign
    },{
      path: '/pixelPaper',
      name: 'PixelPaper',
      component: PixelPaper
    },
    {
      path: '/catchCursor',
      name: 'CatchCursor',
      component: CatchCursor
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/articleWorkMyweb',
      name: 'ArticleWorkMyweb',
      component: ArticleWorkMyweb
    },
    {
      path: '/articleWorkAssign',
      name: 'ArticleWorkAssign',
      component: ArticleWorkAssign
    },
    {
      path: '/articleWorkObjC',
      name: 'ArticleWorkObjC',
      component: ArticleWorkObjC
    },
    {
      path: '/articleWorkConLab',
      name: 'ArticleWorkConLab',
      component: ArticleWorkConLab
    }
  ]
})
