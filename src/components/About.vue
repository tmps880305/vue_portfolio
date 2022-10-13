<template>
  <div style="padding-top: 80px; background-color: transparent">

    <!--Page 1-->
    <b-container fluid style="height: 90vh">
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
          <div style="height: 80px;background-color: transparent"></div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col xl="1"></b-col>
        <b-col xl="3" align-self="center">
          <div class="t-tl-0">
            <p>Hi, I'm also a</p>
            <p>Snowboard Instructor / </p>
            <p>Coffee Barista /</p>
            <p>Photographer</p>
          </div>
        </b-col>
        <b-col xl="3" align-self="center">
          <img :src="selfPic" style="width: 100%">
        </b-col>
      </b-row>
    </b-container>

    <!--Page 2-->
    <b-container fluid>

      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 120px;background-color: transparent"></div>
          <!--<div style="height: 120px;background-color: transparent"></div>-->
        </b-col>
      </b-row>
      <!---->

      <b-row id="interest" class="justify-content-center" v-for="about in abouts" :data="about" :key="about.title">

        <b-col v-if="about.loc=='left'" xl="2" align-self="center">
          <div class="ratio ratio-1x1">
            <img :src="about.pic" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="about.loc=='right'" xl="4" align-self="center">
          <div class="t-tl-1">
            <a>{{about.title}}</a>
          </div>
          <div class="t-it-1">
            <a>{{about.sentence}}</a>
          </div>
        </b-col>


        <b-col v-if="about.loc=='left'" xl="4" align-self="center">
          <div class="t-tl-1">
            <a>{{about.title}}</a>
          </div>
          <div class="t-it-1">
            <a>{{about.sentence}}</a>
          </div>
        </b-col>

        <b-col v-else-if="about.loc=='right'" xl="2" align-self="center">
          <div class="ratio ratio-1x1">
            <img :src="about.pic" style="width: 100%">
          </div>
        </b-col>

        <b-row>
          <b-col>
            <div style="height: 60px;background-color: transparent"></div>
          </b-col>
        </b-row>

      </b-row>


      <!--End of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>
      <!---->
    </b-container>

    <!--Page 5-->
    <Copyrights/>

  </div>

</template>

<script>
  import Copyrights from '../components/Copyrights.vue'

  export default {
    name: 'About',
    components: {
      Copyrights
    },
    data() {
      return {
        selfPic: require('../assets/img/self/self.jpg'),
        abouts: [{
          title: 'Snowboarding',
          sentence: 'I love snowboarding! I have been practicing and training since 10, and I was certificated as an instructor in 2014.',
          pic: require('../assets/img/interests/snowboard_main.jpg'),
          loc: 'left'
        }, {
          title: 'Coffee Brewing',
          sentence: 'I enjoy brewing and tasting coffee everyday! Through different method, flavors could be extract from beans. And of course, I play Latte arts!',
          pic: require('../assets/img/interests/coffee_main.jpg'),
          loc: 'right'
        }, {
          title: 'Photography',
          sentence: 'Taking photos when traveling obsess me. I forgot times when I try to catch unforgettable scenes.',
          pic: require('../assets/img/interests/photo_main.jpg'),
          loc: 'left'
        }, {
          title: 'Free Dive',
          sentence: 'Diving make me relaxing. I feel like going on a journey out of the world when diving into the ocean.',
          pic: require('../assets/img/interests/freedive_main.jpg'),
          loc: 'right'
        }],
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';
</style>
