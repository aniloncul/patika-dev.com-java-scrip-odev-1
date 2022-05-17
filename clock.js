let isim = prompt("lütfen isiminizi giriniz");
var kullanici_isim = document.querySelector("#myName");

(isim.length>0) ? kullanici_isim.innerHTML = isim: alert("kullanici adi girilmedi");



function showTime(){
    const bugun=new Date();
    let s=bugun.getHours();
    let dk=bugun.getMinutes();
    let sn=bugun.getSeconds();
    let day=bugun.getDay();
 

if(day==1){day="PAZARTESİ"}
else if (day==2){ day="SALI"}
else if (day==3){day="ÇARŞAMBA"}
else if (day==4){day="PERŞEMBE"}
else if (day==5){day="CUMA"}
else if (day==6){day="CUMARTESİ"}
else if (day==7){day="PAZAR"}

    document.querySelector("#myClock").innerHTML=s + ":" + dk + ":" +sn + "  " + day ;
    setTimeout(showTime, 1000);
}
showTime();




