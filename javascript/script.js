function clock(){
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    //Gọi các phương thức của đối tượng timer
    var current_day = timer.getDay();
    var day_name = '';
    switch (current_day) {
        case 0:
            day_name = "Chủ nhật";
            break;
        case 1:
            day_name = "Thứ hai";
            break;
        case 2:
            day_name = "Thứ ba";
            break;
        case 3:
            day_name = "Thứ tư";
            break;
        case 4:
            day_name = "Thứ năm";
            break;
        case 5:
            day_name = "Thứ sau";
            break;
        case 6:
            day_name = "Thứ bảy";
    }
    var year = timer.getFullYear(); 
    var month = timer.getMonth()+1;
    var day = timer.getDate();
    var hour = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes();  //Lấy phút hiện tại
    var second = timer.getSeconds();
    var ampm = "AM"  //Lấy giây  hiện tại
    //Thêm ký tự 0 đằng trước nếu giờ, phút, giây < 10 với câu lệnh điều khiển if
    if(hour>12){
        hour = hour - 12;
        var ampm = "PM";
    }
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
    document.getElementById('ampm').innerHTML = ampm;
 }
 //Thực hiện hàm clock theo chu kỳ 1 giây
 setInterval("clock()",1000);
//  --------------------------------------------------------------
$(document).ready(function(){
    $("#clock").hide(); // thêm dòng này để nội dung trong thẻ p ẩn lúc đầu
    $("#clock3").hide(); 
    $("#bamgio").click(function(){
        $("#clock").hide();
        $("#clock3").hide();
        $("#clock2").show();
    });
    $("#bamgio1").click(function(){
        $("#clock").hide();
        $("#clock3").hide();
        $("#clock2").show();
    });
    $("#xemgio").click(function(){
        $("#clock").show();
        $("#clock2").hide();
        $("#clock3").hide();
    });
    $("#xemgio1").click(function(){
        $("#clock").show();
        $("#clock2").hide();
        $("#clock3").hide();
    });
    $("#demnguoc").click(function(){
        $("#clock3").show();
        $("#clock").hide();
        $("#clock2").hide();
    });
    $("#demnguoc1").click(function(){
        $("#clock3").show();
        $("#clock").hide();
        $("#clock2").hide();
    });
});

var msecond="00";

var second="00";

var minute="00";

function start(){
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    document.getElementById('msecond').innerHTML = msecond;
    go=setTimeout("start()",10);
    msecond++;
    if(msecond==100){
        msecond=0;
        second++;
        if(second < 10) {
            second = "0" + second;
        }
    }
    if(second==60){
        second=0;
        minute++;
        if(minute < 10) {
            minute = "0" + minute;
        }
    }
}
function stop(){
    clearTimeout(go);
}
function reset(){
    window.location.reload();
}
var h = null; // Giờ
var m = null; // Phút
var s = null; // Giây
             
var timeout = null; // Timeout
             
function start2() {
    $('#hour2').hide();
    $('#minute2').hide();
    $('#second2').hide();
    $('#hour2-start').show();
    $('#minute2-start').show();
    $('#second2-start').show();

    /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
    if (h === null)
    {
        h = parseInt(document.getElementById('hour2').innerHTML);
        m = parseInt(document.getElementById('minute2').innerHTML);
        s = parseInt(document.getElementById('second2').innerHTML);
        if(h < 10) {
            h = "0" + h;
        }
        if(m < 10) {
            m = "0" + m;
        }
    }
 
    /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
    // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
    //  - giảm số phút xuống 1 đơn vị
    //  - thiết lập số giây lại 59
    if (s === -1){
        m -= 1;
        if(m < 10 && m > -1) {
            m = "0" + m;
        }
        s = 59;
    }
 
    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1){
        h -= 1;
        if(h < 10 && h > -1) {
            h = "0" + h;
        }
        m = 59;
    }
 
    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h == -1){
        clearTimeout(timeout);
        alert('Hết giờ');
        window.location.reload();
        return false;
    }
    if(s < 10 && s > -1) {
        s = "0" + s;
    }
 
    /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
    document.getElementById('hour2-start').innerText = h.toString();
    document.getElementById('minute2-start').innerText = m.toString();
    document.getElementById('second2-start').innerText = s.toString();
 
    /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
    timeout = setTimeout(function(){
        s--;
        start2();
    }, 1000);
}        
function stop2(){
    clearTimeout(timeout);
}
function selectHour(){
    var x = document.getElementById('selectHour');
    var h = x.options[x.selectedIndex].value;
    document.getElementById('selectHour').style.display = "none";
    if(h < 10) {
        h = "0" + h;
    }
    document.getElementById('hour2').innerHTML = h;
}
function selectMinute(){
    var x = document.getElementById('selectMinute');
    var m = x.options[x.selectedIndex].value;
    document.getElementById('selectMinute').style.display = "none";
    if(m < 10) {
        m = "0" + m;
    }
    document.getElementById('minute2').innerHTML = m;
}
function selectSecond(){
    var x = document.getElementById('selectSecond');
    var s = x.options[x.selectedIndex].value;
    document.getElementById('selectSecond').style.display = "none";
    if(s < 10) {
        s = "0" + s;
    }
    document.getElementById('second2').innerHTML = s;
}