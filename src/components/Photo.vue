<template>
  <div>
    <div class="myPhcontainer">
      <!--Main pic-->
      <div style="width: 960px;height: 800px;">
        <img style="width: 780px;height: 520px;margin-top: 60px" :src="mainPic.img">

        <label style="background-color: white;font-family: 'Merienda','cursive';margin-left: 378px;
            font-size: 64px;color: #004977">{{mainPic.topic}}</label>

        <label style="background-color: white;font-family: 'Merienda','cursive';margin-left: 416px;
            font-size: 32px;color: #0776A1;">{{mainPic.subTopic}}</label>

        <img style="margin-left: 780px;cursor: pointer" :src="toSeeMore" @click="goToArti(mainPic.artiLink)">
      </div>

      <!--Sub pic-->
      <div v-for="subPic in subPics">
        <div v-if="subPic.id%2===1" class="subPicGridOdd">
          <div style="grid-column:1/4;grid-row:1;">
            <label></label>
          </div>
          <div style="grid-column:1/4;grid-row:2;">
            <label></label>
          </div>
          <div style="grid-column: 2;grid-row: 3/6">
            <!--Image part-->
            <img style="width: 300px;height: 200px" :src="subPic.img">
          </div>
          <!--Topic part-->
          <div style="grid-column:4;grid-row:4;">
            <label style="font-family: 'Merienda','cursive';
            font-size: 32px;color: #004977;">{{subPic.topic}}</label>
          </div>

          <div style="grid-column:4;grid-row:5;">
            <label style="font-family: 'Merienda','cursive';
            font-size: 24px;color: #0776A1;padding-left:20px">{{subPic.subTopic}}</label>
          </div>
          <div style="grid-column:4/5;grid-row:6;">
            <img style="cursor: pointer" :src="toSeeMore" @click="goToArti(mainPic.artiLink)">
          </div>
        </div>
        <div v-else class="subPicGridEven">
          <div style="grid-column:1/4;grid-row:1;">
            <label></label>
          </div>
          <div style="grid-column:1/4;grid-row:2;">
            <label></label>
          </div>

          <!--Topic part-->
          <div style="grid-column:2;grid-row:4;">
            <label style="font-family: 'Merienda','cursive';
            font-size: 32px;color: #004977;">{{subPic.topic}}</label>
          </div>

          <div style="grid-column:2;grid-row:5;">
            <label style="font-family: 'Merienda','cursive';
            font-size: 24px;color: #0776A1;padding-left:20px">{{subPic.subTopic}}</label>
          </div>
          <div style="grid-column:2;grid-row:6;">
            <img style="cursor: pointer" :src="toSeeMore" @click="goToArti(mainPic.artiLink)">
          </div>

          <div style="grid-column: 4;grid-row: 3/6">
            <!--Image part-->
            <img style="width: 300px;height: 200px" :src="subPic.img">
          </div>

        </div>


      </div>


      <!--Blank area-->
      <div style="height: 120px;background-color: #FFFFFF">
        <label></label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Photo',
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
        subPics: [{
          id: '1',
          img: require('../assets/img/IMG_4723.jpg'),
          topic: 'Natural Park in Nanto',
          subTopic: 'white piano in the lake',
          artiLink: '/artiPhoto/nanto'
        }, {
          id: '2',
          img: require('../assets/img/IMG_5261.jpg'),
          topic: 'Autumn Trip in Japan',
          subTopic: 'maple dancing in Karuisawa',
          artiLink: '/artiPhoto/karuisawa'
        },
          {
            id: '3',
            img: require('../assets/img/IMG_4960.jpg'),
            topic: 'Forgotton Forest',
            subTopic: 'floating on misery lake',
            artiLink: '/artiPhoto/forgotten'
          },
          {
            id: '4',
            img: require('../assets/img/IMG_5608.jpg'),
            topic: 'Snowboarding Niseko',
            subTopic: 'cozy coffee cabin',
            artiLink: '/artiPhoto/niseko'
          }],
      }
    },
    methods: {
      goToArti(val) {
        // alert(val)
      },
    },
    created() {
      var vm = this
    },
  }
</script>

<style scoped>
  @import './../assets/css/photo.css';
</style>
