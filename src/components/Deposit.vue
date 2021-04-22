<template>
  <div class="Deposit">
      <div class="bg-card1 text-secondary shadow-sm rounded d-flex align-items-center p-1 mb-5 xtarget col-lotto" style="min-height: calc((100vh - 800px) - 90px);">
        <div class="row w-100 p-0 m-3 d-flex justify-content-center">
        <div id="destep1" class="row col-12 col-sm-12 col-md-6 py-2 px-0 my-1 rounded bg-card-red" style="margin: 0;">
        <div class="col-12 px-1">
        <h6 class="font-weight-normal text-light "><span class="badge badge-pill badge-danger font-weight-normal">STEP 1</span>
        บัญชีธนาคาร Huayhub</h6>
        </div>
        <div class="col-12">
        <label id="labelselectbank" class="text-light"><i class="fas fa-university"></i>
        เลือกบัญชีธนาคารของเว็บ</label>
        <div class="border rounded mb-2" id="onbankselect">
            <div class="input-group">
            <select class="custom-select" id="inputGroupSelect04" v-model="choice">
                <option value="" selected>กรุณาเลือกธนาคาร</option>
                <option value="Applicant" data-content="" data-acc="508410XXXX" data-bank="ธ.ไทยพาณิชย์" data-color="#4e2e7f"  id="scb">
                        <img src="../assets/img/bannerNew.png" >SCB
                </option>
            </select>
            </div>
        <!-- <div class="dropdown bootstrap-select form-control">
        <select class="selectpicker form-control" data-container="body" data-size="5" id="bankselect" name="svbank" tabindex="-98">
        <option value="blank">กรุณาเลือกธนาคาร</option>
        <option data-content="<img style='background:#4e2e7f;padding:2px;border-radius:2px;width:22px;' src='/assets/banks-logo/th/scb.svg'>
                                                        <small class='badge badge-light text-dark text-uppercase'>scb</small> <span>ธ.ไทยพาณิชย์</span>" data-acc="508410XXXX" data-bank="ธ.ไทยพาณิชย์" data-color="#4e2e7f" value="scb-2-ภาณุวัฒน์ ขวัญจุล-5084100521" id="scb">SCB
        </option>
        </select>
        <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="bankselect" title="scb ธ.ไทยพาณิชย์" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"><img style="background:#4e2e7f;padding:2px;border-radius:2px;width:22px;" src="/assets/banks-logo/th/scb.svg">
        <small class="badge badge-light text-dark text-uppercase">scb</small> <span>ธ.ไทยพาณิชย์</span></div></div> </div></button></div> -->
        </div>
        </div>
        <div v-if="choice == 'Applicant'" class="col-12 py-1">
        <div class="border rounded bg-light">
        <div class="row">
        <div class="col-12">
        <div class="row py-2 px-3 justify-content-center">
        <div class="col-3 col-sm-3 col-md-4 col-lg-3 pt-2">
            
        <img src="//huayhub.vip/assets/banks-logo/th/scb.svg" alt="" width="100%" id="bank2" class="detail-bank rounded icon-scb">
        </div>
        <div class="col-9 col-sm-9 col-md-8 col-lg-5 p-2 d-flex flex-column justify-content-center align-items-start">
        <h6 class="numacc" id="acc2" style="color: rgb(78, 46, 127);">508410XXXX</h6>
        <span class="badge badge-pill badge-secondary font-weight-normal" id="nameacclang">ชื่อบัญชี</span>

        <span id="name2"></span>
        <input type="hidden" value="xxxxxxxxxx" id="accdeposit">
        </div>
        <button class="btn btn-light btn-sm border border-secondary copyacc mr-3" type="button" data-clipboard-text="508410XXXX" style="">
        <i class="fas fa-copy"></i> COPY
        </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div class="w-100"></div>

        <div v-if="choice == 'Applicant'" id="destep2" class="row col-12 col-sm-12 col-md-6 py-2 px-0 my-1 border rounded bg-card2" style="">
        <div class="col-12 px-1">
        <h6 class="font-weight-normal"><span class="badge badge-pill badge-success font-weight-normal">STEP 2</span>
        ระบบเติมเงินอัตโนมัติ</h6>
        </div>
        <div class="col-12" id="msgstep2">
        <div class="alert alert-info">เมือทำการโอนเงินเสร็จแล้วกรุณา <b>รอสักครู่</b>
        ระบบจำทำการเพิ่มเครดิตให้ท่านไม่เกิน 1 นาที
        </div>
        <div class="alert alert-danger border border-danger">
        โอนขั้นต่ำ "ครั้งละ 1 บาท" ถ้าโอนต่ำกว่า 1 บาทเงินของท่านจะไม่เข้าระบบ
        และไม่สามารถคืนได้
        </div>
        <div class="alert alert-warning">คำเตือน! กรุณาใช้บัญชีที่ท่านผูกกับ Huayhub
        ในการโอนเงินเท่านั้น
        </div>

        </div>
        </div>
        <div class="w-100"></div>
        <div v-if="choice == 'Applicant'" id="destep3" class="row col-12 col-sm-12 col-md-6 py-2 px-0 my-1 border rounded" style="">
        <div class="col-12 px-1">
        <h6 class="font-weight-normal"><span class="badge badge-pill badge-success font-weight-normal">STEP 3</span>
        แจ้งรายละเอียดการโอนเงิน</h6>
        </div>
        <div class="col-12 text-center">

        <p class="alert alert-danger text-center">กรุณา<b>โอนเงิน</b>เข้าบัญชีด้านบน <b>ภายใน
        5 นาที</b></p>
        </div>
        <div class="col-12">
        <div class="row">
        <div class="col-12">
        <label><i class="fas fa-university"></i> เลือกบัญชีธนาคารของลูกค้า</label>
        <div class="border rounded mb-2" id="bordermybank">
            <select class="custom-select" id="inputGroupSelect04" >
                <option value="" selected>กรุณาเลือกธนาคาร</option>
                <option value="Applicant" data-content="" data-acc="508410XXXX" data-bank="ธ.ไทยพาณิชย์" data-color="#4e2e7f"  id="scb">
                        <img src="../assets/img/bannerNew.png" >SCB
                </option>
            </select>
        <!-- <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" data-container="body" data-size="5" id="mybankselect" name="mybank" tabindex="-98">
        <option value="blank">กรุณาเลือกธนาคาร</option>
        <option data-content="<img style='background:;padding:2px;border-radius:2px;width:22px;' src='/assets/banks-logo/th/'>
                                                        <small class='badge badge-light text-dark text-uppercase'></small> <span></span>" data-acc="" data-name="" data-bank="" data-color="#138f2d" value="---542" id="kbank"></option>
        </select><button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" data-id="mybankselect" title="กรุณาเลือกธนาคาร"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">กรุณาเลือกธนาคาร</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div></div> -->
        </div>
        </div>
        <div class="col-12">
        <label><i class="fas fa-money-check-alt"></i> เลือกช่องทางการโอนเงิน
        </label>
        <div class="border rounded mb-2" id="borderbankway">
            <select class="custom-select" id="inputGroupSelect04" >
                <option value=" " selected>กรุณาเลือกช่องทางธุรกรรม</option>
                <option value="atm" data-subtext="โอนจากตู้กดเงินสด">ATM
                </option>
                <option value="cdm" data-subtext="ฝากผ่านตู้ฝากเงินสด">CDM
                </option>
                <option value="cashier" data-subtext="ฝากเงินผ่านเคาท์เตอร์ธนาคาร">
                Counter Cashier
                </option>
                <option value="ibanking" data-subtext="โอนเงินผ่านหน้าเว็บไซต์">
                Internet Banking
                </option>
                <option value="mbanking" data-subtext="โอนเงินผ่านแอพมือถือ">
                Mobile Banking
                </option>
            </select>
        <!-- <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" data-container="body" data-size="6" name="channel" tabindex="-98">
        <option value="">กรุณาเลือกช่องทางธุรกรรม</option>
        <option data-subtext="โอนจากตู้กดเงินสด" value="atm">ATM
        </option>
        <option data-subtext="ฝากผ่านตู้ฝากเงินสด" value="cdm">CDM
        </option>
        <option data-subtext="ฝากเงินผ่านเคาท์เตอร์ธนาคาร" value="cashier">
        Counter Cashier
        </option>
        <option data-subtext="โอนเงินผ่านหน้าเว็บไซต์" value="ibanking">
        Internet Banking
        </option>
        <option data-subtext="โอนเงินผ่านแอพมือถือ" value="mbanking">
        Mobile Banking
        </option>
        </select><button type="button" class="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="button" title="กรุณาเลือกช่องทางธุรกรรม"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">กรุณาเลือกช่องทางธุรกรรม</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div></div> -->
        </div>
        </div>
        <div class="col-12">
        <label><i class="fas fa-money-bill"></i> จำนวนเงินที่โอน</label>
        <input type="tel" class="form-control moneyinput" id="CurrencyInput" name="money" oninput="spiderman(this);" maxlength="10">
        </div>
        <div class="col-12">
        <label class="mt-2"><i class="fas fa-calendar-alt"></i> วันที่โอน </label>
        <div class="input-group date" id="datetimepicker4" data-target-input="nearest" data-toggle="datetimepicker">
        <input type="text" name="date" class="form-control datetimepicker-input mb-0" data-target="#datetimepicker4" data-container="body" style="background-color : #ffffff;" readonly="">
        <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
        <button class="btn btn-outline-secondary" type="button"><i class="fas fa-calendar my-0"></i></button>
        </div>
        </div>
        </div>
        <div class="col-12">
        <label class="mt-2"><i class="far fa-clock"></i> เวลาที่โอน <a href="#" class="btn--red btn btn-warning btn-sm mr-1 px-1 py-0" data-toggle="modal" data-target="#ex-deposit">ตัวอย่าง:
        การแจ้งฝาก คลิก <i class="fas fa-hand-pointer"></i></a>
        </label>
        <div class="input-group date" id="datetimepicker3" data-target-input="nearest" data-toggle="datetimepicker">
        <input type="text" name="time" id="time" class="form-control datetimepicker-input mb-0" data-target="#datetimepicker3" data-container="body" style="background-color : #ffffff;" readonly="">
        <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
        <button class="btn btn-outline-secondary" type="button"><i class="fas fa-clock"></i></button>
        </div>
        </div>
        </div>
        <div class="col-12">
        <small class="text-danger mt-2" style="display: inline-block;line-height: 1.2;">
        * กรุณากรอก วัน-เวลา ในการโอนให้ตรงกับ Slip
        ระบบจะเติมเครดิตให้คุณอัตโนมัติ </small>
        <br>
        <label class="mt-2"><i class="far fa-star"></i> หมายเหตุ</label>
        <textarea name="note" id="note" cols="30" rows="2" class="form-control"></textarea>
        </div>
        <div class="col-12 mb-2">
        <small>กรุณาตรวจสอบข้อมูลของท่านให้ถูกต้อง และกดปุ่ม <span class="text-success">ยืนยันการแจ้งโอนเงิน</span></small>
        </div>
        </div>
        <button class="btn btn-success btn-block btn-larg confirmdeposit">
        ยืนยันการแจ้งโอนเงิน
        </button>
        </div>
        </div>
        </div>

        </div>
  </div>
</template>

<script>
export default {
    name: 'Deposit',
    data() {
    return {
    choice: 'a'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.bg-card1 {
    background: none;
}
.bg-card2{
    background: black;
}
.copyacc{
    width: 100px;
    height: 50px;
    margin: auto 0;
}
.bg-card-red {
    background: black;
    border-style: solid ;
    border-width: 1px;
    border-color: white;
}
label,h6 {
    color: white;
}
#destep3{
    background: black;
}
</style>