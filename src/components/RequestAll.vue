<template>
  <div class="RequestAll">
        <div class="content2">
        <div class="container">
        <div class="text-white shadow-sm  col-lotto d-flex flex-column pb-0">
        <div  aria-label="Basic example">
            <div class="top-menu mx-auto my-3">
          <ul >
          <li @click="status = 'a',setActive('li')" class="btn nav-link bg-card2" :class="{ active: isActive('li') }">
            <i class="fas fa-wallet"></i> ทั้งหมด
          </li>
          <li @click="status = 'b',setActive('li1')" class="btn nav-link bg-card2"  :class="{ active: isActive('li1')}">
            <i class="fas fa-folder-plus"></i> ฝาก
          </li>
          <li @click="status = 'c',setActive('li2')" class="btn nav-link bg-card2"  :class="{ active: isActive('li2') }">
            <i class="fas fa-folder-minus"></i> ถอน 
          </li>
        </ul>
            </div>
        </div>
        </div>
        <div v-if="status === 'a' " class="card mb-5 bg-card-red">
        <div class="bgwhitealpha text-secondary shadow-sm rounded p-2 col-lotto text-center">
            <span class="text-light">ไม่มีรายการ</span>
            </div>
        </div>
        <div v-if="status === 'b' " class="card mb-5 bg-card-red">
        <div class="bgwhitealpha text-secondary shadow-sm rounded p-2 col-lotto text-center">
            <span class="text-light">ไม่มีรายการ</span>
            </div>
        </div>
        <div v-if="status === 'c' " class="card mb-5 bg-card-red">
        <div class="bgwhitealpha text-secondary shadow-sm rounded p-2 col-lotto text-center">
            <span class="text-light">ไม่มีรายการ</span>
            </div>
        </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
name : 'RequestAll',
data() {
    return {
    status : 'a',
    activeItem: 'li',
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
}
</script>

<style scoped>
.card {
    min-height: 500px;
    background: #333;
    color: white;
}
.top-menu {
    /* background: red; */
    width: 100%;
}
.main-content{
  margin-bottom: 0;
}
.bg-card1 {
  /* background: linear-gradient(45deg,  rgb(0, 0, 0) 0%,rgba(56,0,200,1) 50%, rgb(0, 0, 0) 100%); */
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgba(0,7,71,1) 100%);
  color: white;
}
.table-secondary, .table-secondary>td, .table-secondary>th {
  background: none;
}
.silver-btn {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%,rgba(56,0,200,1) 50%, rgb(0, 0, 0) 100%);
}
.silver-btn1{
  background: black;
  border: none;
  color: white;
}
button .btn-block{
  color: white;
}
.bgwhitealpha {
  background: black;
  border: none;
}
.bgwhitealpha1 {
  background: black;
}
.bgwhitealpha2 {
  background: white;
}
.bgwhitealpha .btn{
  background: white;
}
.bgwhitealpha1 .btn{
  background: white;
}
.list-group .list-group-item{
  color: black;
  width: 100%
}
.RequestAll ul li:hover,.RequestAll ul li.active {
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgba(0,7,71,1) 100%);
  color: white;
}
/* li .btn .nav-link {
  background: red;
} */
.RequestAll li {
  color: white;
  height: 60px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: aliceblue;
}
.RequestAll .top-menu ul {
  list-style: none;
  padding: 0;
  margin: 0 auto!important;
  display: flex;
  justify-content: center;
  
}
.bg-card2 {
  background: black;
}
</style>