let myName = prompt('Lütfen adınızı giriniz.')
document.getElementById("myName").innerHTML = myName

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let daylist = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let d2 = daylist[d];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s + " " + d2;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}