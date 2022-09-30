import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Coffee from '@/components/Coffee'
import Photo from '@/components/Photo'
import Snowboard from '@/components/Snowboard'
import Works from '@/components/Works'
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
      name: 'Works',
      component: Works
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
      path: '/photo',
      name: 'Photo',
      component: Photo
    },{
      path: '/snowboard',
      name: 'Snowboard',
      component: Snowboard
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
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
