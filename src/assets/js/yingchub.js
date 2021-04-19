$( document ).ready(async function(){
    var socket;
    await gameConnect();
    setTimer();
    showLoadSplash();
    hideLoadSplash();
    $('#ask_confirm').change(function () {
        confirm_update(this);
    });

    $("#display_setting").change(function (e1) { //ถ้าการแสดงห้องเปลี่ยน
        var dispItemsSetting = $(e1.target).val();
        localStorage.setItem('HLdisplaySetting', dispItemsSetting);
        updateMaxGameDisplay(dispItemsSetting);
        if ($('#pills-me-tab').hasClass('active')) {
            numclick(1, 'mygame_list');
        } else if ($('#pills-home-tab').hasClass('active')) {
            numclick(1, 'game_list');
        }
        // console.log(myMaxGameDisplay);
        //เก็บค่าตัวเลือกการแสดงห้อง
    });

    $('.ying_modal').on('hidden.bs.modal', function () {
        cradioChoice.prop('checked', false);
        qradioChoice.prop('checked', false);
    })

    $('#pills-me-tab').click(function (){
        numclick(1, 'mygame_list');
    });

    $('#pills-home-tab').click(function (){
        numclick(1, 'game_list');
    })

    if (!maxGameDisplay) {
        localStorage.setItem('YCdisplaySetting', 6); //เก็บค่า การแสดงห้องไว้ใน localstorage
        maxGameDisplay = 6;
    }

    if ($('#ying_choop_qcreate').is(':visible')) {
        updateMaxGameDisplay(maxGameDisplay);
        setLastMaxGameDisplayStat();
    }

    if (ask_confirm == null || ask_confirm =='') {
        localStorage.setItem('confirm', true);
        ask_confirm=true;
    } else {
        if (ask_confirm == 'true') {
            ask_confirm = true;
        } else {
            ask_confirm = false;
        }
        $('#ask_confirm').prop('checked', ask_confirm).change();
    }

    // เล่นกับผู้เล่น
    cradioBet.change(
        function () {
            if ($(this).is(':checked') && cradioChoice.is(':checked')) {
                create_room($('input:radio[name="cnewgame"]:checked').val());
                showLoadSplash();
                hideLoadSplash();
            }
        });
    cradioChoice.change(
        function () {
            if ($(this).is(':checked') && cradioBet.is(':checked')) {
                create_room($('input:radio[name="cnewgame"]:checked').val());
                showLoadSplash();
                hideLoadSplash();
            }
        });
    $('#cbtnsQRandom').click(function () {
        cradioChoice.filter('[value=' + getUserChoice() + ']').prop('checked', true);
        $('#cspin-board').addClass('d-none');
        $('#cspinner').removeClass('d-none');
        $('#cbtnsQRandom').addClass('disabled');
        setTimeout(function () {
            $('#cspinner').addClass('d-none');
            $('#cspin-board').removeClass('d-none');
            $('#cbtnsQRandom').removeClass('disabled');
            showLoadSplash();
            hideLoadSplash();
            if (cradioBet.is(':checked')) {
                create_room_random($('input:radio[name="cnewgame"]:checked').val());
            }
        }, 1000);
    });

    //เล่นกับบอท
    qradioBet.change(
        function () {
            if ($(this).is(':checked') && qradioChoice.is(':checked')) {
                game($('input:radio[name="qnewgame"]:checked').val());
                showLoadSplash();
                hideLoadSplash();
            }
        });
    qradioChoice.change(
        function () {
            if ($(this).is(':checked') && qradioBet.is(':checked')) {
                game($('input:radio[name="qnewgame"]:checked').val());
                showLoadSplash();
                hideLoadSplash();
            }
        });
    $('#qbtnsQRandom').click(function () {
        var va = getUserChoice();
        qradioChoice.filter('[value=' + va + ']').prop('checked', true);
        $('#qspin-board').addClass('d-none');
        $('#qspinner').removeClass('d-none');
        $('#qbtnsQRandom').addClass('disabled');
        setTimeout(function () {
            $('#qspinner').addClass('d-none');
            $('#qspin-board').removeClass('d-none');
            $('#qbtnsQRandom').removeClass('disabled');
            // showLoadSplash();
            // hideLoadSplash();
            if (qradioBet.is(':checked')) {
                gameRandom($('input:radio[name="qnewgame"]:checked').val());
            }
        }, 1000);
    });

    $('.btn-af').click(function () {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
        // console.log($(this).text());
        const menu = $(this).text().trim();
        if (menu == "เล่นกับผู้เล่น") {
            showLoadSplash();
            hideLoadSplash();
            $('.yc').hide();
            $('#ying_choop_qcreate').show();
            $('#ying_choop_vs').show();
        } else if (menu == "เล่นกับบอท") {
            $('.yc').hide();
            $('#ying_choop_vs_bot').show();
        } else if (menu == "ผลแพ้ชนะ") {
            showLoadSplash();
            hideLoadSplash();
            $('.yc').hide();
            $('#ying_choop_result').show();
            setupMydata();
        } else if (menu == "อันดับ") {
            showLoadSplash();
            hideLoadSplash();
            $('.yc').hide();
            $('#ying_choop_hiscore').show();
            setupTop20();
        }
    });
    socket.on('disconnect',()=>{
        console.log('discon');
        showLoadSplash();
    })
    socket.on('connected',(data)=>{
        console.log('connect');
        socket.emit('join','yingchub');
        hideLoadSplash();
        reload();
    })

// เล่นกับผู้เล่น
    socket.on('new_room', (data) => {
        var count = GameCount();
        if (count != maxGameDisplay) {
            create_room_div(data.user_id, data.room_id, data.username, data.bet, data.created_date, data.date_end, data.new_rc);
        }
        if (user_id != data.user_id) {
            updategameCount(data.new_rc)
        }
    });//
    socket.on('new_myroom', (data) => {
        var count = MygameCount();
        // console.log(count+' '+maxGameDisplay);
        if (count != maxGameDisplay) {
            create_myroom_div(data.user_id, data.room_id, data.userchoice, data.username, data.bet, data.created_date, data.date_end);
        } else {
            numclick(1, 'mygame_list');
        }
        updateMygameCount(data.new_mrc);
        // console.log(data.new_mrc);//updatemycount
        $('span #credit_balance').empty();
        var new_balance = data.newCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('span #credit_balance').text(new_balance + ' ฿');
        toastr.info(convertToword(data.userchoice) + ' เงิน ' + data.bet + ' บาท', 'สร้างห้องสำเร็จ');
        cradioChoice.prop('checked', false);
    });//
    socket.on('add_room_res', function (data) {
        add_room_render(data.game_list);
    })
    socket.on('add_myroom_res', function (data) {
        add_myroom_render(data.game_list);
    })
    socket.on('numclick_res',(data)=>{
        if ($('#pills-me-tab').hasClass('active')) {
            var type = 'all';
            var pa_id = 'pills-me'
        } else if ($('#pills-home-tab').hasClass('active')) {
            var type = 'my';
            var pa_id = 'pills-home';
        }
        if (data.type == 'all') {
            render_room_div(data.game_list)
        } else {
            render_myroom_div(data.game_list)
        }
        $('.page-btn#' + pa_id + ' button').remove();
        if (data.prev != '') {
            $('.page-btn#' + pa_id + '').append(data.prev);
        }
        $('.page-btn#' + pa_id + '').append(data.num_list);
        if (data.next != '') {
            $('.page-btn#' + pa_id + '').append(data.next);
        }
        updateMygameCount(data.new_mrc);
        updategameCount(data.new_rc);
    });//
    socket.on('onVsclick_res', function (data) {
        var page = $('.page-btn>button.active').text();
        var last_page = $('.page-btn>button').last().text();
        if (page == '') {
            page = 1;
        }
        if ($('#pills-home-tab').hasClass('active')) {
            // numclick(1, 'game_list', 'vsclick', last_page);
        }
        var bet_vat = data.bet - (data.bet * vatbet / 100);
        switch (data.result) {
            case 'win':
                toastr.success('+' + bet_vat + ' ฝ่ายตรงข้าม ออก' + convertToword(data.host_choice), 'ชนะ');
                break;
            case 'lose':
                toastr.error('-' + data.bet + ' ฝ่ายตรงข้าม ออก' + convertToword(data.host_choice), 'แพ้');
                break;
            case 'draw':
                toastr.info('ฝ่ายตรงข้าม ออก' + convertToword(data.host_choice), 'เสมอ');
                break;
        }
    });
    socket.on('vsbot_res', (data) => {
        console.log(data);
        $('.ying_modal').modal('show');
        $('span #credit_balance').empty();
        var new_balance = data.newCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('span #credit_balance').text(new_balance + ' ฿');
    });
    socket.on(user_id + 'win', function (data) {
        console.log(data.new_mrc);
        $('#mygame_list').children().remove('#' + data.room_id);
        var bet_vat = data.bet - (data.bet * vatbet / 100);
        toastr.success(data.guest_name + ' เลือก ' + convertToword(data.guest_choice) + ' vs ' + convertToword(data.host_choice) + ' เกม ' + '#' + data.room_id + ' ได้เงิน ' + data.bet + '+' + bet_vat, 'ชนะ');
        updateMygameCount(data.new_mrc);
    })
    socket.on(user_id + 'lose', function (data) {
        console.log(data.new_mrc);
        $('#mygame_list').children().remove('#' + data.room_id);
        toastr.error(data.guest_name + ' เลือก ' + convertToword(data.guest_choice) + ' vs ' + convertToword(data.host_choice) + ' เกม ' + '#' + data.room_id + ' เสียเงิน ' + data.bet, 'แพ้');
        updateMygameCount(data.new_mrc);
    })
    socket.on(user_id + 'draw', function (data) {
        console.log(data.new_mrc);
        $('#mygame_list').children().remove('#' + data.room_id);
        toastr.info(data.guest_name + ' เลือก ' + convertToword(data.guest_choice) + ' vs ' + convertToword(data.host_choice) + ' เกม ' + '#' + data.room_id + ' คืนเงิน ' + data.bet, 'เสมอ');
        updateMygameCount(data.new_mrc);
    })
    socket.on('stat' + user_id, (data) => {
        if (data.newCredit != undefined) {
            $('span #credit_balance').empty();
            var new_balance = data.newCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('span #credit_balance').text(new_balance + ' ฿');
            doViewMyData(data.mystat);
        } else {
            doViewMyData(data.mystat);
        }
    });
    socket.on('outCredit',()=>{
        toastr.warning('จำนวนเงินของคุณไม่พอ');
    });
    socket.on('room_has_played', function (data) {
        toastr.warning('ห้องนี้ถูกเล่นไปแล้ว')
    })
    socket.on('remove_display', (data) => {
        console.log(data);
        if(data.host_id != user_id){
            $('#game_list').children().remove('#' + data.room_id);
            updategameCount(data.new_rc);
            get_add_room('remove_display');
        }else {
            $('#mygame_list').children().remove('#' + data.room_id);
            get_add_room('windrawlose&timeout');
        }
    });

    function create_room(userChoice) {
        if (cradioBet.is(':checked')) {
            console.log('create');
            var bet = $('input[name="cbet_price"]:checked').val();
            socket.emit('create_room', {username: user_name, user_id: user_id, userChoice: userChoice, bet: bet},'yingchub');
        } else {
            toastr.warning('กรุณาเลือกจำนวนเงินเดิมพัน', 'ตำเตือน');
        }
    }
    function create_room_random() {
        var userChoice = getUserChoice();
        if (cradioBet.is(':checked')) {
            var bet = $('input[name="cbet_price"]:checked').val();
            socket.emit('create_room', {username: user_name, user_id: user_id, userChoice: userChoice, bet: bet},'yingchub');
        } else {
            toastr.warning('กรุณาเลือกจำนวนเงินเดิมพัน', 'ตำเตือน');
        }
    }
    function get_add_room(event){
        if(event == 'remove_display'){
            var id_rc = $('#game_list').children();
            var start = id_rc.length;
            var end = maxGameDisplay - (id_rc.length)
            socket.emit('add_room',{action:'remove_display',user_id:user_id,start:start,end:end},'yingchub')
        }else {
            var id_rc = $('#mygame_list').children();
            var start = id_rc.length;
            var end = maxGameDisplay - (id_rc.length)
            socket.emit('add_room',{action:'win_draw_lose',user_id:user_id,start:start,end:end},'yingchub')
        }
    }
    function add_room_render(datas){
        if (datas != null) {
            var template = '';
            for (var i = 0; i < datas.length; i++) {
                template += `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=` + datas[i].id + `>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop">
                            <img src="/member/assets/images/userImg/user-${datas[i].user_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png"></span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">` + datas[i].user_name + `</span></span>
                    </div>
                    <div class="d-none d-lg-flex justify-content-end align-items-center">
                        <span class="badge badge-dark">เลือกเพื่อทายผล</span><i class="d-none d-lg-flex far fa-hand-point-right mx-2"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ` + datas[i].bet + `</span>
                    </div>
                </div>
                <div class="d-flex d-lg-none flex-fill justify-content-center p-0">
                    <span class="badge badge-dark font-weight-normal">เลือกเพื่อทายผล</span>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act1" data-original-title="ค้อน" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',1,${datas[i].bet})">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="txt-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act2" data-original-title="กรรไกร" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',2,${datas[i].bet})">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="txt-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act3" data-original-title="กระดาษ" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',3,${datas[i].bet})">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="txt-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="` + datas[i].timeset + `"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">` + dateFormat(datas[i].created_date) + `</span></small>
                </div>
            </div>
        </div>
    </div>`;
            }
            $('#game_list').append(template);
        }
    }
    function add_myroom_render(datas){
        if (datas != null) {
            // console.log(datas);
            var template = '';
            for (var i = 0; i < datas.length; i++) {
                var img1dis = 'disabled btn-secondary';
                var img2dis = 'disabled btn-secondary';
                var img3dis = 'disabled btn-secondary';
                switch (datas[i].choice) {
                    case 'r':
                        img1dis = 'btn-light';
                        break;
                    case 's':
                        img2dis = 'btn-light';
                        break;
                    case 'p':
                        img3dis = 'btn-light';
                        break;
                }

                template += `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=` + datas[i].id + `>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop">
                            <img src="/member/assets/images/userImg/user-${datas[i].user_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png"></span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">` + datas[i].user_name + `</span></span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ` + datas[i].bet + `</span>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act1 `+img1dis+`" data-original-title="ค้อน">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="txt-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act2 `+img2dis+`" data-original-title="กรรไกร">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="txt-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act3 `+img3dis+`" data-original-title="กระดาษ">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="txt-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="` + datas[i].timeset + `"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">` +dateFormat(datas[i].created_date)  + `</span></small>
                </div>
            </div>
        </div>
    </div>`;
            }
            $('#mygame_list').append(template);
        }
    }
    function create_room_div(u_id, id, username, bet, date, date_end, rc) {

        var template = `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=${id}>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop">
                            <img src="/member/assets/images/userImg/user-${u_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png">
                            </span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">${username}</span></span>
                    </div>
                    <div class="d-none d-lg-flex justify-content-end align-items-center">
                        <span class="badge badge-dark">เลือกเพื่อทายผล</span><i class="d-none d-lg-flex far fa-hand-point-right mx-2"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ${bet}</span>
                    </div>
                </div>
                <div class="d-flex d-lg-none flex-fill justify-content-center p-0">
                    <span class="badge badge-dark font-weight-normal">เลือกเพื่อทายผล</span>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act1" data-original-title="ค้อน" onclick="VSClick(${id},'`+username+`',1,${bet})">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="txt-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act2" data-original-title="กรรไกร" onclick="VSClick(${id},'`+username+`',2,${bet})">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="txt-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act3" data-original-title="กระดาษ" onclick="VSClick(${id},'`+username+`',3,${bet})">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="txt-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="${date_end}"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">${date}</span></small>
                </div>
            </div>
        </div>
    </div>`;
        if (u_id != user_id) {
            $('#game_list').append(template);
            // doCountdown();
        }
    } //
    function create_myroom_div(user_id, id, choice, username, bet, date, date_end) {
        var img1dis = 'disabled btn-secondary';
        var img2dis = 'disabled btn-secondary';
        var img3dis = 'disabled btn-secondary';
        switch (choice) {
            case 'r':
                img1dis = 'btn-light';
                break;
            case 's':
                img2dis = 'btn-light';
                break;
            case 'p':
                img3dis = 'btn-light';
                break;
        }

        var template = `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=` + id + `>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop"><img src="/member/assets/images/userImg/user-${user_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png"></span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">` + username + `</span></span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ` + bet + `</span>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act1 `+img1dis+`" data-original-title="ค้อน">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="txt-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act2 `+img2dis+`" data-original-title="กรรไกร">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="txt-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-secondary btn-sm btn-block btn-hand ycb_act3 `+img3dis+`" data-original-title="กระดาษ">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="txt-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="` + date_end + `"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">` + date + `</span></small>
                </div>
            </div>
        </div>
    </div>`;

        $('#mygame_list').append(template);
    }//
    function render_room_div(datas, element) {
        if (datas != null) {
            var template = '';
            for (var i = 0; i < datas.length; i++) {
                template += `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=` + datas[i].id + `>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop">
                            <img src="/member/assets/images/userImg/user-${datas[i].user_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png"></span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">` + datas[i].user_name + `</span></span>
                    </div>
                    <div class="d-none d-lg-flex justify-content-end align-items-center">
                        <span class="badge badge-dark">เลือกเพื่อทายผล</span><i class="d-none d-lg-flex far fa-hand-point-right mx-2"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ` + datas[i].bet + `</span>
                    </div>
                </div>
                <div class="d-flex d-lg-none flex-fill justify-content-center p-0">
                    <span class="badge badge-dark font-weight-normal">เลือกเพื่อทายผล</span>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act1" data-original-title="ค้อน" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',1,${datas[i].bet})">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="text-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act2" data-original-title="กรรไกร" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',2,${datas[i].bet})">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="text-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act3" data-original-title="กระดาษ" onclick="VSClick(${datas[i].id},'`+datas[i].user_name+`',3,${datas[i].bet})">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="text-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="` + datas[i].timeset + `"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">` + dateFormat(datas[i].created_date) + `</span></small>
                </div>
            </div>
        </div>
    </div>`;
            }
            $('#game_list').html(template);
        }
    }
    function render_myroom_div(datas, element) {
        if (datas != null) {
            // console.log(datas);
            var template = '';
            for (var i = 0; i < datas.length; i++) {
                var img1dis = 'disabled btn-secondary';
                var img2dis = 'disabled btn-secondary';
                var img3dis = 'disabled btn-secondary';
                switch (datas[i].choice) {
                    case 'r':
                        img1dis = 'btn-light';
                        break;
                    case 's':
                        img2dis = 'btn-light';
                        break;
                    case 'p':
                        img3dis = 'btn-light';
                        break;
                }

                template += `<div class="animated col-12 col-sm-12 col-md-6 px-1 ycb_item" style="" id=` + datas[i].id + `>
        <div class="rounded border p-1 w-100 mb-2 bg bg-rate1">
            <div class="row m-0">
                <div class="col-12 col-lg-4 p-1 d-flex flex-row flex-sm-row flex-lg-column justify-content-between text-white">
                    <div class="d-flex align-items-center">
                        <span class="imgCnt">
                            <span class="ycb_image imgtop">
                            <img src="/member/assets/images/userImg/user-${datas[i].user_id}.jpg"
                                     class="d-inline rounded-circle border mr-1" width="40" height="40"
                                     onerror=this.src="assets/images/userImg/user-128.png">
                            </span>
                        </span>
                        <span class="ycb_username"><span class="d-inline-block text-truncate" style="max-width: 130px;">` + datas[i].user_name + `</span></span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-coins mr-1"></i>
                        <span class="thb ycb_bet_price badge font-weight-normal">฿ ` + datas[i].bet + `</span>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-8">
                    <div class="row">
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act1 `+img1dis+`" data-original-title="ค้อน">
                                <img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="100%">
                                <div class="txt-dark">ค้อน</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act2 `+img2dis+`" data-original-title="กรรไกร">
                                <img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="100%">
                                <div class="txt-dark">กรรไกร</div>
                            </div>
                        </div>
                        <div class="col-4 p-1 text-center mb-0">
                            <div class="btn btn-light btn-sm btn-block btn-hand ycb_act3 `+img3dis+`" data-original-title="กระดาษ">
                                <img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="100%">
                                <div class="txt-dark">กระดาษ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 bg-dark text-light rounded px-2 py-0 d-flex justify-content-between align-items-center">
                    <small class="">
                        <i class="fal fa-hourglass-half mx-1"></i><span class="countdown-number countdown" data-finaldate="` + datas[i].timeset + `"></span>
                    </small>
                    <small><i class="fal fa-clock mx-1"></i><span class="create_time">` +dateFormat(datas[i].created_date)  + `</span></small>
                </div>
            </div>
        </div>
    </div>`;
            }
            $('#mygame_list').html(template);
        }
    }
    function numclick(page, e, event, last_page) {
        console.log('numclick');
        if (e == 'game_list' || e == 'mygame_list') {
            var ele = e;
            if (ele == 'game_list') {
                var type = 'all';
                var pa_id = 'all_game';
            } else if (ele == 'mygame_list') {
                var type = 'my';
                var pa_id = 'my_game';
            }
        } else {
            var ele = $(e).parent().prev().attr('id');
            var pa_id = $(e).parent().attr('id');
            if (ele == 'game_list') {
                var type = 'all';
            } else if (ele == 'mygame_list') {
                var type = 'my';
            }
        }
        socket.emit('numclick',{action: 'numclick',
            user_id: user_id,
            page: page,
            type: type,
            event: event,
            maxpage: maxGameDisplay,
            last_page: last_page},'yingchub')
    }
    VSClick = function(id, username, choice, bet){
        if(ask_confirm){
            var str = yingchubToString(choice);
            showConfirm('ห้องที่'+" #" + id,
                'คุณต้องการเล่น' + " '" + str + "' " + actIcon(choice) + " " + 'ด้วยเงิน' + " " + bet + " " + 'กับ' + " " + username,
                'ตกลง',
                'ยกเลิก', id,choice);
        }else{
            onVsclick(id,choice);
        }
    }//
    function onVsclick(room_id,c) {
        socket.emit('vs_click', {room_id: room_id, user_id: user_id, vschoice: c},'yingchub')
    }
    function game(userChoice) {
        let computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                break;
        }
    }
    function gameRandom() {
        var computerChoice = getComputerChoice();
        var userChoice = getUserChoice();
        // console.log(userChoice+computerChoice);
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                break;
        }
    }
    function vsbot(result, uChoice, cChoice) {
        // var userChoice = convertToword(uChoice);
        var bet = $('input[name="qbet_price"]:checked').val();
        var computerChoice = convertToword(cChoice);
        var userChoice = convertToword(uChoice);
        // console.log(userChoice);
        socket.emit('vsbot', {
            username: user_name,
            user_id: user_id,
            userChoice: userChoice,
            ComputerChoice: computerChoice,
            result: result,
            bet: bet,
        },'yingchub');
    }
    function win(user, comp) {
        modalWord('คุณชนะ!', user, comp);
        vsbot('win', user, comp);
    }//
    function lose(user, comp) {
        modalWord('คุณแพ้!', user, comp);
        vsbot('lose', user, comp);
    }//
    function draw(user, comp) {
        modalWord('เสมอ!', user, comp);
        vsbot('draw', user, comp);
    }//
    function doViewMyData(data) {
        var llist = '';
        var winner = 0;
        var loser = 0;
        for (var i = 0; i < data.length; i++) {

            var tmp = data[i];
            if (user_id == tmp.winner_uid) {
                winner++;
            }
            if (tmp.winner_uid > 0 && user_id != tmp.winner_uid) {
                loser++;
            }

            var left_bet = convertToword(tmp.host_choice);
            var right_bet = convertToword(tmp.guest_choice);
            var left_bet_image = betToImageLink(tmp.host_choice, true);
            var right_bet_image = betToImageLink(tmp.guest_choice, false);
            var imglTag = '';
            if (left_bet_image != '') {
                imglTag = '<img src="' + left_bet_image + '" alt="' + left_bet + '" class="d-inline rounded-circle border" width="40">';
            }
            var imgRTag = '';
            if (right_bet_image != '') {
                imgRTag = '<img src="' + right_bet_image + '" alt="' + right_bet + '" class="d-inline rounded-circle border" width="40">';
            }
            var lw_left = "";
            var lw_right = "";
            var tablecss = "";
            var badgecssL = "";
            var badgecssR = "";
            var textcssL = "";
            var textcssR = "";

            if (tmp.host_uid == user_id) {
                if (tmp.host_uid == tmp.winner_uid) { //win
                    tablecss = 'table-success';
                    lw_left = 'ชนะ';
                    lw_right = "";
                    badgecssL = "badge-success";
                    badgecssR = "";
                    textcssL = "text-success";
                    textcssR = "";
                } else if (tmp.guest_uid == tmp.winner_uid) {
                    tablecss = 'table-danger';
                    lw_left = 'แพ้';
                    lw_right = "";
                    badgecssL = "badge-danger";
                    badgecssR = "";
                    textcssL = "text-danger";
                    textcssR = "";
                } else {
                    tablecss = 'table-dark';
                    lw_left = 'หมดเวลา';
                    lw_right = "";
                    badgecssL = badgecssR = "badge-dark";
                    textcssL = textcssR = "text-dark";
                    tmp.guest_name = "???";
                }
            } else if (tmp.guest_uid == user_id) {
                if (tmp.guest_uid == tmp.winner_uid) { //win
                    tablecss = 'table-success';
                    lw_left = "";
                    lw_right = 'ชนะ';
                    badgecssL = "";
                    badgecssR = "badge-success";
                    textcssL = "text-success";
                    textcssR = "";
                } else if (tmp.host_uid == tmp.winner_uid) {
                    tablecss = 'table-danger';
                    lw_left = "";
                    lw_right = 'แพ้';
                    badgecssL = "";
                    badgecssR = "badge-danger";
                    textcssL = "text-danger";
                    textcssR = "";
                } else {
                    tablecss = 'table-dark';
                    lw_left = "";
                    lw_right = 'หมดเวลา';
                    badgecssL = badgecssR = "badge-dark";
                    textcssL = textcssR = "text-dark";
                    tmp.guest_name = "???";
                }
            }

            llist += '' +
                '<div class="col-sm-12 col-md-12 col-lg-6">' +
                '   <div class="w-100 table-secondary rounded p-1 mb-2">' +
                '        <div class="row w-100 m-0">' +
                '            <div class="col-6 px-1 ' + tablecss + ' d-flex flex-row justify-content-between align-items-center rounded-left w-100">' +
                '                <div class="d-flex flex-row justify-content-start align-items-center w-100">' +
                '                    <img src="/member/assets/images/userImg/user-' + tmp.host_uid + '.jpg" vvv=https://storage.googleapis.com/ruay-avatar/' + tmp.host_uid + '.jpg" alt="' + tmp.host_name + '" class="d-inline rounded-circle border" width="25" height="25" onerror="this.src=\'/member/assets/images/userImg/user-128.png\';">' +
                '                    <span class="text-user text-left">' + tmp.host_name + '</span>' +
                '                </div>' +
                '                <span class="badge ' + badgecssL + ' font-weight-light">' + lw_left + '</span>' +
                '            </div>' +
                '            <div class="col-6 px-1 ' + tablecss + ' d-flex flex-row justify-content-between align-items-center rounded-right w-100">' +
                '                <span class="badge ' + badgecssR + ' font-weight-light">' + lw_right + '</span>' +
                '                <div class="d-flex flex-row justify-content-end align-items-center w-100">' +
                '                    <span class="text-user text-right">' + tmp.guest_name + '</span>' +
                '                    <img src="/member/assets/images/userImg/user-' + tmp.guest_uid + '.jpg" alt="' + tmp.guest_name + '" class="rounded-circle border" width="25" height="25" onerror="this.src=\'/member/assets/images/userImg/user-128.png\';">' +
                '                </div>' +
                '            </div>' +
                '            <div class="col-12 text-center bg-light py-1 px-0 text-dark rounded">' +
                '                <div class="row m-0">' +
                '                    <div class="col-5 px-0 text-right">' +
                '                        <span class="' + textcssL + '">' + left_bet + '</span>' +
                '                        ' + imglTag + '\n' +
                '                    </div>' +
                '                    <div class="col-2 px-0 d-flex justify-content-center align-items-center">' +
                '                        <span class="badge badge-dark font-weight-light">ทาย</span>' +
                '                    </div>' +
                '                    <div class="col-5 px-0 text-left">' +
                '                        ' + imgRTag + '\n' +
                '                        <span class="' + textcssR + '">' + right_bet + '</span>' +
                '                    </div>' +
                '                </div>' +
                '           </div>' +
                '            <div class="col-12 text-secondary px-1 d-flex flex-row justify-content-between">' +
                '                <small><i class="fas fa-coins"></i> <span class="thb">฿ ' + tmp.bet + '</span></small>' +
                '                <small><i class="far fa-clock"></i> ' + dateFormat(tmp.match_dt) + '</small>' +
                '                <small>#' + tmp.room_id + '</small>' +
                '            </div>' +
                '        </div>' +
                '   </div>'+
                '</div>';
        }

        mystatData = data;
        var total = winner + loser;
        $('#mytotal').html(winner + loser);
        $('#mywin').html(winner);
        $('#mylost').html(loser);
        if (total == 0) $('#mywinratio').html('0%');
        else $('#mywinratio').html(Math.round(((winner / total).toFixed(2) * 100)) + '%');
        $('#mystatls').html(llist);
    }//
    function prefixZero(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    };
    function setTimer() {
        yeeKeeInterval = setInterval(function () {
            $('.countdown').each(function (index, el) {
                var args = {
                    id: index,
                    counter: $('.countdown').length
                };
                // console.log(args.counter);
                intervalTimer($(this), $(this).data('finaldate'), args);
            });
        }, 1000);
        // args.yeeKeeInterval = yeeKeeInterval;
    }
    function intervalTimer(element, finalDate, args) {

        var now = new Date().getTime();
        var distance = finalDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days > 0) {
            element.html(days + '<small> วัน</small>' + hours + '<small>:</small>' + prefixZero(minutes, 2) + '<small>:</small>' + prefixZero(seconds, 2));
        } else {
            element.html(hours + '<small>:</small>' + prefixZero(minutes, 2) + '<small>:</small>' + prefixZero(seconds, 2));
        }
        //console.log(distance);
        if (distance <= 0) {
            var room_id = element.closest('.ycb_item').attr('id');
            $('#' + room_id).remove();
            clearInterval(yeeKeeInterval);
            timeout(room_id);
            setTimer();
        }
    }
    function timeout(room_id) {
        $('#game_list').children().remove('#' +room_id);
        socket.emit('timeout', {
            item_id: room_id,
            user_id: user_id,
        },'yingchub');
        var page = $('.page-btn>button.active').text();
        if (page == '') {
            page = 1;
        }
        if ($('#pills-me-tab').hasClass('active')) {
            numclick(1, 'mygame_list');
        } else if ($('#pills-home-tab').hasClass('active')) {
            numclick(1, 'game_list');
        }
    }//
    function confirm_update(checkbox) {
        ask_confirm = checkbox.checked;
        localStorage.setItem('confirm', ask_confirm);
    }//
    function actIcon(actId){
        var icon = "";
        if(actId == 1){
            icon = '<img src="/member/assets/images/pao/rock.png?v2" alt="ค้อน" width="15%">';
        }else if(actId == 2){
            icon = '<img src="/member/assets/images/pao/scissors.png?v2" alt="กรรไกร" width="15%">';
        }
        else if(actId == 3){
            icon = '<img src="/member/assets/images/pao/paper.png?v2" alt="กระดาษ" width="15%">';
        }
        return icon;
    }//
    function betToImageLink(bet, isHome) {
        if (bet == 'r') {
            if (isHome) return "/member/assets/images/pao/rock-left.png";//home
            else return "/member/assets/images/pao/rock.png?v2";//away
        }else if (bet == 's') {
            if (isHome) return "/member/assets/images/pao/scissors-left.png";//home
            else return "/member/assets/images/pao/scissors.png?v2";//away
        }else if (bet == 'p') {
            if (isHome) return "/member/assets/images/pao/paper-left.png";//home
            else return "/member/assets/images/pao/paper.png?v2";//away
        } else {
            return '';
        }
    }//
    function showConfirm(title, msg, btOKTitle, btCancelTitle, id,choice) {
        $('#confirm_title').html(title);
        $('#confirm_text').html(msg);
        $('#confirm_vs').modal('show');
        $('#confirm_cancel').html(btCancelTitle);
        $('#confirm_ok').html(btOKTitle);
        $('#confirm_ok').unbind("click");
        $("#confirm_ok").click(function() {
            $('#confirm_vs').modal('hide');
            onVsclick(id,choice);
        });
        hideLoadSplash();
    }
    function getComputerChoice() {
        const choices = ['p', 's','r'];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    function getUserChoice() {
        const choices = ['p', 's','r'];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    function modalWord(result, userchoise, computerChoice) {
        let smallUser = "คุณ".fontsize(3).fontcolor('#4dcc7d').sup();
        let smallComputer = "บอท".fontsize(3).fontcolor('red').sup();
        let limg = betToImageLink(userchoise,true);
        let rimg = betToImageLink(computerChoice,false);
        console.log(userchoise);
        $('#ying_ModalLabel').text('')
        $('#ying_ModalLabel').text(result);
        $('.modal-body').text('');
        $('.modal-body').html(smallUser + convertToword(userchoise) + '<img src="'+limg+'" alt="หัว" class="d-inline rounded-circle border" width="40">  สู้กับ <img src="'+rimg+'" alt="หัว" class="d-inline rounded-circle border" width="40">' + convertToword(computerChoice) + smallComputer);
    }
    function convertToword(letter) {
        if (letter === "r") return "ค้อน";
        if (letter === "p") return "กระดาษ";
        return "กรรไกร";
    }
    function yingchubToString(value) {
        if (value && value > 0) {
            if (value == 1) return "ค้อน";
            if (value == 2) return "กรรไกร";
            return "กระดาษ";
        }
        return '';
    }
    function dateFormat(strDate) {
        var date = new Date(strDate);
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            timeZone: 'Asia/Bangkok',
        };

        return new Intl.DateTimeFormat('th-TH', options).format(date);
    }
    function setupMydata() {
        // console.log(userChoice);
        socket.emit('setup', {user_id: user_id},'yingchub');
    }
    function setupTop20() {
        // console.log(userChoice);
        socket.emit('top20',);
    }
    function dotop20(datas) {
        // datas.

        var llist = '';
        for (var i = 0; i < datas.length; i++) {
            var win = 0;
            var lost = 0;
            if (datas[i].win != undefined) {
                win = datas[i].win;
            }
            if (datas[i].lose != undefined) {
                lost = datas[i].lose;
            }
            llist += '<div class="row mx-0 mb-1" data-win="' + win + '">' +
                '<div class="col-2 col-sm-2 col-md-1 p-1 table-success rounded-left d-flex align-items-center mb-0">' +
                '    <span class="badge badge-pill badge-dark" id="rank"></span>' +
                '</div>' +
                '<div class="col-4 col-sm-4 col-md-8 p-1 table-success d-flex align-items-center mb-0">' +
                '    <img src="https://storage.googleapis.com/ruay-avatar/' + datas[i].id + '.jpg" alt="userimg" class="d-inline rounded-circle border" width="25" height="25" onerror="this.src=\'/member/assets/images/userImg/user-128.png\';">' +
                '    <span class="text-user text-left">' + datas[i].username + '</span>' +
                '</div>' +
                '<div class="col-2 col-sm-2 col-md-1 p-1 table-success border border-left-0 border-right-0 text-right mb-0">' +
                '    <small></small>' +
                '</div>' +
                '<div class="col-2 col-sm-2 col-md-1 p-1 table-success border border-left-0 border-right-0 text-right mb-0">' +
                '    <small>' + win + '</small>' +
                '</div>' +
                '<div class="col-2 col-sm-2 col-md-1 table-success py-1 px-2 border border-left-0 rounded-right text-right mb-0">' +
                '    <small>' + lost + '</small>' +
                '</div>' +
                '</div>';
        }
        $('#top20').html(llist);
    }
    function sortTop20() {
        cont = $('#top20 .row');

        cont.detach().sort(function (a, b) {
            var astts = $(a).data('win');
            var bstts = $(b).data('win');
            //return astts - bstts;
            return (astts < bstts) ? (astts < bstts) ? 1 : 0 : -1;
        });

        $('#top20').append(cont);
    }
    function addrank(datas) {
        for (var i = 0; i < datas.length; i++) {
            $('#top20 .row:eq(' + i + ') #rank').append(i + 1);
        }
    }
    function splashObj(msg) {
        this.msg = msg;
        this.to = setTimeout(splashAlert, 10000);
    }
    function showLoadSplash(msg) {
        $('#loading').fadeIn(300);
        _splashTO = new splashObj(msg);
    }
    function hideLoadSplash() {
        $('#loading').fadeOut(300);
        if (_splashTO != 0) {
            clearTimeout(_splashTO.to);
            _splashTO = 0;
        }
    }
    function splashAlert() {
        if (_splashTO != 0) {
            showMsg(lang.game_error, _splashTO.msg +
                ' ' + lang.game_longtime_response_pre +
                ' ' + _splashTO.msg +
                ' ' + lang.game_longtime_response_pos);
            _splashTO = 0;
        }
        $('#loading').fadeOut(300);
    }
    function reload(){
        if ($('#pills-me-tab').hasClass('active')) {
            numclick(1, 'mygame_list');
        } else if ($('#pills-home-tab').hasClass('active')) {
            numclick(1, 'game_list');
        }
    }
    function updategameCount(rc) {
        // console.log('rc'+rc)
        var id = $('#mygame_list_count').text();
        var mrc = id.substring(1, id.length - 1);
        var count = rc-mrc;
        if (count <= 0) {
            $('#game_count').html('');
        } else {
            $('#game_count').html('(' + count + ')');
        }
    }
    function updateMygameCount(data) {
        // console.log('mrc'+data);
        if (data <= 0) {
            $('#mygame_list_count').html('');
        } else {
            $('#mygame_list_count').html('(' + data + ')');
        }

    }
    function updateMaxGameDisplay(num = 4) {
        maxGameDisplay = num;
    }
    function setLastMaxGameDisplayStat() {
        var btn = $('#display_setting label');

        for (var i = 0; i < btn.length; i++) {
            if (Number(btn[i].textContent) == maxGameDisplay) {
                $(btn[i]).addClass('active');
            }
        }
    }
    function MygameCount() {
        myGameDatas = $('#mygame_list >.ycb_item');
        var count = myGameDatas.length;
        return count;
    }
    function GameCount() {
        GameDatas = $('#game_list >.ycb_item');
        var count = GameDatas.length;
        return count;
    }

    async function gameConnect(){
        var option = {
            reconnection: true,
            secure: true,
            rejectUnauthorized: false,
            // transports: ['websocket'],
            upgrade: false,
        };
        if (socket != undefined) {
            socket.disconnect();
            socket = undefined;
        }
        var server = "https://socket.huayhub.vip";
        socket = await io.connect(server, option);

        return socket;
    }
})

// socket.on('new_rc', function (data) {
//     console.log(data);
// })
//
// socket.on('new_mrc', function (data) {
//     console.log(data);
// })
// socket.on('insert', function (data) {
//     console.log(data);
// })
//
// socket.on('credit', function (data) {
//     console.log(data);
// })
//
// socket.on('check', function (data) {
//     console.log(data);
// })
// socket.on('check2', function (data) {
//     console.log(data);
// })
// socket.on('check3', function (data) {
//     console.log(data);
// })
//

