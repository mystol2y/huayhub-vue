<template>
  <div class="Signup">
    <Navbar />
    <div class="container card ">
      <div class="logologup">
        <img src="../assets/img/huay999logonew.png" alt="" />
      </div>
      <h4 class="text-center">สมัครสมาชิก</h4>
      <form class="p-form">
        <h4 class="text-danger regis">
          <span class="badge badge-pill badge-warning text-center">STEP 1</span>
          ระบุเบอร์โทร
        </h4>
        <div class="form-group row text-left">
          <label
            for="inputfistname"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >ลงทะเบียนเบอร์โทรศัพท์</label
          >
          <div
            class="col-4 col-sm-4 col-md-2  d-flex align-items-center justify-content-md-end"
          >
            <span class="flag-icon flag-icon-th mr-1"></span> +66
          </div>
          <div class="col-4 col-lg-8 col-md-8 col-sm-8">
            <input
              type="email"
              class="form-control"
              placeholder="ใส่เบอร์โทรศัพท์"
              id="inputfistname"
            />
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 text-right text-sm-right text-md-left"
        >
          <small class="text-secondary"
            >กรุณาใส่หมายเลขโทรศัพท์เพื่อยืนยันตัวตน</small
          >
        </div>
        <div class="form-group row text-left mt-3">
          <label
            for="inputlastname"
            class="col-lg-12 col-md-12 col-sm-12 col-form-label"
            >ยืนยันตัวตน</label
          >
        </div>
        <div class="col-sm-10">
          <vue-recaptcha
            ref="recaptcha"
            @verify="onVerify"
            sitekey="6Le46LEaAAAAAHxTsPbUCL9nXZexytDmFIA06XZC"
          >
          </vue-recaptcha>
        </div>
        <div class="form-group row mt-5">
          <div class="col-sm-12">
            <router-link class="btn btn-primary" to="/signup" tag="button"
              >ถัดไป</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// var axios = require("axios");
import Navbar from "@/components/Navbar.vue";
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "Signup",
  data() {
    return {
      captcha: "",
      robot: false,
    };
  },
  components: {
    Navbar,
    VueRecaptcha,
    // News
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    submit: function() {
      if (this.robot) {
        alert("norobot");
      }
    },
    onVerify: function(response) {
      if (response) this.robot = true;
    },
    // async getCaptcha() {
    //   var config = {
    //     method: "get",
    //     url: "http://localhost:8000/api/register/",
    //     headers: {
    //       Authorization:
    //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3YXNhbiIsImlhdCI6MTYxODkxMjEwNjc3MH0.iD5ml2Bp_k15B1H86616O0M6lcyETj3qLA5ckjcf4yw",
    //     },
    //   };
    //   axios(config)
    //     .then(function(response) {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
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
