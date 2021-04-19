<template>
  <div class="footer">
      <div class="margintop">
          © {{ currenYear }} Copyright <img src="../assets/img/huay999logonew.png" alt=""> ALL RIGHTS RESERVED.
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currenYear: new Date().getFullYear()
        }
    },
}
</script>

<style scoped>
    .margintop {
        padding: 25px;
    }
    .footer {
        /* position: absolute;
        bottom: 0; */
        align-items: center;
        width: 100%;
        height: 80px;
        background: rgba(0, 0, 0, 1);
        font-size: 20px;
        color: white;
    }
    img {
    width: 110px;
    height: auto;
    margin: 0 10px;
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
  
}
@media (min-width: 768px) and (max-width: 1023px) {
   
}
@media (min-width: 250px) and (max-width: 767px) {
  .margintop {
        padding: 18px;
        font-size: 14px;
    }
    .footer {
        /* position: absolute;
        bottom: 0; */
        align-items: center;
        width: 100%;
        height: 80px;
        background: rgba(0, 0, 0, 1);
        font-size: 20px;
        color: white;
    }
}
</style>