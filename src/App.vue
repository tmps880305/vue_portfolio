<template>
  <div id="app">
    <!--<b-container fluid style="height: 90vh;position: fixed;z-index: 10">-->
    <b-container fluid style="position: fixed;z-index: 10">
      <b-row style="height: 80px;background-color: white;" align-v="center">
        <b-col xl="3"></b-col>
        <b-col xl="4">
          <img style="margin-left:30px;cursor: pointer;height: 50px;width: 50px;" :src="logo" @click="home()">
        </b-col>
        <b-col xl="2">
          <b-row align-h="end">
            <b-col>
              <router-link class="navButton" to="/">PROJECT</router-link>
            </b-col>
            <b-col>
              <a class="navButton" @click="gotoPage">RESUME</a>
            </b-col>
            <!--<b-col>-->
            <!--<router-link class="navButton" to="/catchcursor">CATCH</router-link>-->
            <!--</b-col>-->
            <b-col>
              <router-link class="navButton" to="/about">ABOUT</router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!--<b-row style="height: 87vh;" align-v="end">-->
      <!--<b-col>-->
      <!--<b-row align-h="end">-->
      <!--<img style="cursor: pointer;height: 45px;width:65px;align-self: end;margin-right: 40px"-->
      <!--:src="backtotop" @click="scrollToTop()">-->
      <!--</b-row>-->
      <!--</b-col>-->
      <!--</b-row>-->
    </b-container>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        logo: require('./assets/img/logo.jpg'),
        backtotop: require('./assets/img/something/back_to_top.png'),
      }
    },
    methods: {
      home() {
        this.$router.push("/")
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      gotoPage() {
        window.open("https://drive.google.com/file/d/15Tc6jKU0lvtD7MOIEyOTGuAPv2xfRdwe/view?usp=sharing")
      }
    }
  }
</script>

<style>
  #app {
  }
</style>

<style scoped>

  .navButton {
    background-color: white;
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 16px;
    letter-spacing: 2px;
    color: #004977;
    cursor: pointer;
    text-decoration: none;
  }

</style>
