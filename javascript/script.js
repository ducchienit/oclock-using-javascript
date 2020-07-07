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
     
    $("#bamgio").click(function(){
        $("#clock").hide();
        $("#clock2").show();
    });
    $("#xemgio").click(function(){
        $("#clock").show();
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
    }
}
function stop(){
    clearTimeout(go);
}
function reset(){
    window.location.reload();
}