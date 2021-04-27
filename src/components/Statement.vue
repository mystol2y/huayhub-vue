<template>
  <div class="Statement">
      <div class="top-menu mx-auto my-3">
          <ul>
          <li @click="status = 'a',setActive('li')" class="btn nav-link bg-card2" :class="{ active: isActive('li') }">
            <i class="fas fa-wallet"></i> วันนี้
          </li>
          <li @click="status = 'b',setActive('li1')" class="btn nav-link bg-card2"  :class="{ active: isActive('li1')}">
            <i class="fas fa-folder-plus"></i> ก่อนหน้า
          </li>
        </ul>
     </div>

     <div class="tab-content card mx-5" id="myTabContent">
        
        <div v-if="status === 'a' " id="tab1content" >
        <div class=" py-1  rounded col-lotto" >
        <small class="text-light">*คลิกที่รายการเพื่อดูรายละเอียดเพิ่มเติม</small>
        <div class="accordion bg-transparent" id="accordionCredit">
        </div>
        </div>
        </div>

        <div v-if="status === 'b' " id="tab2content" >
        <div class="mb-5 py-1  rounded col-lotto" >
        <small class="text-light">*คลิกที่รายการเพื่อดูรายละเอียดเพิ่มเติม - รายการย้อนหลังไม่เกิน 3 วัน</small>
        <div class="accordion bg-transparent" id="accordionCredithistory">
        </div>
        </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    name : 'Statement',
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
    background: #000;
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
.Statement ul li:hover,.Statement ul li.active {
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgba(0,7,71,1) 100%);
  color: white;
}
/* li .btn .nav-link {
  background: red;
} */
.Statement li {
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
.Statement .top-menu ul {
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