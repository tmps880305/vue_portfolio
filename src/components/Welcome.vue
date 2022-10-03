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
            <a>Hi, I'm Jen-I Wang.</a>
            <p>A UI developer / UX researcher / Front-end developer</p>
          </div>
        </b-col>
        <b-col xl="3" align-self="center">
          <img :src="require('@/assets/img/draft/Self_draft.png')" style="width: 100%">
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

      <b-row class="justify-content-center">
        <b-col xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>

        <b-col xl="3" align-self="center">
          <div class="t-tl-1">
            <a>Hi, I'm Jen-I Wang.</a>
            <p>A UI developer / UX researcher / Front-end developer</p>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col xl="3" align-self="center">
          <div class="t-tl-1">
            <a>Hi, I'm Jen-I Wang.</a>
            <p>A UI developer / UX researcher / Front-end developer</p>
          </div>
        </b-col>
        <b-col xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col xl="5" align-self="center">
          <div class="ratio" style="--bs-aspect-ratio: 50%;">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>

        <b-col xl="3" align-self="center">
          <div class="t-tl-1">
            <a>Hi, I'm Jen-I Wang.</a>
            <p>A UI developer / UX researcher / Front-end developer</p>
          </div>
        </b-col>
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
        <b-col xl="3">
          <div class="ratio ratio-1x1">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>
        <b-col xl="3">
          <div class="ratio ratio-1x1">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-3">
        <b-col xl="3">
          <div class="ratio ratio-1x1">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>
        <b-col xl="3">
          <div class="ratio ratio-1x1">
            <img :src="mainPic" style="width: 100%">
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!--Page 5-->
    <b-container fluid>
      <b-row>
        <!--blank-->
        <div style="height: 80px;background-color: lavender"></div>
      </b-row>

      <b-row class="justify-content-center">
        <b-col xl="6">
          <b-row>
            <!--Copyright-->
            <div style="height: 60px;background-color: lightgoldenrodyellow"></div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>
  export default {
    name: 'CatchCursor',
    data() {
      return {
        mainPic: require('@/assets/img/IMG_0601.jpg'),
        mainInfos: [{
          id: 0, title: 'Tags', items: ['Accessibility', 'UX Design', 'Usability Test']
        }, {
          id: 1, title: 'My Role', items: ['UI Developer', 'UX Researcher', 'System Developer']
        }, {
          id: 2, title: 'Tools', items: ['figma.png', 'mirro.png', 'sketch.png', 'java.png']
        }],
        motivateInfos: [{
          id: 0,
          title: 'Prompt',
          sentence: 'Interface control could become hand-free to provide accessibility for people in hand-busy situations.'
        }, {
          id: 1,
          title: 'Problem',
          sentence: 'Construct Voice User Interface to allow the user to control devices with speech input.'
        }, {
          id: 2,
          title: 'Solution',
          sentence: 'Construct Voice User Interface to allow the user to control devices with speech input.'
        }],
        intro: {
          title: 'Introduction',
          content: 'Interface control could become hand-free to provide accessibility for people in hand-busy situations.Interface control could become hand-free to provide accessibility for people in hand-busy situations.Interface control could become hand-free to provide accessibility for people in hand-busy situations.'
        },
        process: {title: 'Process', img: require('@/assets/img/IMG_0601.jpg')},
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/works.css';
  @import './../assets/css/imgHover.css';


  .t-tl-1 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 30px;
    /*letter-spacing: 2px;*/
    color: #000000;
    padding-bottom: 8px;
  }

  .t-tl-2 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 24px;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

  .t-tl-3 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 18px;
    font-weight: bolder;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

  .t-it-1 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 18px;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

  .t-it-2 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 22px;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

</style>
