<template>

  <b-container fluid style="background-color: #AC7755">
    <b-row>
      <b-col>
        <div style="height: 120px;background-color: transparent"></div>
      </b-col>
    </b-row>
    <b-row class="justify-content-center" style="height: 400px;">
      <b-col xl="3">
        <div class="t-tl-1">
          <p>Thank you for your attention!</p>
          <p>Feel free to contact me!</p>
        </div>
      </b-col>
      <b-col xl="3">
        <b-row class="justify-content-center mt-3">
          <b-col cols="2">
            <img :src="emailPic" style="height: 40px;width: 40px">
          </b-col>
          <b-col cols="4" align-self="center">
              <a :href="email">jeniwang09@gmail.com</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
          <b-col cols="2">
            <img :src="linkedInPic" style="height: 40px;width: 40px">
          </b-col>
          <b-col cols="4" align-self="center">
              <a :href="linkedIn">LinkedIn</a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
  export default {
    name: 'Copyrights',
    data() {
      return {
        emailPic: require('../assets/img/icons/email_ios.png'),
        linkedInPic: require('../assets/img/icons/linkedin_white.png'),
        email: 'mailto: jeniwang09@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/jen-i-wang-8899a7221'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  @import './../assets/css/text.css';

  a:link {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 24px;
    letter-spacing: 2px;
    color: #000000;
  }


</style>
