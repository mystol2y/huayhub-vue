<template>
  <div class="Signin">
    <Navbar />
    <div class="container card m-card">
      <div class="logologin">
        <img src="../assets/img/huay999logonew.png" alt="" />
      </div>
      <form class="p-form">
        <div class="form-group row text-left">
          <label
            for="inputEmail3"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >Email</label
          >
          <div class="col-lg-12 col-md-12 col-sm-12">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="form-group row mt-3 text-left">
          <label
            for="inputPassword3"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >Password</label
          >
          <div class="col-lg-12 col-md-12 col-sm-12">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <fieldset class="form-group row mt-3">
          <legend class="col-form-label col-sm-12 float-sm-left pt-0"></legend>
          <div class="form-group row">
            <div class="col-lg-12 col-md-12 col-sm-12 pl-input">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  จดจำรหัสผ่าน
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-12">
            <router-link class="btn btn-primary" to="/indexmember" tag="button"
              >เข้าสู่ระบบ</router-link
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
  name: "Signin",
  data() {
    return {
      status: true,
    };
  },
  components: {
    Navbar,
    // News
  },
};
</script>
<style scoped>
/* .Signin {
   min-height: 94vh;
 }
 .m-card {
   position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 50%;
  background-image: repeating-linear-gradient(358deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(280deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(337deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),linear-gradient(90deg, rgb(225, 16, 162),rgb(169, 105, 71));
  float: left;
  color: white;
 }
 .p-form{
   padding: 30px 100px;
 }
 .logologin {
   margin: 50px auto;
 }
 .logologin img{
   width: 250px;
 }
 @media (min-width: 1024px) and (max-width: 1366px) {
  
}
@media (min-width: 768px) and (max-width: 1023px) {
  
}
@media (min-width: 250px) and (max-width: 767px) {
  
} */
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
.Signin {
  height: 93vh;
}
.logologin {
  margin: 100px auto;
}
.logologin img {
  width: 250px;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .Signin {
    height: 95vh;
  }
  .card {
    margin: 200px auto;
  }
  .logologin {
    margin: 50px auto;
  }
  .pl-input {
    margin-left: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .card {
    margin: 200px auto;
  }
  .logologin {
    margin: 50px auto;
  }
  .pl-input {
    margin-left: 20px;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .p-form {
    padding: 0;
  }
  .Signin {
    height: auto;
  }
  .card {
    margin: 140px auto;
  }
  .logologin {
    margin: 20px auto;
  }
  .logologin img {
    width: 150px;
    margin-bottom: 20px;
  }
  /* .row {
   margin: 0;
 } */
  .pl-input {
    margin-left: 20px;
  }
}
</style>
