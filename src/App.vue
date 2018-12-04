<template>
  <div id="app">
    <Navbar/>
    <router-view class="view my-5"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('validate')
  }

}
</script>

<style>
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  width: 90%;
}

@media screen and (min-width: 800px) {
  .view {
    width: 80%;
  }
}
</style>
