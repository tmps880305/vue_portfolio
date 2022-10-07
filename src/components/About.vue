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
          <div class="t-tl-1">
            <p>Hi, I'm Jen-I Wang, a</p>
            <p>UI developer / </p>
            <p>UX researcher /</p>
            <p>Front-end developer</p>
          </div>
        </b-col>
        <b-col xl="3" align-self="center">
          <img :src="require('../assets/img/self.jpg')" style="width: 100%">
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

      <b-row class="justify-content-center" v-for="about in abouts" :data="about" :key="about.title">

        <b-col v-if="about.loc=='left'" xl="2" align-self="center">
          <div class="ratio ratio-1x1">
            <img :src="require('../assets/img/'+about.pic)" style="width: 100%">
          </div>
        </b-col>
        <b-col v-else-if="about.loc=='right'" xl="4" align-self="center">
          <div class="t-tl-1">
            <p>{{about.sentence}}</p>
          </div>
        </b-col>



        <b-col v-if="about.loc=='left'" xl="4" align-self="center">
          <div class="t-tl-1">
            <p>{{about.sentence}}</p>
          </div>
        </b-col>

        <b-col v-else-if="about.loc=='right'" xl="2" align-self="center">
          <div class="ratio ratio-1x1">
            <img :src="require('../assets/img/'+about.pic)" style="width: 100%">
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
    name: 'About',
    data() {
      return {
        abouts: [{
          title:'snowboard',sentence:'I love snowboarding!I love snowboarding!I love snowboarding!',pic:'IMG_0601.jpg',loc:'left'
        },{
          title:'coffee',sentence:'I enjoy brewing and tasting coffee!I love snowboarding!I love snowboarding!',pic:'IMG_4723.jpg',loc:'right'
        },{
          title:'photography',sentence:'I like to take photos!I love snowboarding!I love snowboarding!',pic:'IMG_4960.jpg',loc:'left'
        }],
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  /*@import './../assets/css/works.css';*/
  /*@import './../assets/css/imgHover.css';*/
  @import './../assets/css/text.css';
</style>
