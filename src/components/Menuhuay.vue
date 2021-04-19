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
            <i class="bi bi-award"></i> จับยี่กี VIP
          </li>
          <li @click="status = 'd',setActive('li3')" class="btn nav-link"  :class="{ active: isActive('li3') }">
            <i class="bi bi-award"></i> กฏและกติกา
          </li>
          <li @click="status = 'e',setActive('li4')" class="btn nav-link"  :class="{ active: isActive('li4') }">
            <i class="bi bi-award"></i> อัตราจ่าย
          </li>
          <li @click="status = 'f',setActive('li5')" class="btn nav-link"  :class="{ active: isActive('li5') }">
            <i class="bi bi-award"></i> วิธีดูหวยหุ้น
          </li>
        </ul>
      </div>
      <div class="flex-column card wi2 ">
        <div   v-if="status === 'a' ">
          <h4><i class="bi bi-award"></i> หวยไทย & หวยหุ้นไทย</h4>
          <div id="huaythai" class="collapse show mt-4 mb-5">
            <div class="row font-weight-bold huay mx-auto">
              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="status === 'b'">
          <h4><i class="bi bi-award"></i> หวยหุ้นต่างประเทศ</h4>
          <div class="row font-weight-bold huay mt-3 mb-3 mx-auto">
            <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
        </div>
        <div  v-if="status === 'c'" >
          <h4><i class="bi bi-award"></i>จับยี่กี VIP</h4>
          <div class="row font-weight-bold huay mt-3 mb-3 mx-auto">
            <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1 ml-auto">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 col-sm-10 ">
                <div class="card bg-card1">
                  <div class="card-body text-center">
                    <h5 class="card-title">
                      <span class="flag-icon flag-icon-th shadow1"></span>
                      หวยรัฐบาล
                    </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>3 ตัวหน้า</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>3 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xxx,xxx</p>
                          </div>
                        </div>
                        <div class="col">
                          <p>2 ตัวล่าง</p>
                          <div class="card" style="color: black">
                            <p class="m-2">xx</p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="mt-3">รางวัลเลขท้าย 6 ตัว</p>
                          <div
                            class="card"
                            style="
                              color: black;
                              width: 94%;
                              margin: 20px auto 20px auto;
                            "
                          >
                            <p class="m-2">xxxxxx</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        </div>

      <div  v-if="status === 'd'" class="bg-wi2 text-dark" >
          <h4><i class="bi bi-award"></i>กฏและกติกา</h4>
          <div class="row font-weight-bold">
            <div class="col text-dark text-left text-p-black">
                <p class=""><span class="pl-3">ยินดีต้อนรับสู่หวยออนไลน์</span>
                เพื่อให้ท่านทราบถึงสิทธิประโยชน์ของสมาชิกกรุณาอ่านข้อตกลงอย่างละเอียดก่อนที่จะลงทะเบียนสมัครเป็นสมาชิกและใช้บริการ
                <a href="https://www.huayhub.vip" style="color: red;">huayhub.vip</a> เมื่อสมัครสมาชิกแล้วทางเว็บจะถือว่า
                สมาชิกได้อ่านและยอมรับ <span class="text-primary">" นโยบายและเงื่อนไขการให้บริการของเว็บไซต์"</span>
                </p>
                <p><strong><u style="color: #3b5898;">การรักษาและช่วยเหลือการเดิมพันออนไลน์</u></strong><br></p>
                <ul class="pl-3">
                <li class="text-dark">ถ้าสมาชิกหลุดออกจากเว็บไซต์ระหว่างการเดิมพัน บัญชีของท่านจะไม่มีผลกระทบต่อผลลัพธ์ของการเดิมพัน
                </li>
                <li class="text-dark">ไม่ต้องวิตกกังวล ถ้าสมาชิกออกจากเว็บไซด์ระหว่างการเดิมพัน สมาชิกจะถูกออกจากระบบช่วงเวลาหนึ่ง
                จากนั้นสมาชิกสามารถเข้าสู่ระบบ <a href="https://www.huayhub.vip" style="color: red;">huayhub.vip</a>
                ได้อีกครั้งตามปกติ
                </li>
                </ul>
                <p><strong><u style="color: #3b5898;">การให้ความคุ้มครอง</u></strong><br>
                <a href="https://www.huayhub.vip" style="color: red;">huayhub.vip</a> ได้มีการจัดเตรียม ระบบที่มีประสิทธิภาพ
                ความรวดเร็วและการบริการลูกค้าที่เป็นมิตร ถ้าหากท่านมีคำถามหรือคำแนะนำใด ๆ
                กรุณาอย่าลังเลใจที่จะโทรศัพท์มาทางฝ่ายบริการลูกค้า ซึ่งจะมีให้บริการตลอด 24 ชั่วโมง
                ทุกวันไม่มีวันหยุดและทางเราจะตอบกลับอย่างรวดเร็วที่สุด <a href="https://www.huayhub.vip">huayhub.vip</a>
                ขอรับรองว่าจะรักษาข้อมูลส่วนตัวของท่านไว้เป็นความลับอย่างปลอดภัย </p>
                <p><strong><u style="color: #3b5898;">ข้อตกลงในการเดิมพัน</u></strong><br></p>
                <ul class="pl-3">
                <li>เพื่อหลีกเลี่ยงปัญหาต่างๆในขณะที่ใช้งานเว็บไซต์
                สมาชิกกรุณาอ่านกฎกติกาของบริษัทอย่างละเอียดและระมัดระวัง
                เมื่อสมาชิกเข้าสู่หน้าเดิมพันทางบริษัทจะถือว่าท่านได้ยอมรับข้อตกลงของทาง <a href="https://www.huayhub.vip" style="color: red;">huayhub.vip</a></li>
                <li>การเดิมพันจะต้องอยู่ใน <span class="text-success">"ระยะเวลาที่กำหนด"</span>
                มิฉะนั้นจะถือว่าการเดิมครั้งนั้นเป็น <span class="text-danger">"โมฆะ"</span>
                ถ้าการเดิมพันได้มีการยกเลิกหรือหยุดพักชั่วคราว เนื่องจากเหตุผลใดๆก็ตามก่อนการเล่น
                การเดิมพันครั้งนั้นจะถือว่าเป็น<span class="text-danger">"โมฆะ"</span>และทางบริษัทจะคืนเครดิตให้กับสมาชิก
                </li>
                <li>เป็นความรับผิดชอบของสมาชิกที่จะคอยดูผลลัพธ์
                จากช่องหน้าต่างที่แสดงให้เห็นถึงผลการเดิมพันแพ้หรือชนะ ทางบริษัทจะยึดถือข้อมูล <span class="text-primary">"รายละเอียดการวางเดิมพัน"</span> ของสมาชิก
                ในกรณีที่สมาชิกมีความสงสัย และต้องการตรวจสอบข้อมูลในการคำนวณของการเดิมพันนั้นๆ
                </li>
                <li>ถ้าหากเกิดความผิดพลาดของระบบระหว่างการเดิมพันหรือความผิดพลาดโดยไม่ได้เจตนาของพนักงาน
                ทางบริษัทขอสงวนสิทธ์ที่จะแก้ไขผลลัพธ์ให้ถูกต้อง
                และจะมีการพิมพ์ข้อความที่ได้มีการแก้ไขเผยแพร่ไว้ที่แถบตัววิ่งในหน้าเว็บไซต์
                บริษัทจะไม่มีการแจ้งสมาชิกเป็นการส่วนตัว
                </li>
                <li>เป็นความรับผิดชอบของสมาชิกที่จะทำให้แน่ใจว่าชื่อผู้ใช้และรหัสผ่านสำหรับเข้าเว็ไซต์นั้นถูกต้อง
                และกรุณาเปลี่ยนรหัสผ่านของสมาชิกอย่างน้อยเดือนละครั้ง เพื่อความปลอดภัย
                ถ้าหากท่านพบหรือสงสัยว่ามีผู้อื่นได้เข้าไปเล่นในบัญชีของท่านโดยไม่รับอนุญาต กรุณา
                แจ้งตัวแทนของท่านทันทีเพื่อเปลี่ยนรหัสส่วนตัว
                (หากมีการเดิมพันก่อนที่จะเปลี่ยนรหัสเดิมจะถือว่าการเดิมพันนั้นเป็นผล)
                </li>
                <li>ก่อนเริ่มการเดิมพันแต่ละครั้ง ท่านสมาชิกควรจะตรวจสอบวงเงินของท่านเสียก่อน
                ถ้าหากท่านมีข้อสงสัยใดๆ เกี่ยวกับวงเงิน กรุณาแจ้งตัวแทนของท่านสมาชิกทันที
                </li>
                <li>ในกรณีที่เหตุการณ์ไม่คาดคิดเกิดขึ้น อย่างเช่น ข้อมูลสูญหายเนื่องจากระบบอินเตอร์เน็ตขัดข้อง
                ทางบริษัทจะมีการประกาศให้รู้ถึงสาเหตุ และวิธีการแก้ปัญหา
                </li>
                <li>ชั่วโมงการให้บริการ 24 ชั่วโมง/วัน และไม่มีวันหยุด</li>
                </ul>
                <p><strong><u style="color: #3b5898;">ระบบการรักษาความปลอดภัย</u></strong><br></p>
                <ul class="pl-3">
                <li>ข้อมูลทางด้านบัญชีเพื่อวัตถุประสงค์เฉพาะบุคคล
                ข้อมูลที่ทางสมาชิกให้มาในการเปิดบัญชีจะถูกเก็บเป็นความลับขั้นสูงสุด
                ทางบริษัทจะไม่เผยแพร่ข้อมูลนี้ให้กับบุคคลที่สามหรือองค์กรอื่นๆ ล่วงรู้ ไม่ว่าจะเป็นบัญชีอีเมล์
                หรือข้อมูลอื่นๆ ที่ทางสมาชิกกรอกในใบสมัคร
                ข้อมูลเหล่านี้จะใช้ในจุดมุ่งหมายที่ตั้งใจเอาไว้ให้เท่านั้น เช่น
                การส่งเช็คเงินสดสำหรับผู้ชนะหรือข้อมูลอื่นๆ ตามที่สมาชิกร้องขอ
                </li>
                <li>
                ความปลอดภัยทางบริษัทได้ใช้วิธีที่มีประสิทธิภาพมากที่สุดเพื่อทำให้ท่านแน่ใจในความปลอดภัยของข้อมูลของท่าน
                ทางเราจะพยายามให้ดีที่สุดที่จะรักษาความถูกต้องแน่นอน และความลับเฉพาะของข้อมูล
                เพื่อป้องกันไม่ให้ข้อมูลรั่วไหลหรือนำไปใช้อย่างไม่ถูกต้อง ถ้าท่านมีข้อสงสัยใดๆ
                ที่เกี่ยวข้องกับการรักษาความลับ ความปลอดภัยของข้อมูล กรุณาติดต่อฝ่ายบริการลูกค้า
                พวกเรายินดีให้บริการ 24 ชั่วโมง/วัน ทุกวันไม่มีวันหยุด
                </li>
                </ul>
                <p>บริษัทความยินดีเป็นอย่างยิ่งที่ได้รับใช้ท่าน</p>
              </div>
              </div>
        </div>

        <div  v-if="status === 'e'" class="bg-wi2" >
          <h4><i class="bi bi-award"></i>อัตราจ่าย</h4>
          <div class="row font-weight-bold">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 px-3">
              <h5 class="mb-0 text-center text-danger" id="huaythai">จ่ายสูงที่สุด <small> บาทละ
              </small>1,000.00</h5>
              <h5 class="text-center">หวยรัฐบาลไทย</h5>
              <table class="table table-sm table-striped border">
              <thead class="goldpattern text-dark text-border-number">
              <tr>
              <th>ประเภท</th>
              <th class="text-center">ราคา</th>
              <th class="text-right">อัตราจ่าย</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>3 ตัวบน</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right text-danger table-warning">
              <b>1,000.00 <small>บาท</small></b>
              </td>
              </tr>
              <tr>
              <td>3 ตัวโต๊ด</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">150.00 <small>บาท</small>
              </td>
              </tr>
              <tr>
              <td>3 ตัวล่าง</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">450.00<small>บาท</small>
              </td>
              </tr>
              <tr>
              <td>3 ตัวหน้า</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">450.00 <small>บาท</small></td>
              </tr>
              <tr>
              <td>2 ตัวบน</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">100.00 <small>บาท</small>
              </td>
              </tr>
              <tr>
              <td>2 ตัวล่าง</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">100.00<small>บาท</small>
              </td>
              </tr>
              <tr>
              <td>วิ่งบน</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">3.30 <small>บาท</small>
              </td>
              </tr>
              <tr>
              <td>วิ่งล่าง</td>
              <td class="text-center"><small>บาทละ</small></td>
              <td class="text-right">4.30<small>บาท</small>
              </td>
              </tr>
              </tbody>
              </table>
              </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-4 px-3">
                  <h5 class="mb-0 text-center text-danger" id="huayyeekee">โปรโมชั่นจ่ายหนัก</h5>
                  <h5 class="text-center">หวยยี่กี</h5>
                  <table class="table table-sm table-striped border">
                  <thead class="goldpattern text-dark text-border-number">
                  <tr>
                  <th>ประเภท</th>
                  <th class="text-center">ราคา</th>
                  <th class="text-right">อัตราจ่าย</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>3 ตัวบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right text-danger table-warning">
                  <b>1,000.00 <small>บาท</small></b>
                  </td>
                  </tr>
                  <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">150.00 <small>บาท</small>
                  </td>
                  </tr>
                  <tr>
                  <td>2 ตัวบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">100.00 <small>บาท</small>
                  </td>
                  </tr>
                  <tr>
                  <td>2 ตัวล่าง</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">100.00<small>บาท</small>
                  </td>
                  </tr>
                  <tr>
                  <td>วิ่งบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">3.30 <small>บาท</small>
                  </td>
                  </tr>
                  <tr>
                  <td>วิ่งล่าง</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">4.30<small>บาท</small>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>



                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 px-3">
                  <h5 class="mb-0 text-center text-danger" id="huayst">โปรโมชั่นจ่ายหนัก</h5>
                  <h5 class="text-center">หวยฮานอย</h5>
                  <table class="table table-sm table-striped border">
                  <thead class="goldpattern text-dark text-border-number">
                  <tr>
                  <th>ประเภท</th>
                  <th class="text-center">ราคา</th>
                  <th class="text-right">อัตราจ่าย</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>3 ตัวบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right text-danger table-warning"><b>900 <small>บาท</small></b>
                  </td>
                  </tr>
                  <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right"><b>130 <small>บาท</small></b></td>
                  </tr>
                  <tr>
                  <td>2 ตัวบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right"><b>95 <small>บาท</small></b></td>
                  </tr>
                  <tr>
                  <td>2 ตัวล่าง</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right"><b>95 <small>บาท</small></b></td>
                  </tr>
                  <tr>
                  <td>วิ่งบน</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">3.3 <small>บาท</small></td>
                  </tr>
                  <tr>
                  <td>วิ่งล่าง</td>
                  <td class="text-center"><small>บาทละ</small></td>
                  <td class="text-right">4.3 <small>บาท</small></td>
                  </tr>
                  </tbody>
                  </table>
                  </div>


                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 px-3">
                    <h5 class="mb-0 text-center text-danger" id="huaylaoset">หวยลาว</h5>
                    <h5 class="text-center">หวยลาว</h5>
                    <table class="table table-sm table-striped border">
                    <thead class="goldpattern text-dark text-border-number">
                    <tr>
                    <th>ประเภท</th>
                    <th class="text-right">เงินรางวัล</th>
                    <th class="text-right">อัตราจ่าย</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>3 ตัวบน</td>
                    <td class="text-center"><small>บาทละ</small></td>
                    <td class="text-right text-danger table-warning"><b>900 <small>บาท</small></b>
                    </td>
                    </tr>
                    <tr>
                    <td>3 ตัวโต๊ด</td>
                    <td class="text-center"><small>บาทละ</small></td>
                    <td class="text-right"><b>130 <small>บาท</small></b></td>
                    </tr>
                    <tr>
                    <td>2 ตัวบน</td>
                    <td class="text-center"><small>บาทละ</small></td>
                    <td class="text-right"><b>95 <small>บาท</small></b></td>
                    </tr>
                    <tr>
                    <td>2 ตัวล่าง</td>
                    <td class="text-center"><small>บาทละ</small></td>
                    <td class="text-right"><b>95 <small>บาท</small></b></td>
                    </tr>
                    </tbody>
                    </table>
                    </div>


              </div>
        </div>

        <div  v-if="status === 'f'" class="bg-wi2 " >
          <h4><i class="bi bi-award"></i>อัตราจ่าย</h4>
          <div class="row font-weight-bold ">
            <div class="card-body mx-auto" style="font-size: 14px ;">
              <div class="widget-main ">
              <table class="table-pricing">
              <thead>
              <tr class="bg-card-tr " style="color: white;border-radius: 25px">
              <th class="p-3 text-light" style="color: white!important; font-size: 16px ; border-top-left-radius: 10px;border-bottom-left-radius: 10px;">รอบ</th>
              <th class="p-3 text-light" style="color: white!important; font-size: 16px ;">ปิดรับ</th>
              <th class="p-3 text-light" style="color: white!important; font-size: 16px ;">เลขออก</th>
              <th class="p-3 text-light" style="color: white!important; font-size: 16px ;border-bottom-right-radius: 10px;border-top-right-radius: 10px;">ดูผล</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td onclick="modalShow('9:30','assets/images/huayImg/Nikkei.png','http://indexes.nikkei.co.jp/en/nkave')">
              นิเคอิเช้า <img style="width:35px;height:35px" src="assets/images/huayImg/Nikkei.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 09.20น</td>
              <td>เลขออก 09.30 น.</td>
              <td>(ญี่ปุ่น) <a style="color:#ff0000" href="http://indexes.nikkei.co.jp/en/nkave" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('11:00','assets/images/huayImg/Chinese.png','http://www.szse.cn/main/en/marketdata/indicesperformance/index.shtml?stockcode=399001')">
              จีน <img style="width:35px;height:35px" src="assets/images/huayImg/Chinese.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 10:25น</td>
              <td>เลขออก 11.00 น.</td>
              <td>(จีน) <a style="color:#ff0000" href="http://www.szse.cn/main/en/marketdata/indicesperformance/index.shtml?stockcode=399001" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('11:00','assets/images/huayImg/HungSeng.png','http://www.hsi.com.hk/HSI-Net/')">
              ฮั่งเส็งเช้า <img style="width:35px;height:35px" src="assets/images/huayImg/HungSeng.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 10.50น.</td>
              <td>เลขออก 11.00น.</td>
              <td>(ฮั่งเส็งปิดเช้า) <a style="color:#ff0000" href="http://www.hsi.com.hk/HSI-Net/" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('12:30','assets/images/huayImg/Twse.png','http://www.twse.com.tw/en/')">
              ไต้หวัน <img style="width:35px;height:35px" src="assets/images/huayImg/Twse.png"><a style="color:#ff0000">คลิก!</a></td>
              <td>ปิดรับ 12:00น</td>
              <td>เลขออก 12.30 น.</td>
              <td>(ไต้หวัน) <a style="color:#ff0000" href="http://www.twse.com.tw/en/" target="_blank">เข้าเว็บดูผลออก</a>
              </td>
              </tr>
              <tr>
              <td onclick="modalShow('13:30','assets/images/huayImg/korea.png','http://eng.krx.co.kr/')">
              เกาหลี <img style="width:35px;height:35px" src="assets/images/huayImg/korea.png"><a style="color:#ff0000">คลิก!</a></td>
              <td>ปิดรับ 12:40น</td>
              <td>เลขออก 13.30 น.</td>
              <td>(เกาหลี) <a style="color:#ff0000" href="http://eng.krx.co.kr/" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('13:00','assets/images/huayImg/Nikkei.png','http://indexes.nikkei.co.jp/en/nkave')">
              นิเคอิบ่าย <img style="width:35px;height:35px" src="assets/images/huayImg/Nikkei.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 12.50น.</td>
              <td>เลขออก13.00น.</td>
              <td>(ญี่ปุ่น) <a style="color:#ff0000" href="http://indexes.nikkei.co.jp/en/nkave" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('14:00','assets/images/huayImg/Chinese.png','http://www.szse.cn/main/en/marketdata/indicesperformance/index.shtml?stockcode=399001')">
              จีนบ่าย <img style="width:35px;height:35px" src="assets/images/huayImg/Chinese.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 13:50น.</td>
              <td>เลขออก14.00น.</td>
              <td>(จีนบ่าย) <a style="color:#ff0000" href="http://www.szse.cn/main/en/marketdata/indicesperformance/index.shtml?stockcode=399001" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('15:00','assets/images/huayImg/HungSeng.png','http://www.hsi.com.hk/HSI-Net/')">
              ฮั่งเส็งบ่าย <img style="width:35px;height:35px" src="assets/images/huayImg/HungSeng.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 14.50น.</td>
              <td>เลขออก15.00น.</td>
              <td>(ฮั่งเส็งบ่าย) <a style="color:#ff0000" href="http://www.hsi.com.hk/HSI-Net/" target="_blank">เข้าเว็บดูผลออก</a>
              </td>
              </tr>
              <tr>
              <td onclick="modalShow('16:30','assets/images/huayImg/HungSeng.png','http://www.sgx.com/wps/portal/sgxweb/home/marketinfo/indices/indices')">
              สิงคโปร์ <img style="width:35px;height:35px" src="assets/images/huayImg/HungSeng.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 15.50น.</td>
              <td>เลขออก16.30น.</td>
              <td>(สิงคโปร์) <a style="color:#ff0000" href="http://www.sgx.com/wps/portal/sgxweb/home/marketinfo/indices/indices" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('17:30','assets/images/huayImg/India.png','http://www.bseindia.com/')">
              อินเดีย <img style="width:35px;height:35px" src="assets/images/huayImg/India.png"><a style="color:#ff0000">คลิก!</a></td>
              <td>ปิดรับ 16:50น.</td>
              <td>เลขออก17.30น.</td>
              <td>(อินเดีย) <a style="color:#ff0000" href="http://www.bseindia.com/" target="_blank">เข้าเว็บดูผลออก</a>
              </td>
              </tr>
              <tr>
              <td onclick="modalShow('18:30','assets/images/huayImg/Vietnam.png','http://ketqua.net/')">
              ฮานอย <img style="width:35px;height:35px" src="assets/images/huayImg/Vietnam.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 18:00น.</td>
              <td>เลขออก18.30น.</td>
              <td>(ฮานอย) <a style="color:#ff0000" href="http://ketqua.net/" target="_blank">เข้าเว็บดูผลออก</a>
              </td>
              </tr>
              <tr>
              <td onclick="modalShow('20:00','assets/images/huayImg/Egypt.png','http://www.bloomberg.com/quote/CASE:IND')">
              อียิปต์ <img style="width:35px;height:35px" src="assets/images/huayImg/Egypt.png"><a style="color:#ff0000">คลิก!</a></td>
              <td>ปิดรับ 19.20น.</td>
              <td>เลขออก20.00น.</td>
              <td>(อียิปต์) <a style="color:#ff0000" href="https://www.bloomberg.com/quote/CASE:IND" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('21:50','assets/images/huayImg/Russian.png','http://www.investing.com/indices/rts-standard')">
              รัสเซีย <img style="width:35px;height:35px" src="assets/images/huayImg/Russian.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 21.30น.</td>
              <td>เลขออก21.50น.</td>
              <td>(รัสเซีย) <a style="color:#ff0000" href="http://www.investing.com/indices/rts-standard" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('23:00','assets/images/huayImg/German.png','http://www.bloomberg.com/quote/DAX:IND')">
              เยอรมัน <img style="width:35px;height:35px" src="assets/images/huayImg/German.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 22.20น.</td>
              <td>เลขออก23.00น.</td>
              <td>(เยอรมัน) <a style="color:#ff0000" href="https://www.bloomberg.com/quote/DAX:IND" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('23:30','assets/images/huayImg/England.png','http://www.bloomberg.com/quote/UKX:IND')">
              อังกฤษ <img style="width:35px;height:35px" src="assets/images/huayImg/England.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 22:30น.</td>
              <td>เลขออก23.30น.</td>
              <td>(อังกฤษ) <a style="color:#ff0000" href="https://www.bloomberg.com/quote/UKX:IND" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('04:00','assets/images/huayImg/Dowjones.png','http://finance.yahoo.com/q?s=%5EDJI&amp;ql=0')">
              ดาวโจนส์ <img style="width:35px;height:35px" src="assets/images/huayImg/Dowjones.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 24.00น.</td>
              <td>เลขออก04.00น.</td>
              <td>(ดาวโจนส์) <a style="color:#ff0000" href="https://finance.yahoo.com/q?s=%5EDJI&amp;ql=0" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr class="btn-app bg-card-tr p-5" style="color:#ffffff !important;border-radius: 25px">
              <th class="p-3" style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;">ต่างประเทศ มาเลย์ - ลาว ร่วมลุ้นรอบพิเศษ</th>
              <th class="p-3">ปิดรับ</th>
              <th class="p-3">เลขออก</th>
              <th class="p-3" style="border-top-right-radius: 10px;border-bottom-right-radius: 10px;">ดูผล</th>
              </tr>
              <tr>
              <td onclick="modalShow('18:30','assets/images/huayImg/Malaysia.png','http://www.live4d.com/live4d/4dlive_index.htm')">
              มาเลย์(พุธ)<img style="width:35px;height:35px" src="assets/images/huayImg/Malaysia.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 18:00น</td>
              <td>เลขออก 18.30 น.</td>
              <td>(มาเลย์) <a style="color:#ff0000" href="http://www.live4d.com/live4d/4dlive_index.htm" target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('18:30','assets/images/huayImg/Malaysia.png','http://www.live4d.com/live4d/4dlive_index.htm')">
              มาเลย์(เสาร์) <img style="width:35px;height:35px" src="assets/images/huayImg/Malaysia.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 18:00น</td>
              <td>เลขออก 18.30 น.</td>
              <td>(มาเลย์) <a style="color:#ff0000" href="http://www.live4d.com/live4d/4dlive_index.htm " target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('18:30','assets/images/huayImg/Malaysia.png','http://www.live4d.com/live4d/4dlive_index.htm')">
              มาเลย์(อาทิตย์)<img style="width:35px;height:35px" src="assets/images/huayImg/Malaysia.png"><a style="color:#ff0000">คลิก!</a>
              </td>
              <td>ปิดรับ 18:00น.</td>
              <td>เลขออก 18.30น.</td>
              <td>(มาเลย์) <a style="color:#ff0000" href="http://www.live4d.com/live4d/4dlive_index.htm " target="_blank">เข้าเว็บดูผลออก</a></td>
              </tr>
              <tr>
              <td onclick="modalShow('20:30','assets/images/huayImg/Laos.png','http://laodl.com/')">
              หวยลาว(พุธ)<img style="width:35px;height:35px" src="assets/images/huayImg/Laos.png"><a style="color:#ff0000">คลิก!</a></td>
              <td>ปิดรับ 20:00น</td>
              <td>เลขออก 20.30 น.</td>
              <td>(หวยลาว) <a style="color:#ff0000" href="http://laodl.com/" target="_blank">เข้าเว็บดูผลออก</a>
              </td>
              </tr>
              </tbody>
              </table>
              </div>
              </div>


              </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Menuhuay",
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
  
};
</script>

<style scoped>
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
  border-bottom-left-radius: 0px;
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
  width: 70%;
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
  min-height: 100vh;
  background: linear-gradient(90deg, rgba(170,0,200,1) 0%, rgb(78, 96, 252) 100%);
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
.text-p-black ,
.text-p-black li {
  color: black!important;
}
.text-p-black li:hover {
  background: none;
  color: none;
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