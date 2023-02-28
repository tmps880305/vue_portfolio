<template>
  <div id="app">
    <!--<b-container fluid style="height: 90vh;position: fixed;z-index: 10">-->
    <b-container fluid style="position: fixed;z-index: 10">
<!--      <b-row style="height: 80px;background-color: white;" align-v="center">-->
<!--        <b-col xl="3"></b-col>-->
<!--        <b-col xl="4">-->
<!--          <img style="margin-left:30px;cursor: pointer;height: 50px;width: 50px;" :src="logo" @click="home()">-->
<!--        </b-col>-->
<!--        <b-col xl="2">-->
<!--          <b-row align-h="end">-->
<!--            <b-col>-->
<!--              &lt;!&ndash;<router-link class="navButton" to="/">PROJECT</router-link>\&ndash;&gt;-->
<!--              <router-link class="navButton" :to="{name: 'Welcome', hash: '#project'}">PROJECT</router-link>-->
<!--            </b-col>-->
<!--            <b-col>-->
<!--              <a class="navButton" @click="gotoPage">RESUME</a>-->
<!--            </b-col>-->
<!--            &lt;!&ndash;<b-col>&ndash;&gt;-->
<!--            &lt;!&ndash;<router-link class="navButton" to="/catchcursor">CATCH</router-link>&ndash;&gt;-->
<!--            &lt;!&ndash;</b-col>&ndash;&gt;-->
<!--            <b-col>-->
<!--              <router-link class="navButton" to="/about">ABOUT</router-link>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--        </b-col>-->
<!--      </b-row>-->

      <!-- Navbar -->
      <div class="nav_container">
        <div class="navbar">
          <div class="logo_container">
            <a><img :src="logo" alt="logo" @click="home()"></a>
            <a href="mailto:jeniwang09@gmail.com">jeniwang09@gmail.com</a>
          </div>

          <nav>
            <ul>
              <li class="dropdown">
                <router-link :to="{name: 'Welcome', hash: '#project'}"><a>PROJECT</a></router-link>
              </li>
              <li class="dropdown">
                <a @click="gotoPage">RESUME</a>
              </li>
              <li class="dropdown">
                <router-link to="/about"><a>ABOUT</a></router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logo: require('./assets/img/self/logo.jpg'),
      backtotop: require('./assets/img/icons/back_to_top.png'),
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
      window.open("https://drive.google.com/file/d/1WGzdJTH2XVJ2jpC0J0nBBxejS8alp6Md/view?usp=share_link")
      // window.open(require('./assets/file/resume.pdf'),'_blank')
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

a {
  font-family: 'Nunito Sans', 'sans-serif';
  font-size: 16px;
  letter-spacing: 2px;
  color: #004977;
  cursor: pointer;
}

.nav_container {
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.navbar {
  width: 60%;
  height: 65px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.logo_container {
  height: 65px;
  display: flex;
  align-items: center;
}

.logo_container a {
  margin-left: 20px;
}

.navbar img {
  width: 50px;
  height: 50px;
  float: left;
}

.navbar nav {
  height: 65px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.navbar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar li {
  display: inline-block;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 2%;
  padding-bottom: 2%;
  height: 100%;
  cursor: pointer;
}

/*.navbar li:hover {*/
/*  background-color: #004977;*/
/*}*/

/*.navbar li a:hover {*/
/*  color: #FFFFFF;*/
/*}*/

.navbar a {
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}


@media only screen and (max-width: 1200px) {
  .navbar {
    width: 100vw;
    height: auto;
  }

  .navbar img {
    margin: 1.2vh;
    margin-left: 30px;
  }
}

@media only screen and (max-width: 900px) {
  .navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .navbar div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #drop-ul {
    width: 300px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}


</style>
