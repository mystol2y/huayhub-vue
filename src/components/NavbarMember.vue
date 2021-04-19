<template>
  <div class="bg-nav">
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <router-link class="logo nav-link" to="/"
        ><img src="../assets/img/huay999logonew.png"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item d-flex align-items-center mx-auto">
            <span class="txt-money"><i class="fas fa-coins mr-2"></i>
            <span data-id="credit_balance" id="credit_balance">0.00 ฿</span>
            </span>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/indexmember">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tanghuay">Tanghuay</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/game">Game</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Log out</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarMember",
};
</script>

<style scoped>
.txt-money {
    background: white;
    color: black;
    border-radius: 10px;
    padding: 5px;
    font: 15px bold;
}
.bg-nav {
    background: black;
    width: 100%;
  }
.nav-link {
  color: white;
}
.logo img {
  width: 200px;
  height: auto;
}
</style>