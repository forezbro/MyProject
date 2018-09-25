<template>
  <div id="app">
    <!-- <Footer></Footer> -->
			<Topback></Topback> 
      <router-view></router-view>
  </div>
</template>

<script>
// import Footer from './components/base/Footer'
import Topback from './components/Topback'
export default {
  name: 'App',
  components: {
    // Footer
		Topback
  }
}
</script>

<style>
#app {
  overflow: hidden;
 
}

</style>
