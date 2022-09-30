<template>
  <div>
    <div class="myAbcontainer">
      <a>About</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goToArti(val) {
        alert(val)
      },
    }
  }
</script>
<style scoped>
  @import './../assets/css/about.css';
</style>
