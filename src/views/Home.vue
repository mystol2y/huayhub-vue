<template>

  <div class="home">
    <Navbar/>
    <Carousel/>
    <Menuhuay/>
    <!-- <News/> -->
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '@/components/Carousel.vue'
import Menuhuay from '@/components/Menuhuay.vue'
import Navbar from '@/components/Navbar.vue'
// import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Menuhuay,
    Navbar,
    // News
  },
  mounted() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://express.crm-flow.com/api/huay/yeekee",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>