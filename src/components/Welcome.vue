<template>
  <div style="padding-top: 80px; background-color: transparent">

    <!--Page 1-->
    <b-container fluid style="height: 90vh">
      <b-row>
        <b-col>
          <div style="height: 80px;background-color: transparent"></div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col xl="1"></b-col>
        <b-col xl="3" align-self="center">
          <div class="t-tl-1">
            <p>Hi, I'm Jen-I Wang, a</p>
            <p>UI developer / </p>
            <p>UX researcher /</p>
            <p>Front-end developer</p>
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

      <b-row class="justify-content-center" v-for="mainPic in mainPics" :data="mainPic" :key="mainPic.id">

        <b-col v-if="mainPic.loc=='left'" xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;cursor: pointer;" @click="routePage(mainPic.link)">
            <img :src="mainPic.source" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="mainPic.loc=='right'" xl="3" align-self="center">
          <div class="t-tl-1" style="cursor: pointer;" @click="routePage(mainPic.link)">
            <a>{{mainPic.title}}</a>
          </div>
          <div class="t-it-1" style="cursor: pointer;" @click="routePage(mainPic.link)">
            <a>{{mainPic.prompt}}</a>
          </div>
        </b-col>


        <b-col v-if="mainPic.loc=='right'" xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;cursor: pointer;" @click="routePage(mainPic.link)">
            <img :src="mainPic.source" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="mainPic.loc=='left'" xl="3" align-self="center">
          <div class="t-tl-1" style="cursor: pointer;" @click="routePage(mainPic.link)">
            <a>{{mainPic.title}}</a>
          </div>
          <div class="t-it-1" style="cursor: pointer;" @click="routePage(mainPic.link)">
            <a>{{mainPic.prompt}}</a>
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

    <!--Page 4-->
    <b-container fluid>
      <div style="text-align: center" class="t-tl-1">
        <a>Interests</a>
      </div>

      <b-row class="justify-content-center mt-3">
        <b-col xl="6">
          <b-row>
            <b-col xl="6" class="mt-3 mb-2" v-for="interest in interests" :data="interest"
                   :key="interest.id">
              <div class="hovereffect">
                  <img :src="interest.src" style="width: 100%">
                <div class="overlay" @click="routePage(interest.link)">
                  <h2>{{interest.title}}</h2>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>

    </b-container>

    <!--Page 5-->
    <Copyrights/>

  </div>

</template>

<script>
  import Copyrights from '../components/Copyrights.vue'

  export default {
    name: 'Welcome',
    components: {
      Copyrights
    },
    data() {
      return {
        selfPic: require('../assets/img/draft/Self_draft.png'),
        interest: require('../assets/img/interests/snowboard_main.jpg'),
        interests: [
          {
            title: 'Snowboarding',
            src: require('../assets/img/interests/snowboard_main.jpg'),
            link: '/about'
          }, {
            title: 'Coffee Brewing',
            src: require('../assets/img/interests/coffee_main.jpg'),
            link: '/about'
          }, {
            title: 'Photography',
            src: require('../assets/img/interests/photo_main.jpg'),
            link: '/about'
          }, {
            title: 'Free Diving',
            src: require('../assets/img/interests/freedive_main.jpg'),
            link: '/about'
          }
        ],
        mainPics: [
          {
            loc: 'left',
            title: 'CatchCursor',
            prompt: 'Voice User Interface to control the cursor',
            source: require(`../assets/img/works/catchcursor/CatchCursor_main.jpg`),
            link: '/catchcursor'
          },
          {
            loc: 'right',
            title: 'Pixel Paper',
            prompt: 'UX research for a college course system',
            source: require(`../assets/img/works/pixelpaper/PixelPaper_main.jpg`),
            link: '/pixelpaper'
          },
          {
            loc: 'left',
            title: 'Zoom Redesign',
            prompt: 'Improve Zoom for online course conditions',
            source: require(`../assets/img/works/zoomredesign/ZoomRedesign_main.jpg`),
            link: '/zoomredesign'
          }]
      }
    },
    methods: {
      routePage(val) {
        this.$router.push(val)
      }
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';
  @import '../assets/css/imgHover.css';


</style>
