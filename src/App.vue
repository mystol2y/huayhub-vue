<template>
  <div id="app">
    
    <!-- <Navbar/> -->
    
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
// import Navbar from '@/components/Navbar.vue'





export default {
  components:{
    Footer,
    // Navbar,



  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  width: 100%;
  background-image: radial-gradient(circle at top right, rgb(105, 135, 213) 0%, rgb(105, 135, 213) 14.286%,rgb(94, 121, 206) 14.286%, rgb(94, 121, 206) 28.572%,rgb(82, 107, 199) 28.572%, rgb(82, 107, 199) 42.858%,rgb(71, 94, 193) 42.858%, rgb(71, 94, 193) 57.144%,rgb(59, 80, 186) 57.144%, rgb(59, 80, 186) 71.43%,rgb(48, 66, 179) 71.43%, rgb(48, 66, 179) 85.716%,rgb(36, 52, 172) 85.716%, rgb(36, 52, 172) 100.002%);
}

#nav {
  padding: 30px;
  background-color: wheat;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
