<template>
  <div id="app">
    <b-container fluid style="height: 90vh;position: fixed;z-index: 10">
      <b-row style="height: 80px;background-color: white;" align-v="center">
        <b-col xl="3"></b-col>
        <b-col xl="3">
          <div>
            <img style="cursor: pointer;height: 60px;width: 60px;align-self: center" :src="logo" @click="home()">
          </div>
        </b-col>
        <b-col xl="3">
          <b-row align-h="end" align-v="center">
            <b-col>
              <router-link class="navBut2" style="margin-left: 0px" to="/pixelpaper">PHOTO</router-link>
            </b-col>
            <b-col>
              <router-link class="navBut2" to="/zoomredesign">SNOW</router-link>
            </b-col>
            <b-col>
              <router-link class="navBut2" to="/catchcursor">WORKS</router-link>
            </b-col>
            <b-col>
              <router-link class="navBut2" to="/about">ABOUT</router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row style="height: 90vh;" align-v="end">
        <b-col>
          <b-row align-h="end">
            <img style="cursor: pointer;height: 60px;width:60px;align-self: end"
                 :src="require('@/assets/img/something/arrow.png')" @click="home()">
          </b-row>
        </b-col>
      </b-row>
    </b-container>
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

  .navBut2 {
    width: 100px;
    height: 60px;
    /*margin-left: 30px;*/
    background-color: white;
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 16px;
    letter-spacing: 2px;
    color: #004977;
    cursor: pointer;
    text-decoration: none;
  }

</style>
