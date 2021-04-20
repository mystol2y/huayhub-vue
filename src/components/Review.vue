<template>
  <div class="Review">
      <div class="p-2 w-100  main-content align-self-stretch " style="min-height: calc((100vh - 246px) - 90px);">
          <div class="shadow-sm p-2 xtarget col-lotto" id="menu">
          <div class="row">
          <div class="col-lg-6 col-sm-12 col-md-12 d-flex flex-column justify-content-center align-items-center" style="">
          <div class="p-2">
          <i style=" font: 37px bold;font-family: 'Prompt', sans-serif;">0.0</i><i class="fa fa-star fa-2x total_rating " style="padding: 3px"></i>
          </div>
          <div class="p-2">
          <label style="font-family: 'Prompt', sans-serif;" class="text-light">118 โหวต 1 ความคิดเห็น</label>
          </div>
          </div>
          <div class="col-lg-6 col-sm-12 col-md-12">
          <div class="col-sm-12 align-items-center">
          <div class="p-2">
          <div class="row">
          <div class="col d-flex justify-content-end">
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          </div>
          <div class="col">
          2 </div>
          </div>
          </div>
          <div class="p-2">
          <div class="row">
          <div class="col d-flex justify-content-end">
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          </div>
          <div class="col">
          0 </div>
          </div>
          </div>
          <div class="p-2">
          <div class="row">
          <div class="col d-flex justify-content-end">
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          </div>
          <div class="col">
          0 </div>
          </div>
          </div>
          <div class="p-2">
          <div class="row">
          <div class="col d-flex justify-content-end">
          <i class="fa fa-star fa-1x total_rating"></i>
          <i class="fa fa-star fa-1x total_rating"></i>
          </div>
          <div class="col">
          0 </div>
          </div>
          </div>
          <div class="p-2 ">
          <div class="row">
          <div class="col d-flex justify-content-end">
          <i class="fa fa-star fa-1x total_rating"></i>
          </div>
          <div class="col">
          0 </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          <div id="post_to_db" class="shadow-sm p-2 xtarget col-lotto d-flex flex-column justify-content-lg-start align-items-center " style="font-family: 'Prompt', sans-serif; ">
          <label style="font-size: 30px;color: black;margin-right: 20px; color: white">ให้คะแนน</label>
          <div align="left" class="centerreview" style=" margin: 0 auto;color:white; ">
          <i class="fa-2x post_rating far fa-star" data-index="1" style="color: white;"></i>
          <i class="fa-2x post_rating far fa-star" data-index="2" style="color: white;"></i>
          <i class="fa-2x post_rating far fa-star" data-index="3" style="color: white;"></i>
          <i class="fa-2x post_rating far fa-star" data-index="4" style="color: white;"></i>
          <i class="fa-2x post_rating far fa-star" data-index="5" style="color: white;"></i>
          </div>
          <textarea class="form-control m-3" rows="4" cols="50" name="comment" placeholder="แสดงความคิดเห็น" style="font-family: 'Prompt', sans-serif;"></textarea>
          <button id="post_btn" class="btn bg-card-tr ml-auto"> โพสต์</button>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto" id="coment_">
          <label class="d-flex flex-column justify-content-center align-items-center" id="com_header" style="font-family: 'Prompt', sans-serif;">ความคิดเห็น</label>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label class="pr-2">wasan1</label>
          <label><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2 เดือน ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label class="pr-2">yaitiger</label>
          <label><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i><i class="fa fa-star fa-1x" style="color:#FFD700"></i></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2 เดือน ก่อน </label>
          <div class="text-dark-1">
          เจ๋งมากฮะ 
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-2 coment">
          <label></label>
          <label></label>
          <label style="color: grey;font-family: 'Prompt', sans-serif;font-size: 14px"><i class="fal fa-clock"></i>
          โพสต์เมื่อ 2021 ปี ก่อน </label>
          <div>
          </div>
          </div>
          <div class=" justify-content-center overflow-auto" id="paging">
          <button class="btn btn-secondary page-btn" type="button" onclick="numclick(1,this)">1</button><button class="btn page-btn" type="button" onclick="numclick(2,this)">2</button><button class="btn page-btn" type="button" onclick="numclick(3,this)">3</button><button class="btn page-btn" type="button" onclick="numclick(4,this)">4</button><button class="btn page-btn" type="button" onclick="numclick(5,this)">5</button><button class="btn page-btn" type="button" onclick="numclick(6,this)">6</button><button class="btn page-btn" type="button" onclick="numclick(7,this)">7</button><button class="btn page-btn" type="button" onclick="numclick(8,this)">8</button><button class="btn page-btn" type="button" onclick="numclick(9,this)">9</button><button class="btn page-btn" type="button" onclick="numclick(10,this)">10</button><button class="btn page-btn" type="button" onclick="numclick(11,this)">11</button><button class="btn page-btn" type="button" onclick="numclick(12,this)">12</button><button class="btn page-btn" type="button" onclick="next(1,this)"><i class="fas fa-chevron-right"></i></button> </div>
          </div>
          </div>
              
  </div>
</template>

<script>
export default {
    name: 'Review'
}
</script>

<style scoped>
    .bgwhitealpha label {
        color: black!important;
    }
    .btn  {
        color: #fff;
        background: blueviolet;
    }
    #menu.col-lotto {
        background: none;
    }
    .page-btn {
        background: none;
        color: #000;
    }
    #post_to_db{
        background: black;
        width: 100%;
    }
    .text-dark-1{
        color: #000;
    }
</style>
