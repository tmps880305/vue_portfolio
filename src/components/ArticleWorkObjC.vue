<template>
  <div>
    <div align="center">
      <img :src="topPic" style="width: 1905px;height: 540px;"><br>
    </div>
    <div class="myArtcontainer">
      <router-link to="/works"><img :src="goBack" style="margin-bottom: 10px;"></router-link>
      <br>
      <label class="ftTopic">Objective-C Prototype</label><br><br>

      <label class="ftArti">I took course of Objective-C, Object-Oriented Programming when I was grade forth in
        the university. We learned iOS development in the lesson, and did a final project. Please
        enjoy the <button class="ftArti" @click="popVideo()" style="color: #F2CC0E;cursor: pointer;text-decoration: underline;">VIDEO</button> of our app first.</label><br><br>


      <label class="ftSubtopic">Introduction</label><br><br>

      <label class="ftArti">This app includes four parts.</label>
      <label class="ftArti"><br>&nbsp;&nbsp;1. RFID Scanning
        &nbsp;&nbsp;&nbsp;&nbsp;RFID Scanning allows user to scan RFID, or input ID of the element on the top. In the
        &nbsp;&nbsp;&nbsp;&nbsp;video, I first demonstrate pressing the blue "confirm" button down at left. The message
        &nbsp;&nbsp;&nbsp;&nbsp;show on the screen means "Please turn on the switch." Then, I turn on the switch down
        &nbsp;&nbsp;&nbsp;&nbsp;at right and press "confirm" again. The message says "Cannot find this ID." Finally, I
        &nbsp;&nbsp;&nbsp;&nbsp;input the correct ID, and the message show the informations about the element.

        &nbsp;&nbsp;2. Map Navigation
        &nbsp;&nbsp;&nbsp;&nbsp;This part allows users to link to map navigation. However, it was beyond our ability to
        &nbsp;&nbsp;&nbsp;&nbsp;insert the real map function. Thus, we use images switching to demonstrate it.


        &nbsp;&nbsp;3. Add to Calendar
        &nbsp;&nbsp;&nbsp;&nbsp;User can add calendar with element informations here. Same to the map part, we
        &nbsp;&nbsp;&nbsp;&nbsp;prototype the time selection part, and the real "add to calendar" function remained
        &nbsp;&nbsp;&nbsp;&nbsp;undo.

        &nbsp;&nbsp;4. About us
        &nbsp;&nbsp;&nbsp;&nbsp;This part shows information about the developers, aka us. By clicking on the blue link,
        &nbsp;&nbsp;&nbsp;&nbsp;the page will switch to gmail on safari.</label><br><br>


      <label class="ftSubtopic">Brainstorm</label><br><br>

      <label class="ftArti">My teammate Kin and I were both major in Civil Engineering, so we brainstormed and
        design an application to improve data collection of buildings. As long as a building is
        finished, it is hard to find informations about the elements of the building. Thus, our app
        allows one to simply scan the RFID of the elements, which were insert before the
        structure is built.
        <br>Though this app looks unrealistic today, the programming technique I learned at that time
        is surely helpful to me.
      </label><br><br>

      <img :src="artPic1" style="width: 810px;height: 540px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br><br>

      <label class="ftSubtopic">Coding</label><br><br>

      <label class="ftArti">It was not quite difficult to follow steps teaching in the lesson. However, there were
        too
        many functions that were not taught. For example, the switch page function. It took me
        most of the time to finish switching between every page. I search a lot of tutorials on the
        Internet and finally learned how to do it. Some of detail settings were different with
        tutorials due to various version of Xcode.</label><br><br>

      <label class="ftSubtopic">Overview</label><br><br>

      <label class="ftArti">With the increase of mobile devices, computers are not that much important for people.
        Nowadays, most of people have smart phones while not everyone has a personal
        computer or laptop. Applications on mobile devices become more and more significant.
        Indeed, a website can responsive to different size of screen, however, an abundance of
        functions perform better in applications or sometimes only work in apps. As a result, to
        acquire ability to develop a mobile device application is crucial to an UI/UX designer.</label><br>
    </div>

    <div style="background-color: #FFFFFF;width: 960px;height: 180px;"></div>

    <transition name="custom-classes-transition"
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut">
      <div class="popRemark" v-show="mShow" @click="closeVido()">
        <div class="popRemark-content">
          <video :src="appVideo" style="width: auto;height: 720px;padding-left: 10%;padding-top: 5%" controls>
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </transition>

  </div>
</template>


<script>
  export default {
    name: 'ArticleWorkAssign',
    data() {
      return {
        mainPic: {
          id: '0',
          img: require('../assets/img/IMG_0601.jpg'),
          topic: 'Traveling Boracay',
          subTopic: 'secret beach behind the island',
          artiLink: '/artiPhoto/mainPic'
        },
        toSeeMore: require('../assets/img/toSeeMore.png'),
        topPic: require('../assets/img/works/objectivec/objTopPic.jpg'),
        artPic1: require('../assets/img/works/objectivec/storyboard.png'),
        appVideo: require('../assets/img/works/objectivec/objC_datastru.mp4'),
        xButton: require('../assets/img/something/arrow.png'),
        goBack: require('../assets/img/goback.png'),
        mShow: false
      }
    },
    methods: {
      goToArti(val) {
        alert(val)
      },
      popVideo() {
        this.mShow = true;
      },
      closeVido() {
        this.mShow = false;
      }
    },
  }
</script>
<style scoped>
  @import './../assets/css/article.css';
  @import './../assets/css/popRemark.css';
  @import './../assets/css/animate.css';
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
</style>
