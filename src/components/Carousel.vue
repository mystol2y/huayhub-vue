<template>
<div class="container-fluid ">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/bannerNew.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/bannerNew1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/huay999price01.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/huay999price02.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style scoped>
 .container-fluid {
     padding: 0;
     margin: 20px auto;
     width: 70%;
     
 }
 .carousel-item img {
     margin: 0;
 }
   @media (min-width: 1024px) and (max-width: 1366px) {
  .container-fluid {
     padding: 0;
     margin: 0 auto;
     width: 100%;
     
 }
}
@media (min-width: 768px) and (max-width: 1023px) {
   .container-fluid {
     padding: 0;
     margin: 0 auto;
     width: 100%;
     
 }
}
@media (min-width: 250px) and (max-width: 767px) {
 .container-fluid {
     padding: 0;
     margin: 0 auto;
     width: 100%;
     
 }
}
</style>