<template>
  <div class="Withdraw">
    <div class="p-3 w-100  align-self-stretch" style="min-height: calc((100vh - 800px) - 90px);">
    <form action="#" enctype="application/x-www-form-urlencoded" id="withdraw" role="form" method="post" accept-charset="utf-8">
    <div class="bgwhitealpha text-secondary shadow-sm rounded p-2 xtarget col-lotto">
    <input type="hidden" name="token" value="562149ca110a2c484f4ccee6c7d03559">
    <input type="hidden" name="withdraw" value="1">
    <div class="form-row">
    <div class="col-12">
    <label><i class="fas fa-money-check"></i> เลือกบัญชีธนาคารของท่าน<br>
    <small><font color="red">*กรุณากดคลิกบัญชีด้านล่างตามที่ท่านต้องการ</font></small></label>
    </div>
    <div class="col-6 col-sm-6 col-md-3 col-lg-2 text-center">
    <input type="radio" name="bank2" id="" value="542" class="input-hidden" data-acc="" data-name="" data-bank="" checked=""><label for="" class="bank-radio"><img src="/assets/banks-logo/th/" alt="" class="icon-bank bnk48_004" style="background:;"><br><span></span><span class="badge badge-dark"></span></label></div> <div class="border-bottom w-100 my-2"></div>
    <div class="col-12 col-sm-12 col-md-6">
    <label><i class="fas fa-coins"></i> จำนวนเงินที่ถอนได้</label><br>
    <div class="alert bg-card-red py-2" style="margin: 0;">
    <h3 class="thb text-light text-center my-0 w-100" data-id="credit_balance">0.00 ฿</h3>
    </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6">
    <label><i class="fas fa-hand-holding-usd"></i> จำนวนเงินที่ต้องการถอน</label><br>
    <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text">฿</span>
    </div>
    <input type="tel" class="form-control form-control-lg money-withdraw" placeholder="ระบุเฉพาะตัวเลข" name="wmoney" onkeydown="if(event.key==='.'){event.preventDefault();}">
    <div class="input-group-append">
    <button class="btn silver-btn" style="box-shadow: none;" type="button" id="totalwithdraw">ทั้งหมด</button>
    </div>
    </div>
    <small class="text-secondary">ถอนเงินขั้นต่ำ 300 หรือ สูงสุด 500,000 บาท</small>
    </div>
    <div class="col-12 col-sm-12 col-md-12">
    <label class="mt-2"><i class="far fa-star"></i> หมายเหตุ</label>
    <textarea name="note" cols="30" rows="2" class="form-control"></textarea>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 text-center mx-auto mt-4 mb-2">
    <button class="btn silver-btn btn-block" type="submit" onclick="return check_withdraw()">ถอนเงิน</button>
    </div>
    </div>

    </div>
    <!-- <div class="ss p-2 rounded shadow-sm w-100 mb-5">
    <div class="row ">
    <div class="col pr-1">
    <button class="btn silver-btn btn-block" type="reset">ยกเลิก</button>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 text-center mx-auto">
    <button class="btn silver-btn btn-block" type="submit" onclick="return check_withdraw()">ถอนเงิน</button>
    </div>
    </div>
    </div> -->
    </form>
    </div>
</div>
</template>

<script>
export default {
name: 'Withdraw'
}
</script>

<style scoped>
.bgwhitealpha,.ss {
  background: black;
}
label {
  color: white;
}
</style>