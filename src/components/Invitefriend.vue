<template>
  <div class="Invitefriend">
      <div class="p-2 w-100 bg-light main-content align-self-stretch bg-card1 " style="height: auto; min-height: calc((100vh - 246px) - 90px);">
            <div class="top-menu">
          <ul >
          <li @click="status = 'a',setActive('li')" class="btn nav-link bg-card2" :class="{ active: isActive('li') }">
            ภาพรวม
          </li>
          <li @click="status = 'b',setActive('li1')" class="btn nav-link bg-card2"  :class="{ active: isActive('li1')}">
            ที่สมัคร
          </li>
          <li @click="status = 'c',setActive('li2')" class="btn nav-link bg-card2"  :class="{ active: isActive('li2') }">
            รายได้ 
          </li>
          <li @click="status = 'd',setActive('li3')" class="btn nav-link bg-card2"  :class="{ active: isActive('li3') }">
            ถอนรายได้ 
          </li>
        </ul>
            </div>


            <div  v-if="status === 'a' ">
            <div class="w-100 my-2 "></div>
            <div class="table-secondary  shadow-sm rounded p-0 mb-1 mx-1 bg-card-red text-secondary pb-5 px-3">
            <div class="row px-0 mx-0 text-center">
            <div class="col-12  p-1">
            <div class="p-1 text-center rounded silver-btn1 text-dark  d-flex flex-row flex-sm-row flex-md-column justify-content-center align-items-center">
            <small class="mr-1">ส่วนแบ่งรายได้:</small><span class="text-dark">1%</span>
            </div>
            </div>
            <div class="col-6 col-sm-6  p-1">
            <div class="py-1 text-center rounded silver-btn1">
            <small>รายได้ทั้งหมด</small>
            <h6 class="text-dark thb mb-0" style="font-family:inherit">฿ 0</h6>
            </div>
            </div>
            <div class="col-6 col-sm-6  p-1">
            <div class="py-1 text-center rounded silver-btn1">
            <small>รายได้ปัจจุบัน</small>
            <h6 class="text-dark thb mb-0" style="font-family:inherit">฿ 0</h6>
            </div>
            </div>
            <div class="col-6 col-sm-6  p-1">
            <div class="py-1 text-center rounded silver-btn1">
            <small>สมาชิกแนะนำ</small>
            <h6 class="text-dark mb-0" style="font-family:inherit">0</h6>
            </div>
            </div>
            <div class="col-6 col-sm-6  p-1">
            <div class="py-1 text-center rounded silver-btn1">
            <small>แทงทั้งหมด</small>
            <h6 class="text-dark thb mb-0" style="font-family:inherit">฿ 0</h6>
            </div>
            </div>

            </div>
            </div>
            <div class="bgwhitealpha text-secondary shadow-sm rounded p-2 mb-1 xtarget col-lotto">
            <h4 class="text-center" style="color: white"><i class="fas fa-share-alt-square"></i> ลิ้งค์แนะนำ และแบนเนอร์</h4>
            <div class="bg-card-red width-font res-promo">
            <div class="card-body  d-flex justify-content-center " style=" margin-bottom: 0;">
            <h4 class="mr-5 mt-2 text-light text-cen " style="font-size: 20px;">ลิ้งสำหรับโปรโมท</h4>
            <textarea id="afurl" cols="0" rows="1" class="form-control text-center  " readonly="" style="width: 550px; height: 40px;">https://huayhub.vip/aff/LK210204121001</textarea>
            <button type="button" data-clipboard-target="#afurl" class="btn bg-card-tr btn-block mb-2" style="width: auto; margin-bottom: 20px;margin-left: 20px;"><i class="fas fa-copy"></i> คัดลอกลิงค์แนะนำ</button>
            </div>
            <div class="alert text-light d-flex flex-column flex-sm-column flex-md-row justify-content-between align-items-center">
            <h1 class="mb-0 mr-2 text-center"><i class="fas fa-exclamation-triangle"></i></h1>
            <div class="m-1 text-center text-sm-center text-md-left d-block">
            <b>หมายเหตุ!</b> หากพบปัญหา <u>ลิงค์ถูกแบนจาก google,facebook หรือช่องทางอื่นๆ</u> ให้ส่งลิงค์แนะนำเพื่อนของท่าน มายัง Line@ @huayhub พร้อมระบุปัญหา สำหรับรับลิงค์ใหม่ในการแนะนำเพื่อน
            </div>
            </div>
            </div>
            </div>
            <div class="bgwhitealpha1">
            <h4 class="text-light text-center mt-2 pt-2"><i class="fas fa-project-diagram"></i> ลิ้งค์ช่วยแชร์ ช่วยแนะนำ</h4>
            <div class="bg-card-red width-font res-promo">
            <div class="card-body  d-flex justify-content-center" style=" margin-bottom: 0;">
            <h4 class="mr-5 mt-2 text-light" style="font-size: 20px;">ลิ้งสำหรับแชร์</h4>
            <textarea id="afurl" cols="0" rows="1" class="form-control text-center  " readonly="" style="width: 550px; height: 40px;">https://huayhub.vip/aff/LK210204121001</textarea>
            <button type="button" data-clipboard-target="#afurl" class="btn bg-card-tr btn-block mb-2" style="width: auto; margin-bottom: 20px;margin-left: 20px;"><i class="fas fa-copy"></i> คัดลอกลิงค์แนะนำ</button>
            </div>
            </div>
            <div class="pb-2 px-4 text-center text-sm-center text-md-left d-block">
            <div class="alert alert-danger text-center ">
            <h6 class="mb-2">ลิ้งค์ช่วยแชร์รับ 1% ฟรี!(เพียงก๊อปปี้ลิ้งค์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มากยิ่งได้มาก</h6>
            </div>
            </div>
            </div>
            <div class="alert text-light  align-items-center">
            
            <p>ท่านสามารถนำลิ้งค์ด้านบนนี้หรือนำป้ายแบนเนอร์ ไปแชร์ในช่องทางต่างๆ ไม่ว่าจะเป็น
            เว็บไชต์ส่วนตัว, Blog, Facebook หรือ Social Network อื่นๆ
            หากมีการสมัครสมาชิกโดยคลิกผ่านลิ้งค์ของท่านเข้ามา
            ลูกค้าที่สมัครเข้ามาก็จะอยู่ภายให้เครือข่ายของท่านทันที
            และหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา ทุกยอดการเดิมพัน
            ท่านจะได้รับส่วนแบ่งในการแนะนำ 1% ทันทีโดยไม่มีเงื่อนไข</p>
            <p><b>ตัวอย่างดังนี้</b></p>
            <div class="botul">
            <ul class="list-group text-dark">
            <li class="list-group-item">ลูกค้าท่าน 1 คน โอน 1,000 บาท ท่านจะได้ 10.00 บาท</li>
            <li class="list-group-item">ลูกค้าท่าน 10 คน โอน 1,000 บาท ท่านจะได้รับ 100.00 บาท</li>
            <li class="list-group-item">ลูกค้าท่าน 100 คน โอน 1,000 บาท ท่านจะได้รับ 1,000.00 บาท</li>
            </ul>
            </div>
            <br>
            <p>สามารถทำรายได้เดือน 100,000 บาทง่ายๆเลยทีเดียว เพราะทางเรามีหวยเปิดรับทายผลทุกวัน มีมากกว่าวันละ
            200 รอบ เปิดรับแทงออนไลน์ตลอด 24 ชม. และรายได้ทุกบาททุกสตางค์ของท่านสามารถตรวจสอบได้ทุกขั้นตอน
            งานนี้แจกจริง จริงจ่าย
            ที่นี้ที่เดียวที่ให้คุณมากกว่าใคร ก๊อปปี้ลิ้งค์และข้อความด้านล่างนี้ นำไปแชร์ได้เลย</p>
            <p><strong>หมายเหตุ:</strong>&nbsp;รายได้การช่วยแชร์ช่วยแนะนำของท่านสามารถแจ้งถอนได้ทุกเวลา
            หากมียอดรายได้มากกว่า 500 บาทขึ้นไป</p>
            </div>
            </div>
            
            <div v-if="status === 'b' ">
              <div class="bgwhitealpha text-light shadow-sm rounded p-2 mb-1 mt-2 xtarget col-lotto">
                <h4 class="text-center"><i class="fas fa-users "></i> สมาชิกที่แนะนำ</h4>
              </div>
              <div class="bg-white text-secondary shadow-sm rounded py-2 px-1 mb-5 ">
                <table class="datatable table table-hover table-striped table-sm width-font " id="invitemembers">
                <thead>
                <tr>
                <th class="datetime text-left "><span>วัน-เวลา</span><span>ที่สมัคร</span></th>
                <th>เบอร์โทรที่สมัคร</th>
                <th class="totalbet text-right "><span>โอนทั้งหมด</span></th>
                <th class="totalbet text-right "><span>แทงทั้งหมด</span></th>
                <th class="totalbet text-right "><span>ยอด aff ทั้งหมด</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td colspan="4"> <p class="text-center text-muted" style="font-family: 'sukhumvit';">ยังไม่มีรายการ</p></td>
                </tr>
                </tbody>
                </table>
                <br>
                <div class="row">
                <div class="col-6"> Total Record : 1 Page :</div>
                <div class="col-6 ">
                <nav aria-label="Page navigation " class="bg-light">
                <ul class="pagination"><li class="page-item"><a class="page-link active" href="#">1 </a></li> </ul>
                </nav>
                </div>
                </div>
                </div>
            </div>

            <div v-if="status === 'c' ">
              
              <div class="bgwhitealpha text-light shadow-sm rounded p-4 mb-1 mt-3 xtarget col-lotto  mx-auto">
                <h4 class="text-center text-light my-2"><i class="fas fa-money-check"></i> รายได้</h4>
              <div class="input-group date d-flex width-font" id="datetimepicker5" data-target-input="nearest">
              <label style="font-size: 20px;" class="col-sm-12"><i class="fas fa-calendar-alt"></i> เลือกเดือน</label>
              <input type="text" class="form-control datetimepicker-input mb-0" data-target="#datetimepicker5" data-toggle="datetimepicker" data-container="body" id="date" name="date" style="margin: 0 0 0 30px; border-top-left-radius: 5px; border-bottom-left-radius: 5px;">
              <div class="input-group-append" data-target="#datetimepicker5" data-toggle="datetimepicker">
              <button class="btn silver-btn" style="box-shadow: none"><i class="fas fa-calendar my-0"></i></button>
              </div>
              </div>
              <div class=" text-secondary shadow-sm rounded p-2 mb-5 xtarget col-lotto">
              <p class=" text-center text-light">
              รายได้ ระบบแนะนำ จะถอนเข้าเป็นเงินเครดิต หากสงสัยโปรดติดต่อเอเย่นต์ที่ท่านสมัครสมาชิก </p>
              <h4 class="w-100 text-center text-light">April 2021</h4><hr>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">1 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">2 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">3 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">4 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">5 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">6 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">7 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">8 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">9 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">10 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">11 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">12 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">13 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">14 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">15 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">16 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">17 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">18 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">19 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">20 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">21 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">22 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">23 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">24 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">25 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-secondary border rounded-left p-2 d-inline w-50 mr-0">26 April 2021</div>
              <div class="bg-white border rounded-right text-right text-sm-right text-md-left p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              <div class="d-flex flex-row mb-2 w-100">
              <div class="table-success border border-success rounded-left p-2 d-inline w-50 mr-0">ยอดรวม (เดือน)</div>
              <div class="bg-white border border-success border-left-0 rounded-right text-right text-sm-right text-md-left text-success p-2 d-inline w-50 ml-0"><span class="thb">฿ 0</span></div>
              </div>
              </div>
              </div>
            </div>

            <div v-if="status === 'd' ">
              <div class="text-center mt-5 silver-btn width-font" style="padding: 20px; width: 100%;border-radius: 10px; margin: 0 auto;">
              <b style="font-size: 20px; ">รายได้ปัจจุบันคงเหลือ &nbsp;&nbsp;&nbsp;
              ฿ 0.00 &nbsp;&nbsp;&nbsp;บาท</b>
              </div>
              <h4 class="mt-4 text-center text-light"><i class="fas fa-file-invoice-dollar"></i> แจ้งถอนรายได้</h4>
              <hr>
              <p class="text-center text-light">รายได้ ระบบแนะนำ จะถอนเข้าเป็นเงินเครดิตหากสงสัยโปรดติดต่อเอเย่นต์ที่ท่านสมัครสมาชิก</p>
              <div class="text-center my-3">
              <form action="/member/affiliate/withdraw" enctype="application/x-www-form-urlencoded" class="form-login form-horizontal" id="afwithdraw" role="form" method="post" accept-charset="utf-8">
              <input type="hidden" name="csrf_token" value="562149ca110a2c484f4ccee6c7d03559">
              <input type="hidden" name="afwithdraw" value="1">
              <div class="text-secondary shadow-sm rounded p-4 mb-1 xtarget col-lotto  mx-auto width-font-1 silver-btn1" style="width: 100%;">
              <div class="input-group mb-1 d-flex mx-auto ">
              <span style="font-size: 20px; margin-top: 5px; color: white;margin-left: 20px;" id="basic-addon1" class="col-lg-3 col-md-3 col-sm-12">ต้องการถอน</span>
              <input type="number" class="form-control w-20 col-lg-6 col-md-6 col-sm-12" name="amount" placeholder="ระบุจำนวนเงิน" aria-describedby="basic-addon1" style="margin: 0 20px 0 20px; border-radius: 10px;">
              <button class="btn bg-card-tr bgwhitealpha2  col-lg-3 col-md-3 col-sm-12" type="submit" style=""><i class="fas fa-hand-holding-usd"></i> แจ้งถอนรายได้
              </button>
              </div>
              </div>
              </form>
              </div>
              <div class="text-light text-center shadow-sm rounded pt-2 pb-1 px-2 mb-1">
              <h4><i class="fas fa-history"></i> แนะนำเพื่อนประวัติการถอนล่าสุด</h4>
              </div>
              <div class="bg-white text-secondary shadow-sm rounded py-2 px-1 mb-5">
              <table class="datatable table table-hover table-striped table-sm " id="invitemembers">
              <thead>
              <tr>
              <th class="datetime text-left"><span>วัน-เวลา</span><span>ที่ถอน</span></th>
              <th class="text-center">จำนวนที่ถอน</th>
              <th class="totalbet text-right"><span>คงเหลือ</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td colspan="3"> <p class="text-center text-muted" style="font-family: 'sukhumvit';">ยังไม่มีรายการ</p></td>
              </tr> </tbody>
              </table>
              <br>
              <div class="row">
              <div class="col-3"> Total 0 Record : 1 Page</div>
              <div class="col-9">
              <nav aria-label="Page navigation" class="bg-light">
              <ul class="pagination"><li class="page-item"><a class="page-link active" href="#">1 </a></li> </ul>
              </nav>
              </div>
              </div>
              </div>
            </div>

            </div>
  </div>
</template>

<script>
export default {
    name: 'Invitefriend',
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
  },
}
</script>

<style scoped>
table,thead,tbody {
  width: 100%!important;
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
.Invitefriend ul li:hover,.Invitefriend ul li.active {
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgba(0,7,71,1) 100%);
  color: white;
}
/* li .btn .nav-link {
  background: red;
} */
.Invitefriend li {
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
.Invitefriend .top-menu ul {
  list-style: none;
  padding: 0;
  margin: 0 auto!important;
  display: flex;
  justify-content: center;
  
}
.bg-card2 {
  background: black;
}
@media (min-width: 1024px) and (max-width: 1366px) {
  
}
@media (min-width: 768px) and (max-width: 1023px) {
  
}
@media (min-width: 250px) and (max-width: 767px) {
  .Invitefriend .top-menu ul{
    display: block!important;
  }
  .Invitefriend .top-menu li {
    width: 100%;
    margin-top: 10px;
    border-color: aliceblue;
  }
  .res-promo .d-flex{
    display: block!important;
  }
  .res-promo .d-flex textarea{
    width: 100%!important;
    height: 60px!important;
  }
  .res-promo .d-flex button{
    width: 100%!important;    
    margin: 0!important;
  }
}
</style>
