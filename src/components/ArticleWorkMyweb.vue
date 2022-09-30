<template>
  <div>
    <div align="center">
      <img :src="topPic" style="width: 1905px;height: 540px;"><br>
    </div>
    <div class="myArtcontainer">
      <router-link to="/works"><img :src="goBack" style="margin-bottom: 10px;"></router-link><br>
      <label class="ftTopic">Personal Website</label><br><br>

      <label class="ftArti">This website is constructed on my own, from designing to coding.
        In this article, I will talk about concepts of making this website.</label><br><br>

      <label class="ftSubtopic">Motivation</label><br><br>

      <label class="ftArti">After learning deeper techniques of web development, I started to do more research about
        UI/UX design on website design. I gained knowledge from the Internet, and tried to  create
        some works. This website is the one I launched from wireframing to coding.</label><br><br>

      <label class="ftSubtopic">Start to Design</label><br><br>

      <img :src="picDesProc" style="width: 540px;height: 360px;float: right;">

      <label class="ftArti">First of all, I did a simple design process on myself. Although it was not
        the design process actually mean, I
        tried to consider myself a customer
        and did empathize, define, and ideate.
        I am a customer who wants a website
        that I can post my portfolios and share
        my interests. I did those process on
        paper at first. The below picture is
        what I wrote that time.</label><br><br>

      <label class="ftSubtopic">Sketch It</label><br><br>

      <label class="ftArti">When I went into process of prototype, I first drew some symbol wireframes. Then I use
        Sketch to do better wireframing. Using simple polygons, I completed wireframes of four main
        pages and their detail article pages. It was my first time using Sketch, but I feel lucid about its
        functions. I made some 'symbols' to utilize in my web. Next, I transformed my wireframe into
        prototype. Before replacing those polygons into pictures and words, I defined the color pad
        through Adobe Color, and selected typography with Google Fonts. When my prototype
        finished, I was surprised that it just looked like a real site!</label><br><br>

      <img :src="picWireframe" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>
      <img :src="picPrototype" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>


      <label class="ftSubtopic">Coding</label><br><br>

      <label class="ftArti">I use the popular JavaScript framework - Vue to develop the front end. For the backend,
        I planned to connect to MySQL database with Java. However, I am still doing the front
        end that I temporarily release my web through Siteground. That's why people can visit
        <router-link to="/">snowphfee.com</router-link> now. To convert the prototype into real code is challenging and interesting.
        I will keep processing and finish my unique website soon!</label><br><br>

    </div>

    <div style="background-color: #FFFFFF;width: 960px;height: 120px;"></div>
  </div>
</template>



<script>
  export default {
    name: 'ArticleWorkAssign',
    data() {
      return {
        toSeeMore: require('@/assets/img/toSeeMore.png'),
        topPic: require('@/assets/img/works/personalWebsite/topPic.jpg'),
        artPic1: require('@/assets/img/works/personalWebsite/designProcess.jpg'),
        picDesProc: require('@/assets/img/works/personalWebsite/designProcess.jpg'),
        picWireframe: require('@/assets/img/works/personalWebsite/wireframe.png'),
        picPrototype: require('@/assets/img/works/personalWebsite/prototype.png'),
        goBack: require('@/assets/img/goback.png'),
      }
    },
    methods: {
      goToArti(val) {
        alert(val)
      },
    },
  }
</script>
<style scoped>
  @import './../assets/css/article.css';
</style>
