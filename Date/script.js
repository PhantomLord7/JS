/*function currentDayTime(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}
function date_time()
{
    var current_datetime = new Date();
    var day = currentDayTime(current_datetime.getDate());
    var month = currentDayTime(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = currentDayTime(current_datetime.getHours());
    var minutes = currentDayTime(current_datetime.getMinutes());
    var seconds = currentDayTime(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}*/

function date_time()
{   
    const date = new Date();
    const day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay();
    const month = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(() => {document.getElementById('current_date_time_block').innerHTML = date_time()}, 1000)