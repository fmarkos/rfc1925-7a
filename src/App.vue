<template>
  <div id="app">
    <div class="bottom-message">
      Select the parameters for your project:
    </div>
    <HelloWorld v-model="switch1">GOOD</HelloWorld>
    <HelloWorld v-model="switch2" color="#F5BF21">CHEAP</HelloWorld>
    <HelloWorld v-model="switch3" color="#253DB9">FAST</HelloWorld>
    <!-- <HelloWorld v-model="switch4" color="#F53731">I agree to save my soul<br><small>test</small></HelloWorld> -->

    <div class="bottom-message">
      <!-- {{ rand }}<br> -->
      Please remember: <a href="https://tools.ietf.org/html/rfc1925">rfc1925</a>
    </div>
  </div>
</template>

<script>

  import HelloWorld from './components/HelloWorld.vue'
  // https://codepen.io/incyclum/pen/MqXmzo

  // new Vue({
  export default {
    // el: "#app",
    name: 'app',
    components: {
      HelloWorld
    },
    data: function() {
      return {
        switch1: true,
        switch2: false,
        switch3: false,
        // switch4: false
        // lastswitch: Number,
        // rand: Number,
      }
    },
    watch: {
      switch1() {
        if(this.switch1 && this.switch2 && this.switch3) {
          let rrand = Math.floor(Math.random() * Math.floor(2))
          if(rrand == 1) {
            this.switch2 = false
          } else{
            this.switch3 = false
          }
        }
      },
      switch2() {
        if(this.switch1 && this.switch2 && this.switch3) {
          let rrand = Math.floor(Math.random() * Math.floor(2))
          if(rrand == 1) {
            this.switch1 = false
          } else{
            this.switch3 = false
          }
        }
      },
      switch3() {
        if(this.switch1 && this.switch2 && this.switch3) {
          let rrand = Math.floor(Math.random() * Math.floor(2))
          if(rrand == 1) {
            this.switch1 = false
          } else{
            this.switch2 = false
          }
        }
      },
    }
  }
  // );
</script>

<style>
/*  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
</style>
