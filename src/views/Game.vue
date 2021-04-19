<template>
  <div class="Game">
    <NavbarMember />

    <div class="d-flex bo">
      <div class="flex-column wi card">
        <div class="logohuay">
          <img src="../assets/img/huay999logonew.png" alt="" />
        </div>
        <ul>
          <li
            @click="(status = 'a'), setActive('li')"
            class="btn nav-link"
            :class="{ active: isActive('li') }"
          >
            <i class="bi bi-award"></i> เล่นกับผู้เล่น
          </li>
          <li
            @click="(status = 'b'), setActive('li1')"
            class="btn nav-link"
            :class="{ active: isActive('li1') }"
          >
            <i class="bi bi-award"></i> เล่นกับบอท
          </li>
          <li
            @click="(status = 'c'), setActive('li2')"
            class="btn nav-link"
            :class="{ active: isActive('li2') }"
          >
            <i class="bi bi-award"></i> ผลแพ้ชนะ
          </li>
        </ul>
      </div>
      <div class="flex-column card wi2">
        <div v-if="status === 'a'">
          <h4><i class="bi bi-award"></i> เล่นกับผู้เล่น</h4>
          <div class="card">
            <h3 class="text-center mt-3">สร้างเกม</h3>
            <div class="d-flex justify-content-between mb-2 p-3">
              <h5 class="text-left align-self-center">จำนวนที่เดิมพัน</h5>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                กติกา & วิธีการเล่น
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">กติกา</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <h2>วิธีการเล่น</h2>
                      <h3>เมนู "เล่นเกม"</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเต่ละห้องจะเเสดงรูป ค้อน, กรรไกร, กระดาษ เเละ
                          ยอดเงินเดิมพัน"
                        </div>
                        <div>
                          เลือกรูป ค้อน, กรรไกร, กระดาษ
                          ได้เพียงอย่างใดอย่างหนึ่ง
                        </div>
                        <div>กด "OK" เพื่อวางเดิมพัน</div>
                        <div>ระบบจะเเสดงผล "ชนะ" หรือ "เเพ้" ทันที</div>
                        <div>เมื่อผู้เล่นชนะจะได้รับเงินเดิมพัน</div>
                      </div>
                      <h3>เมนู "สร้างเกม"</h3>
                      <div class="px-3 mb-3">
                        <div>เลือกตัวเลือกของท่าน ค้อน, กรรไกร, กระดาษ"</div>
                        <div>เลือกจำนวนเงินเดิมพัน</div>
                        <div>กด " สร้างเกม"</div>
                        <div>
                          ห้องของท่านจะเเสดงในเมนู" เล่นเกม "
                          (ผู้เล่นท่านอื่นจะไม่รู้ว่าท่านเลือกรูปอะไร)
                        </div>
                        <div>
                          เมื่อมีผู้เล่นท่านอื่นเลือกเดิมพันในห้องของท่าน
                          ระบบจะอัพเดทสถานะ ชนะ, เเพ้, เสมอ ในเมนู "ผลเเพ้ชนะ"
                          ทันที
                        </div>
                      </div>
                      <h3>เมนู "ผลเเพ้ชนะ"</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเสดง สถิติเล่นทั้งหมด ชนะ, เเพ้, เสมอ คิดเป็นกี่%
                        </div>
                        <div>ผลการเเข่งขันย้อนหลัง 20 รายการล่าสุด</div>
                      </div>
                      <h3>กติกา</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเต่ละห้องจะมีเวลาวางเดิมพัน 60 นาที (3,600วินาที)
                        </div>
                        <div>
                          เงินเดิมพันมีตั้งเเต่ 5, 10, 15, 20, 50, 100, 500,
                          10000
                        </div>
                        <div>สร้างเกมได้สูงสุด 5 ห้อง ใน เมนู"สร้างเกม"</div>
                        <div>เเต่ละห้องจะมีเวลาวางเดิมพัน 5 นาที</div>
                        <div>
                          เงื่อนไขการชนะ ค้อน ชนะ กรรไกร, กรรไกร ชนะ กระดาษ,
                          กระดาษ ชนะ ค้อน
                        </div>
                        <div>เมื่อชนะ จะได้รับเงินเดิมพัน</div>
                        <div>เมื่อเเพ้ จะเสียเงินเดิมพันตามจำนวนเดิมพัน</div>
                        <div>
                          เมื่อเสมอ (เลือกรูปเดียวกัน)
                          เงินเดิมพันจะยังคงอยู่เหมือนเดิม
                        </div>
                        <div>*ค่าน้ำ 5% จากยอดเดิมพันทั้งหมดจากผู้ชนะ</div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        ปิด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- จำนวนเงิน -->
            <div class="row col-12 px-0 mb-1 mx-0" id="cbet_price_container">
              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm01"
                  class="input-hidden"
                  value="5"
                  v-on:change="createGame"
                />
                <label
                  for="cm01"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">5 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm02"
                  class="input-hidden"
                  value="10"
                  v-on:change="createGame"
                />
                <label
                  for="cm02"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">10 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm03"
                  class="input-hidden"
                  value="15"
                  v-on:change="createGame"
                />
                <label
                  for="cm03"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">15 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm0"
                  class="input-hidden"
                  value="20"
                  v-on:change="createGame"
                />
                <label
                  for="cm0"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">20 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm1"
                  class="input-hidden"
                  value="50"
                  v-on:change="createGame"
                />
                <label
                  for="cm1"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">50 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm2"
                  class="input-hidden"
                  value="100"
                  v-on:change="createGame"
                />
                <label
                  for="cm2"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">100 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm3"
                  class="input-hidden"
                  value="150"
                  v-on:change="createGame"
                />
                <label
                  for="cm3"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">150 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm4"
                  class="input-hidden"
                  value="300"
                  v-on:change="createGame"
                />
                <label
                  for="cm4"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">300 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm5"
                  class="input-hidden"
                  value="500"
                  v-on:change="createGame"
                />
                <label
                  for="cm5"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">500 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm6"
                  class="input-hidden"
                  value="800"
                  v-on:change="createGame"
                />
                <label
                  for="cm6"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">800 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm7"
                  class="input-hidden"
                  value="1600"
                  v-on:change="createGame"
                />
                <label
                  for="cm7"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">1600 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-4 text-center bt-room">
                <input
                  v-model="cbet_price"
                  type="radio"
                  name="cbet_price"
                  id="cm8"
                  class="input-hidden"
                  value="3200"
                  v-on:change="createGame"
                />
                <label
                  for="cm8"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">3200 บาท</span>
                </label>
              </div>
            </div>

            <h5 class="text-left p-3">ตัวเลือกของท่าน</h5>
            <div id="cspin-board" v-if="!spin" class="mx-auto row">
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  v-model="choice"
                  type="radio"
                  name="cnewgame"
                  id="crock"
                  class="input-hidden"
                  value="r"
                  :checked="choice == 'r'"
                  v-on:change="createGame"
                />
                <label for="crock" class="bank-radio">
                  <img
                    src="../assets/img/rock.png"
                    alt="ค้อน"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>ค้อน</span>
                </label>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  v-model="choice"
                  type="radio"
                  name="cnewgame"
                  id="cscissors"
                  class="input-hidden"
                  value="s"
                  :checked="choice == 's'"
                  v-on:change="createGame"
                />
                <label for="cscissors" class="bank-radio">
                  <img
                    src="../assets/img/scissors.png"
                    alt="กรรไกร"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>กรรไกร</span>
                </label>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  v-model="choice"
                  type="radio"
                  name="cnewgame"
                  id="cpaper"
                  class="input-hidden"
                  value="p"
                  :checked="choice == 'p'"
                  v-on:change="createGame"
                />
                <label for="cpaper" class="bank-radio">
                  <img
                    src="../assets/img/paper.png"
                    alt="กระดาษ"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>กระดาษ</span>
                </label>
              </div>
            </div>
            <div
              id="cspinner"
              class="row col-12 text-center"
              style="max-width: 300px"
              v-if="spin"
            >
              <img
                src="../assets/img/yingchub-spin.gif"
                class="text-center"
                height="158"
                alt=""
              />
            </div>
            <div class="col-12 col-sm-12 py-3 text-center">
              <button
                @click="random()"
                id="cbtnsQRandom"
                class="btn btn-danger btn-lg px-3 text-white"
              >
                สุ่มเลือกตัวเลือก <i class="fas fa-bolt ml-1"></i>
              </button>
              <button
                @click="log()"
                id="cbtnsQRandom"
                class="btn btn-danger btn-lg px-3 text-white"
              >
                log <i class="fas fa-bolt ml-1"></i>
              </button>
            </div>
            <!-- ห้องประลอง/เกมของฉัน -->
            <div class="headfight">
              <ul class="row w-100 p-4">
                <li
                  @click="(status1 = 'k'), setActive('li3')"
                  class="btn nav-link col text-center bg-li"
                  :class="{ active: isActive('li3') }"
                >
                  ห้องประลอง
                </li>
                <li
                  @click="(status1 = 'z'), setActive('li4')"
                  class="btn nav-link col text-center bg-li"
                  :class="{ active: isActive('li4') }"
                >
                  เกมส์ของฉัน
                </li>
              </ul>

              <div v-if="status1 === 'k'" class="cardfight">
                <h5>รอผู้ท้าชิง</h5>
              </div>

              <div v-if="status1 === 'z'" class="cardfight">
                <h5>ยังไม่ได้สร้างเกมส์</h5>
              </div>
            </div>
          </div>
        </div>
        <!----------------------------------- เล่รกับบอท --------------------------------------------->
        <div v-if="status === 'b'">
          <h4><i class="bi bi-award"></i> เล่นกับบอท</h4>
          <div class="card">
            <h3 class="text-center mt-3">สร้างเกม</h3>
            <div class="d-flex justify-content-between mb-2 p-3">
              <h5 class="text-left align-self-center">จำนวนที่เดิมพัน</h5>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                กติกา & วิธีการเล่น
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">กติกา</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <h2>วิธีการเล่น</h2>
                      <h3>เมนู "เล่นเกม"</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเต่ละห้องจะเเสดงรูป ค้อน, กรรไกร, กระดาษ เเละ
                          ยอดเงินเดิมพัน"
                        </div>
                        <div>
                          เลือกรูป ค้อน, กรรไกร, กระดาษ
                          ได้เพียงอย่างใดอย่างหนึ่ง
                        </div>
                        <div>กด "OK" เพื่อวางเดิมพัน</div>
                        <div>ระบบจะเเสดงผล "ชนะ" หรือ "เเพ้" ทันที</div>
                        <div>เมื่อผู้เล่นชนะจะได้รับเงินเดิมพัน</div>
                      </div>
                      <h3>เมนู "สร้างเกม"</h3>
                      <div class="px-3 mb-3">
                        <div>เลือกตัวเลือกของท่าน ค้อน, กรรไกร, กระดาษ"</div>
                        <div>เลือกจำนวนเงินเดิมพัน</div>
                        <div>กด " สร้างเกม"</div>
                        <div>
                          ห้องของท่านจะเเสดงในเมนู" เล่นเกม "
                          (ผู้เล่นท่านอื่นจะไม่รู้ว่าท่านเลือกรูปอะไร)
                        </div>
                        <div>
                          เมื่อมีผู้เล่นท่านอื่นเลือกเดิมพันในห้องของท่าน
                          ระบบจะอัพเดทสถานะ ชนะ, เเพ้, เสมอ ในเมนู "ผลเเพ้ชนะ"
                          ทันที
                        </div>
                      </div>
                      <h3>เมนู "ผลเเพ้ชนะ"</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเสดง สถิติเล่นทั้งหมด ชนะ, เเพ้, เสมอ คิดเป็นกี่%
                        </div>
                        <div>ผลการเเข่งขันย้อนหลัง 20 รายการล่าสุด</div>
                      </div>
                      <h3>กติกา</h3>
                      <div class="px-3 mb-3">
                        <div>
                          เเต่ละห้องจะมีเวลาวางเดิมพัน 60 นาที (3,600วินาที)
                        </div>
                        <div>
                          เงินเดิมพันมีตั้งเเต่ 5, 10, 15, 20, 50, 100, 500,
                          10000
                        </div>
                        <div>สร้างเกมได้สูงสุด 5 ห้อง ใน เมนู"สร้างเกม"</div>
                        <div>เเต่ละห้องจะมีเวลาวางเดิมพัน 5 นาที</div>
                        <div>
                          เงื่อนไขการชนะ ค้อน ชนะ กรรไกร, กรรไกร ชนะ กระดาษ,
                          กระดาษ ชนะ ค้อน
                        </div>
                        <div>เมื่อชนะ จะได้รับเงินเดิมพัน</div>
                        <div>เมื่อเเพ้ จะเสียเงินเดิมพันตามจำนวนเดิมพัน</div>
                        <div>
                          เมื่อเสมอ (เลือกรูปเดียวกัน)
                          เงินเดิมพันจะยังคงอยู่เหมือนเดิม
                        </div>
                        <div>*ค่าน้ำ 5% จากยอดเดิมพันทั้งหมดจากผู้ชนะ</div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        ปิด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- จำนวนเงิน -->
            <div class="row col-12 px-0 mb-1 mx-0" id="cbet_price_container">
              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm01"
                  class="input-hidden"
                  value="5"
                />
                <label
                  for="cm01"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">5 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm02"
                  class="input-hidden"
                  value="10"
                />
                <label
                  for="cm02"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">10 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm03"
                  class="input-hidden"
                  value="15"
                />
                <label
                  for="cm03"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">15 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm0"
                  class="input-hidden"
                  value="20"
                />
                <label
                  for="cm0"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">20 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm1"
                  class="input-hidden"
                  value="50"
                />
                <label
                  for="cm1"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">50 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm2"
                  class="input-hidden"
                  value="100"
                />
                <label
                  for="cm2"
                  class="bank-radio rate1 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">100 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm3"
                  class="input-hidden"
                  value="150"
                />
                <label
                  for="cm3"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">150 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm4"
                  class="input-hidden"
                  value="300"
                />
                <label
                  for="cm4"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">300 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm5"
                  class="input-hidden"
                  value="500"
                />
                <label
                  for="cm5"
                  class="bank-radio rate2 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">500 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm6"
                  class="input-hidden"
                  value="800"
                />
                <label
                  for="cm6"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">800 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm7"
                  class="input-hidden"
                  value="1600"
                />
                <label
                  for="cm7"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">1600 บาท</span>
                </label>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 text-center bt-room">
                <input
                  type="radio"
                  name="cbet_price"
                  id="cm8"
                  class="input-hidden"
                  value="3200"
                />
                <label
                  for="cm8"
                  class="bank-radio rate3 silver-btn"
                  style="box-shadow: none"
                >
                  <span style="white-space: nowrap">3200 บาท</span>
                </label>
              </div>
            </div>

            <h5 class="text-left p-3">ตัวเลือกของท่าน</h5>
            <div id="cspin-board" class="mx-auto">
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  type="radio"
                  name="cnewgame"
                  id="crock"
                  class="input-hidden"
                  value="r"
                />
                <label for="crock" class="bank-radio">
                  <img
                    src="../assets/img/rock.png"
                    alt="ค้อน"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>ค้อน</span>
                </label>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  type="radio"
                  name="cnewgame"
                  id="cscissors"
                  class="input-hidden"
                  value="s"
                />
                <label for="cscissors" class="bank-radio">
                  <img
                    src="../assets/img/scissors.png"
                    alt="กรรไกร"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>กรรไกร</span>
                </label>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 text-center">
                <input
                  type="radio"
                  name="cnewgame"
                  id="cpaper"
                  class="input-hidden"
                  value="p"
                />
                <label for="cpaper" class="bank-radio">
                  <img
                    src="../assets/img/paper.png"
                    alt="กระดาษ"
                    class="icon-bank"
                    style="background: #eee; cursor: pointer"
                  />
                  <br />
                  <span>กระดาษ</span>
                </label>
              </div>
            </div>

            <div class="col-12 col-sm-12 py-3 text-center">
              <button
                id="cbtnsQRandom"
                class="btn btn-danger btn-lg px-3 text-white"
              >
                สุ่มเลือกตัวเลือก <i class="fas fa-bolt ml-1"></i>
              </button>
            </div>
          </div>
        </div>

        <div v-if="status === 'c'">
          <h4><i class="bi bi-award"></i> ผลแพ้ชนะ</h4>
          <div
            class="bgwhitealpha shadow-sm rounded p-2 xtarget col-lotto mb-5 yc"
            id="ying_choop_result"
            style=""
          >
            <h5 class="mt-5 mb-3 text-light text-center">
              <i class="fas fa-dice"></i> อัตราแพ้ชนะ
            </h5>
            <div class="row m-0">
              <div class="col-12 col-sm-12 px-0">
                <div class="w-100 mb-2 mt-2"></div>
                <div class="row m-0">
                  <div class="col-6 p-1">
                    <div class="silver-btn1 rounded text-center py-1">
                      <small class="text-dark">เล่นทั้งหมด</small>
                      <h5 id="mytotal" class="text-dark">0</h5>
                    </div>
                  </div>
                  <div class="col-6 p-1">
                    <div class="silver-btn1 rounded text-center py-1">
                      <small class="text-dark">ชนะ</small>
                      <h5 id="mywin" class="text-dark">0</h5>
                    </div>
                  </div>
                  <div class="col-6 p-1">
                    <div class="silver-btn1 rounded text-center py-1">
                      <small class="text-dark">แพ้</small>
                      <h5 id="mylost" class="text-dark">0</h5>
                    </div>
                  </div>
                  <div class="col-6 p-1">
                    <div class="silver-btn1 rounded text-center py-1">
                      <small class="text-dark">อัตราชนะ</small>
                      <h5 id="mywinratio" class="text-dark">0%</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-12 px-0">
                <div class="bg-transparent p-0 rounded h-100 w-100">
                  <h5 class="mt-3 text-light">
                    <i class="fas fa-history"></i> ผลแพ้ชนะ
                    <small class="font-weight-light"> 20 รายการล่าสุด</small>
                  </h5>
                  <div class="w-100 mb-2 mt-2"></div>
                  <div class="row" id="mystatls"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NavbarMember from "../components/NavbarMember.vue";
import io from "socket.io-client";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import $ from 'jquery'
const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

export default {
  name: "Game",
  data() {
    return {
      spin: false,
      status: "a",
      status1: "x",
      activeItem: "li",
      cbet_price: "",
      choice: "",
      socket: {},
    };
  },
  created() {
    this.socket = io("http://localhost:3000");
    this.socket.on("connected", (data) => {
      console.log(data);
      this.socket.emit("join", "yingchub");
    });
  },
   mounted ()  {
     this.socket.on("join_res", (data) => {
      console.log(data);
    });
     this.socket.on("s", (data) => {
      console.log(data);
    });
     this.socket.on("new_room", () => {
      console.log('asd');
    });
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
    log: function () {
      console.log(this.cbet_price, this.choice);
    },
    random: function () {
      const choices = ["r", "s", "p"];
      let randomNumber = Math.floor(Math.random() * 3);
      this.choice = choices[randomNumber];
      this.createGame();
    },
    createGame: async function () {
      if (this.cbet_price != "" && this.choice != "") {
        this.newGame();
        this.spin = true;
        setTimeout(() => {
          this.spin = false;
        }, 1000);
      } else {
        this.$toast.warning("กรุณาเลือกจำนวนเงินเดิมพัน", {
          timeout: 2000,
        });
      }
    },
    newGame: function () {
      this.socket.emit(
        "create_room",
        {
          username: "wasanthon",
          user_id: 528,
          userChoice: this.choice,
          bet: this.cbet_price,
        },
        "yingchub"
      );
    },
    create_room_div: function (u_id, id, username, bet, date, date_end) {
      var template =
        `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=`+id+`>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop"><img src="/member/assets/images/userImg/user-128.png" alt="" class="d-inline rounded-circle border mr-1" width="30" height="30"></span>
                            <span class="ycb_image_d imgbelow"><img src="/member/assets/images/userImg/user-128.png" alt="" class="d-inline rounded-circle border mr-1" width="30" height="30"></span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">`+username+`</span></span>
                    </div>
                    <div class="d-none d-lg-flex justify-content-end align-items-center">
                        <span class="badge badge-dark">เลือกเพื่อทายผล</span><i class="d-none d-lg-flex far fa-hand-point-right mx-2"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ `+bet+`</span>
                    </div>
                </div>
                <div class="d-flex d-lg-none flex-fill justify-content-center p-0">
                    <span class="badge badge-dark font-weight-normal">เลือกเพื่อทายผล</span>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act1" data-original-title="ค้อน" onclick="VSClick(`+id+`,'` +
        username +
        `',1,`+bet+`)">
                                <img src="../assets/img/rock.png" alt="ค้อน" width="120%">
                                <p><div class="txt-dark">ค้อน</div></p>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act2" data-original-title="กรรไกร" onclick="VSClick(`+id+`,'` +
        username +
        `',2,`+bet+`)">
                                <img src="../assets/img/scissors.png" alt="กรรไกร" width="120%">
                                <p><div class="txt-dark">กรรไกร</div></p>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act3" data-original-title="กระดาษ" onclick="VSClick(`+id+`,'` +
        username +
        `',3,`+bet+`)">
                                <img src="../assets/img/paper.png" alt="กระดาษ" width="120%">
                                <p><div class="txt-dark">กระดาษ</div></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="`+date_end+`"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="` + date +`">date}</span></small>
                </div>
            </div>
        </div>
    </div>`;
      if (u_id != 528) {
        $("#game_list").append(template);
        // doCountdown();
      }
    },
  },
  components: {
    NavbarMember,
  },
};
</script>

<style scoped>
.txt-money {
  background: white;
  border-radius: 10px;
  padding: 5px;
  font: 15px bold;
}
.cardfight {
  width: 96%;
  background: #fff;
  margin: 0 auto 30px auto;
  min-height: 100px;
}
.headfight {
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
  border-radius: 5px;
}
.bg-li {
  background: rgb(190, 6, 6);
  color: #fff;
  padding: 10px;
  margin: 0 10px;
}
#cspin-board {
  padding: 30px;
}
#cspin-board span {
  color: black;
}
#cspin-board img {
  width: 150px;
  border-radius: 0;
}
#cspin-board input[type="radio"]:checked + label {
  background: rgb(190, 6, 6);
  color: #0003ca;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
#cspin-board input[type="radio"]:checked + label span {
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
#cspin-board input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
  color: #fff;
}
#cspin-board .input-hidden {
  position: absolute;
  left: -9999px;
  color: #fff;
}
.silver-btn {
  background: rgb(190, 6, 6);
  color: #000;
}
.silver-btn1 {
  background: rgb(255, 255, 255);
  color: #000;
}
.bt-room input[type="radio"] {
  visibility: hidden;
  height: 0;
  width: 0;
}
input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
  color: #fff;
}
.input-hidden {
  position: absolute;
  left: -9999px;
  color: #fff;
}
button,
input {
  overflow: visible;
  color: #fff;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: #fff;
}
input[type="radio" i] {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 0px 5px;
  padding: initial;
  border: initial;
}
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;

  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  color: #fff;

  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  color: #fff;
}
input[type="radio"]:checked + label {
  background: #0003ca;
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
input[type="radio"] + label {
  margin-bottom: 15px !important;
  color: #fff;
}
.bt-room label {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  background-color: #a80a0a;
  color: white;
  padding: 5px 5px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0px !important;
}
.Game {
  height: 100vh;
}
.bg-wi2 {
  background: white;
  height: 100%;
  border-radius: 20px;
}
h4 {
  /* margin-top: 20px; */
  color: white;
  margin-bottom: 0;
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
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.wi2 {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(170, 0, 200, 1) 0%,
    rgb(78, 96, 252) 100%
  );
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
  background: blue;
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
.wi2 ul li:hover,
.wi2 ul li.active {
  background: #0003ca;
  color: white;
}
.wi ul li:hover,
.wi ul li.active {
  background: linear-gradient(
    90deg,
    rgba(170, 0, 200, 1) 0%,
    rgba(0, 7, 71, 1) 100%
  );
  color: white;
}
.wi li:hover {
  background: red;
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
  #cspin-board .mx-auto .row {
    display: block!important;
  }
}
</style>