<template>
  <div class="Signup">
    <Navbar />
    <div class="container card ">
      <div class="logologup">
        <img src="../assets/img/huay999logonew.png" alt="" />
      </div>
      <form class="p-form">
        <h4 class="text-center">สมัครสมาชิก</h4>
        <div class="form-group row text-left">
          <label
            for="inputfistname"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >ลงทะเบียนเบอร์โทรศัพท์</label
          >
          <div class="col-lg-12 col-md-12 col-sm-12">
            <input type="email" class="form-control" id="inputfistname" />
          </div>
        </div>
        <div class="form-group row text-left mt-3">
          <label
            for="inputlastname"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >กรุณากรอกอักษร 4 ตัวในภาพ</label
          >
          <div class="col-lg-12 col-md-12 col-sm-12">
            <input type="email" class="form-control" id="inputlastname" />
          </div>
        </div>
        <div class="form-group row mt-5">
          <div class="col-sm-12">
            <router-link class="btn btn-primary" to="/signup" tag="button"
              >สมัครสมาชิก</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Signup",
  components: {
    Navbar,
    // News
  },
};
</script>

<style scoped>
.card {
  margin: 50px auto;
  background-image: repeating-linear-gradient(
      358deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 27px,
      transparent 27px,
      transparent 29px
    ),
    repeating-linear-gradient(
      280deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 27px,
      transparent 27px,
      transparent 29px
    ),
    repeating-linear-gradient(
      337deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 27px,
      transparent 27px,
      transparent 29px
    ),
    linear-gradient(90deg, rgb(225, 16, 162), rgb(169, 105, 71));
  color: white;
}
.p-form {
  padding: 30px 100px;
}
.Signup {
  height: 100vh;
}
.logologup {
  margin: 100px auto;
}
.logologup img {
  width: 250px;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .Signup {
    height: 100vh;
  }
  .card {
    margin: 200px auto;
  }
  .logologup {
    margin: 50px auto;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .card {
    margin: 100px auto;
  }
  .logologup {
    margin: 50px auto;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .p-form {
    padding: 0;
  }
  .Signup {
    height: auto;
  }
  .card {
    margin: 50px auto;
  }
  .logologup {
    margin: 20px auto;
  }
  .logologup img {
    width: 150px;
    margin-bottom: 20px;
  }
}
</style>
