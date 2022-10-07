<template>
  <div id="app">
    <b-container fluid style="height: 90vh;position: fixed;z-index: 10">
    <!--<b-container fluid style="position: fixed;z-index: 10">-->
      <b-row style="height: 80px;background-color: white;" align-v="center">
        <b-col xl="3"></b-col>
        <b-col xl="3">
            <img style="margin-left:30px;cursor: pointer;height: 50px;width: 50px;" :src="logo" @click="home()">
        </b-col>
        <b-col xl="3">
          <b-row align-h="end">
            <b-col>
              <router-link class="navButton" to="/pixelpaper">PIXEL</router-link>
            </b-col>
            <b-col>
              <router-link class="navButton" to="/zoomredesign">ZOOM</router-link>
            </b-col>
            <b-col>
              <router-link class="navButton" to="/catchcursor">CATCH</router-link>
            </b-col>
            <b-col>
              <router-link class="navButton" to="/about">ABOUT</router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row style="height: 90vh;" align-v="end">
        <b-col>
          <b-row align-h="end">
            <img style="cursor: pointer;height: 60px;width:60px;align-self: end"
                 :src="require('./assets/img/something/arrow.png')" @click="scrollToTop()">
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
        crProto: require('./assets/img/copyright/copyrightsProto.png'),
        crSnowphfee: require('./assets/img/copyright/CopyrightSnowphfee.png'),
        logo: require('./assets/img/logo.jpg'),
      }
    },
    methods: {
      home() {
        this.$router.push("/")
      },
      scrollToTop() {
        window.scrollTo(0,0);
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
