<template>
  <div id="app">
    <div class="mybarblank">
      <img class="logoPic" :src="logo" @click="home()">

      <div class="mybarcontainer">
        <router-link class="navLogo" to="/">&nbsp;</router-link>
        <router-link class="navButFar" to="/pixelPaper">PHOTO</router-link>
        <router-link class="navBut" to="/coffee">COFFEE</router-link>
        <router-link class="navButLong" to="/zoomRedesign">SNOWBOARD</router-link>
        <router-link class="navBut" to="/CatchCursor">WORKS</router-link>
        <router-link class="navBut" to="/">ABOUT</router-link>
      </div>
      <!--<div class="myCopyright" align="center">-->
        <!--<div>-->
          <!--<img style="margin-top: 5px" :src="crProto"/>-->
        <!--</div>-->
        <!--<div style="margin-top: 2px">-->
          <!--<img :src="crSnowphfee">-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        crProto: require('@/assets/img/copyright/copyrightsProto.png'),
        crSnowphfee: require('@/assets/img/copyright/CopyrightSnowphfee.png'),
        logo: require('@/assets/img/logo.png'),
      }
    },
    methods: {
      home() {
        this.$router.push("/")
      }
    }
  }
</script>

<style>
  #app {
  }
</style>

<style scoped>
  @import './assets/css/bar.css';
</style>
