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
          <div class="ratio" style="--bs-aspect-ratio: 50%;">
            <img :src="mainPic.source" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="mainPic.loc=='right'" xl="3" align-self="center">
          <div class="t-tl-1">
            <a>{{mainPic.title}}</a>
          </div>
          <div class="t-it-1">
            <a>{{mainPic.prompt}}</a>
          </div>
        </b-col>


        <b-col v-if="mainPic.loc=='right'" xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;">
            <img :src="mainPic.source" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="mainPic.loc=='left'" xl="3" align-self="center">
          <div class="t-tl-1">
            <a>{{mainPic.title}}</a>
          </div>
          <div class="t-it-1">
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
            <b-col xl="6" class="mt-3 mb-2" v-for="interest in interests" :data="interest" :key="interest.id">
              <div class="ratio ratio-1x1">
                <img :src="interest.src" style="width: 100%">
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
        interests: [{
          title: 'Snowboard', src: require('../assets/img/interests/snowboard_main.jpg')
        }, {
          title: 'Coffee', src: require('../assets/img/interests/coffee_main.jpg')
        }, {
          title: 'Photography', src: require('../assets/img/interests/photo_main.jpg')
        }, {
          title: 'Freedive', src: require('../assets/img/interests/freedive_main.jpg')
        }],
        mainPics: [
          {
            loc: 'left',
            title: 'CatchCursor',
            prompt: 'Voice User Interface to control the cursor',
            source: require(`../assets/img/works/catchcursor/CatchCursor_main.jpg`)
          },
          {
            loc: 'right',
            title: 'Pixel Paper',
            prompt: 'UX research for a college course system',
            source: require(`../assets/img/works/pixelpaper/PixelPaper_main.jpg`)
          },
          {
            loc: 'left',
            title: 'Zoom Redesign',
            prompt: 'Improve Zoom for online course conditions',
            source: require(`../assets/img/works/zoomredesign/ZoomRedesign_main.jpg`)
          }]
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';

</style>
