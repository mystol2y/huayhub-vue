<template>
  <div>
    <div class="d-flex bo">
      <div class="flex-column wi card">
        <div class="logohuay">
        <img src="../assets/img/huay999logonew.png" alt="">
        </div>
        <ul>
          <li @click="status = 'a',setActive('li')" class="btn nav-link" :class="{ active: isActive('li') }">
            <i class="bi bi-award"></i> หวยไทย & หวยหุ้นไทย
          </li>
          <li @click="status = 'b',setActive('li1')" class="btn nav-link"  :class="{ active: isActive('li1')}">
            <i class="bi bi-award"></i> หวยหุ้นต่างประเทศ
          </li>
          <li @click="status = 'c',setActive('li2')" class="btn nav-link"  :class="{ active: isActive('li2') }">
            <i class="bi bi-award"></i> Profile
          </li>
          <li @click="status = 'd',setActive('li3')" class="btn nav-link"  :class="{ active: isActive('li3') }">
            <i class="bi bi-award"></i> รีวิว
          </li>
        </ul>
      </div>
      <div class="flex-column card wi2 ">
        <div   v-if="status === 'a' ">
          <h4><i class="bi bi-award"></i> หวยไทย & หวยหุ้นไทย</h4>
          <div class="row pb-5 px-4">
          <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>
            </div>
        </div>

        <div v-if="status === 'b'">
          <h4><i class="bi bi-award"></i> หวยหุ้นต่างประเทศ</h4>
          <div class="row pb-5 px-4">
          <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-1 ">
            <a href="/member/lottery/government/63">
            <div class="boxhuay">
            <div class="head-huay goldpattern align-items-stretch">
            <div class="headflag">
            <span class="flag-icon flag-icon-th fullflag"></span>
            </div>
            <div class="headtxt flex-fill">
            <div class="pt-1 pr-1">หวยรัฐบาล</div>
            <div class="subhead-huay">
            ปิดรับ 15:20:00 </div>
            </div>
            </div>
            <div class="body-huay">
            <span class="countdown style colorDefinition size_lg" id="g63" data-finaldate="1615882800000">3<small> วัน </small>22<small>:</small>50<small>:</small>40</span> </div>
            </div>
            </a>
            </div>
            </div>
        </div>

        <div  v-if="status === 'c'" class="bg-wi3">
         
          <h4><i class="bi bi-award"></i>Profile</h4>
<!--           
          <div class="pic">
            <img src="../../src/assets/123.png" >
          </div>
          <div class="row">
            <div class="col-6">
              Name : Wasan  wasna
            </div>
            
          </div>
           -->

          <form action="/member/api/updateprofile" enctype="multipart/form-data" method="post" accept-charset="utf-8" class="text-left">
            <input type="hidden" name="updateprofile" value="1">
            <div class="bgwhitealpha shadow-sm rounded p-2 h-100 xtarget mb-5">
            <div class="row profilesetting">
            <div class="col-12">
            <h6 class="text-center"><i class="fas fa-user-circle "></i> จัดการโปรไฟล์</h6>
            <div class="form-group text-center">
            <label for="image" class="button-upload-file">
            <input name="image" id="image" type="file" class="custom-file-input" accept="image/jpeg,image/jpg,image/png">
            <div class="preview">
            <img id="photos" src="../../src/assets/img/logo.png" width="80" onerror="this.src='/assets/images/defaultPerson.jpeg'">
            </div>
            <span class="icon">
            <i class="fas fa-camera"></i>
            </span>
            </label>
            </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12">
            <b>รหัสผู้ใช้งาน</b>
            <small>USER ID</small>
            <input type="text" class="form-control" value="LK210204121001" readonly="">
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <b>ชื่อผู้ใช้งาน</b>
            <small>first name</small>
            <input type="text" class="form-control" value="wasan1" readonly="">
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <b>นามสกุล</b>
            <small>last name</small>
            <input type="text" class="form-control" value="wasan" readonly="">
            </div>
            <div class="col-12 col-sm-12 col-md-6">
            <b>ชื่อผู้ใช้งาน</b>
            <small>username login</small>
            <input type="text" class="form-control" value="wasan" readonly="">
            </div>

            <div class="col-12 col-sm-12 col-md-4">
            <b>วัน/เดือน/ปี เกิด</b>
            <div class="form-row">
            <div class="form-group col-4">
            <select id="day" name="day" class="form-control" aria-required="true" aria-invalid="false" required="">
            <option value="">วัน</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>

            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            </select></div>
            <div class="form-group col-4">
            <select id="month" name="month" class="form-control" aria-required="true" aria-invalid="false" required="">
            <option value="">เดือน</option>
            <option value="01">มกราคม</option>
            <option value="02">กุมภาพันธ์</option>
            <option value="03">มีนาคม</option>
            <option value="04">เมษายน</option>
            <option value="05">พฤษภาคม</option>
            <option value="06">มิถุนายน</option>
            <option value="07">กรกฎาคม</option>
            <option value="08">สิงหาคม</option>
            <option value="09">กันยายน</option>
            <option value="10">ตุลาคม</option>
            <option value="11">พฤศจิกายน</option>
            <option value="12">ธันวาคม</option>
            </select></div>
            <div class="form-group col-4">
            <select id="year" name="year" class="form-control" aria-required="true" aria-invalid="false" required="">
            <option value="">ปี</option>
            <option value="2562">2562</option>
            <option value="2561">2561</option>
            <option value="2560">2560</option>
            <option value="2559">2559</option>
            <option value="2558">2558</option>
            <option value="2557">2557</option>
            <option value="2556">2556</option>
            <option value="2555">2555</option>
            <option value="2554">2554</option>
            <option value="2553">2553</option>
            <option value="2552">2552</option>
            <option value="2551">2551</option>
            <option value="2550">2550</option>
            <option value="2549">2549</option>
            <option value="2548">2548</option>
            <option value="2547">2547</option>
            <option value="2546">2546</option>
            <option value="2545">2545</option>
            <option value="2544">2544</option>
            <option value="2543">2543</option>
            <option value="2542">2542</option>
            <option value="2541">2541</option>
            <option value="2540">2540</option>
            <option value="2539">2539</option>
            <option value="2538">2538</option>
            <option value="2537">2537</option>
            <option value="2536">2536</option>
            <option value="2535">2535</option>
            <option value="2534">2534</option>
            <option value="2533">2533</option>
            <option value="2532">2532</option>
            <option value="2531">2531</option>
            <option value="2530">2530</option>
            <option value="2529">2529</option>
            <option value="2528">2528</option>
            <option value="2527">2527</option>
            <option value="2526">2526</option>
            <option value="2525">2525</option>
            <option value="2524">2524</option>
            <option value="2523">2523</option>
            <option value="2522">2522</option>
            <option value="2521">2521</option>
            <option value="2520">2520</option>
            <option value="2519">2519</option>
            <option value="2518">2518</option>
            <option value="2517">2517</option>
            <option value="2516">2516</option>
            <option value="2515">2515</option>
            <option value="2514">2514</option>
            <option value="2513">2513</option>
            <option value="2512">2512</option>
            <option value="2511">2511</option>
            <option value="2510">2510</option>
            <option value="2509">2509</option>
            <option value="2508">2508</option>
            <option value="2507">2507</option>
            <option value="2506">2506</option>
            <option value="2505">2505</option>
            <option value="2504">2504</option>
            <option value="2503">2503</option>
            <option value="2502">2502</option>
            <option value="2501">2501</option>
            <option value="2500">2500</option>
            <option value="2499">2499</option>
            <option value="2498">2498</option>
            <option value="2497">2497</option>
            <option value="2496">2496</option>
            <option value="2495">2495</option>
            <option value="2494">2494</option>
            <option value="2493">2493</option>
            <option value="2492">2492</option>
            <option value="2491">2491</option>
            <option value="2490">2490</option>
            <option value="2489">2489</option>
            <option value="2488">2488</option>
            <option value="2487">2487</option>
            <option value="2486">2486</option>
            <option value="2485">2485</option>
            <option value="2484">2484</option>
            <option value="2483">2483</option>
            <option value="2482">2482</option>
            <option value="2481">2481</option>
            <option value="2480">2480</option>
            <option value="2479">2479</option>
            <option value="2478">2478</option>
            <option value="2477">2477</option>
            <option value="2476">2476</option>
            <option value="2475">2475</option>
            <option value="2474">2474</option>
            <option value="2473">2473</option>
            <option value="2472">2472</option>
            <option value="2471">2471</option>
            </select></div>
            </div>
            </div>

            <div class="col-12 col-sm-12 col-md-4">
            <b>อีเมล์</b>
            <input type="email" name="email" id="email" class="form-control" value="" required="" oninput="allowbt()" autocomplete="off">
            </div>
            <div class="col-12 col-sm-12 col-md-4">
            <b>เบอร์โทรศัพท์</b>
            <input type="tel" class="form-control" value="0999999997" readonly="">
            </div>

            <div class="w-100 m-3 border-bottom"></div>
            <div class="col-12">
            <h6><i class="fas fa-user-circle"></i> จัดการรหัสผ่าน</h6>
            </div>
            <div class="col-12" id="oldpass">
            <b>รหัสผ่านเดิม</b>
            <input type="password" name="oldpass_lotto" id="oldpass_val" class="form-control" oninput="filterinput(this,'oldpass')" autocomplete="off">
            <span id="oldpass_text"></span>
            </div>
            <div class="col-12" id="newpass">
            <b>รหัสผ่านใหม่</b>
            <input type="password" name="newpass" id="newpass_val" class="form-control" oninput="filterinput(this,'newpass')" autocomplete="password">
            <span id="newpass_text"></span>
            </div>
            <div class="col-12" id="renewpass">
            <b>ยืนยันรหัสผ่านใหม่</b>
            <input type="password" name="renewpass" id="renewpass_val" class="form-control" oninput="filterinput(this,'renewpass')" autocomplete="password">
            <span id="renewpass_text"></span>
            </div>
            <div class="w-100 m-3 border-bottom"></div>
            <div class="col-12">
            <button class="btn bg-card-tr btn-block text-light" type="submit" id="profilesubmit" disabled="">
            <i class="fas fa-save"></i> บันทึก
            </button>
            </div>
            </div>

            </div>
            </form>

        </div>

        <div  v-if="status === 'd'" class="bg-card1 m-0" >
          <h4><i class="bi bi-award "></i>ราคา</h4>
          <Review/>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
export default {
  name: "Menuhuay",
  data() {
    return {
    status : 'a',
    activeItem: 'li',
    }
  },mounted() {
    
  },
  components: {
         Review,
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
  
};
</script>

<style scoped>
 .bg-wi3 {
  background: white;
  height: 100%;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
}
.bg-wi3 .pic{
  width: 150px;
  margin: 50px auto;
}
.bg-wi3 .pic img {
  width: 100%;
  height: 100%;
}
.headtxt {
    text-align: right;
    /* text-shadow: rgb(0 0 0 / 90%) 0px 0px 3px; */
    color: rgb(255, 255, 255);
    font-family: SukhumvitReg;
    /* text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.958851px 0px, rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.141474px 1.99499px 0px, rgb(0 0 0) -0.832294px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px, rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.701566px 0px, rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.421592px -1.95506px 0px, rgb(0 0 0) 0.567324px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px, rgb(0 0 0) 1.92034px -0.558831px 0px; */
    letter-spacing: 0.04em;
}
.headflag {
    width: 50px;
    overflow: hidden;
    align-self: stretch;
    /* border-right: 1px solid rgba(0, 0, 0, 0.5); */
}
.headflag>span {
    /* display: flex; */
    border-radius: 50%;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 0;
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /* margin-left: 50px; */
}
.fullflag {
    background-size: cover;
    height: 100%;
    width: 100%;
}
.flag-icon {
    width: 42px !important;
    height: 42px;
    border-radius: 10px;
    margin-right: 10px;
}
.flag-icon {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.33333333em;
    line-height: 1em;
}
.boxhuay {
    color: white;
    box-shadow: 0 6px 6px black;
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
}
.head-huay {
    /* background: rgb(146,0,0);
    background: linear-gradient(90deg, rgba(146,0,0,1) 0%, rgba(233,0,0,1) 100%); */
    background: linear-gradient(45deg,  rgb(0, 0, 0) 0%,rgba(56,0,200,1) 50%, rgb(0, 0, 0) 100%);
    width: 100%;
    height: 100%;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    text-shadow: rgb(0 0 0 / 0%) 1px 1px 2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
.body-huay {
    width: 100%;
    display: block;
    background: #252525;
    text-align: right;
    color: white;
    padding: 8px 5px;
    font-family: 'Gugi', cursive , SukhumvitReg;
    font-size: 20px;
}
.bg-card1 {
    background: linear-gradient(90deg, rgba(146,0,0,1) 0%, rgba(204,1,1,1) 100%);
    color: white;
    box-shadow: 0 6px 6px black;
}
.table-pricing {
  margin: 0 auto ;
  width: 100%;
}
.table-pricing th,
.table-pricing td{
  text-align: left;
}
.bg-card-tr{
  background: linear-gradient(45deg,  rgb(0, 0, 0) 0%,rgba(56,0,200,1) 50%, rgb(0, 0, 0) 100%);
}
.bg-wi2 {
  background: white;
  height: 100%;
  border-radius: 20px;
}
.bg-card1 {
  background: linear-gradient(45deg,  rgb(0, 0, 0) 0%,rgba(56,0,200,1) 50%, rgb(0, 0, 0) 100%);
  color: white;
  margin-top: 20px;
  border-radius: 20px;
}
h4 {
  /* margin-top: 20px; */
  color: white;
  background-image: repeating-linear-gradient(358deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(280deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(337deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),linear-gradient(90deg, rgb(225, 16, 162),rgb(169, 105, 71));
  /* background: linear-gradient(90deg, rgba(0,7,71,1)  0%, #0300ff 50%,  rgba(0,7,71,1) 100%); */
  padding: 20px;
  border-radius: 20px;
  border: none;
   border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.logohuay img {
  width: 150px;
  margin: 20px;
}
.bo {
  margin: 20px auto;
  width: 80%;
  height: auto;
 
}
.row {
  margin: 0;
}
.wi {
  width: 20%;
  height: auto;
  background-image: repeating-linear-gradient(358deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(280deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),repeating-linear-gradient(337deg, rgb(0,0,0) 0px, rgb(0,0,0) 27px,transparent 27px, transparent 29px),linear-gradient(90deg, rgb(225, 16, 162),rgb(169, 105, 71));
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
 
}
.wi2 {
  width: 100%;
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgb(78, 96, 252) 100%);
  height: auto;
  /* overflow: scroll; */
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
li.btn.nav-link {
  text-align: left;
}
li:hover {
  background: orangered;
  color: white;
}
li:active {
  background: red;
  color: white;
}

li:target {
  background: red;
  color: white;
}
.wi ul li:hover,.wi ul li.active {
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgba(0,7,71,1) 100%);
  color: white;
}
.wi li:hover {
  background: orangered;
  color: white;
}
.wi li:active {
  background: red;
  color: white;
}

.wi li:target {
  background: red;
  color: white;
}
.wi li {
  color: white;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.col-lg-3,
.col-sm-12,
.col-md-12 {
  padding: 0;
  margin: 0;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  .bo {
    width: 100%;
    display: block!important;
  }
  .wi {
    width: 100%;
    border-radius: 0;
  }
  .wi2 {
    width: 100%;
    border-radius: 0!important;
  }
  h4 {
    border-radius: 0!important;
  }
  ul {
    display: flex;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
   .bo {
    width: 100%;
    display: block!important;
  }
  .wi {
    width: 100%;
    border-radius: 0;
  }
  .wi2 {
    width: 100%;
    border-radius: 0!important;
  }
  h4 {
    border-radius: 0!important;
  }
  ul {
    display: block;
  }
}
@media (min-width: 250px) and (max-width: 767px) {
  .bo {
    width: 100%;
    display: block!important;
  }
  .wi {
    width: 100%;
    border-radius: 0;
  }
  .wi2 {
    width: 100%;
    border-radius: 0!important;
  }
  h4 {
    border-radius: 0!important;
  }
  ul {
    display: block;
  }
  li {
    font-size: 12px;
  }
}
</style>