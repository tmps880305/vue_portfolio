<template>
  <div>
    <div style="padding-top: 90px" class="picGrid">
      <!--Background-->
      <div style="width: 1920px;height: 810px;opacity: 80%;z-index: 1;background-color: black;position: fixed"></div>
      <img style="width: 1920px;height: 810px;opacity: 60%;z-index: 0" :src="background">
      <!--Items-->
      <img style="z-index: 2;grid-column:2;grid-row:3/4;" :src="item.syphon">
      <img style="z-index: 2;grid-column:3;grid-row:4/5;" :src="item.aeropress">
      <img style="z-index: 2;grid-column:4/5;grid-row:2/3;" :src="item.barista">
      <router-link style="z-index: 2;grid-column:5;grid-row:5;" to="/coffee">
        <img :src="item.handdrip"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Coffee',
    data() {
      return {
        mainPic: {
          id: '0',
          img: require('@/assets/img/IMG_0601.jpg'),
          topic: 'Traveling Boracay',
          subTopic: 'secret beach behind the island',
          artiLink: '/artiPhoto/mainPic'
        },
        toSeeMore: '/img/toSeeMore.png',
        background: require('@/assets/img/IMG_2627_2.jpg'),
        item: {
          syphon: require('@/assets/img/coffee/syphon.png'),
          aeropress: require('@/assets/img/coffee/aeropress.png'),
          barista: require('@/assets/img/coffee/barista.png'),
          handdrip: require('@/assets/img/coffee/handdrip.png')
        },
      }
    },
    methods: {
      goToArti(val) {
        alert(val)
      },
    },
    created() {
      var vm = this

    }
  }
</script>

<style scoped>
  @import './../assets/css/coffee.css';
</style>
