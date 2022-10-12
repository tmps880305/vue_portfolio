<template>

  <b-container fluid>
    <b-row class="justify-content-center" style="height: 400px;background-color: #AC7755">
      <b-col xl="3">
        <div>
          <p>Thank you for your attention!</p>
          <p>Feel free to contact me!</p>
        </div>
      </b-col>
      <b-col xl="3">
        <div>
          <img :src="emailPic" style="height: 40px;width: 40px">
          <img :src="linkedInPic" style="height: 40px;width: 40px">
        </div>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
  export default {
    name: 'Copyrights',
    data() {
      return {
        emailPic: require('../assets/img/something/email_ios.png'),
        linkedInPic: require('../assets/img/something/linkedin_color.png'),
      }
    },
    methods: {
      home() {
        this.$router.push("/")
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped>

</style>
