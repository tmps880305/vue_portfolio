<template>
  <div>
    <div class="myWcContainer">
      <div align="center">
        <div style="height: 100px"></div>
        <label style="background-color: white;font-family: 'Merienda','cursive';
            font-size: 64px;color: #004977;">Welcom to Snowphfee.com</label><br><br><br>
        <label style="font-family: Merienda,cursive;font-size: 32px;color: #0776A1;">I'm sorry that the site is still building.</label><br><br>
        <label style="font-family: Merienda,cursive;font-size: 32px;color: #0776A1;">Pictures and articles are temporary.</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  @import './../assets/css/welcome.css';
</style>
