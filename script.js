function yoket() {

    document.getElementById("baslik").style.display = "none"

}

function ciftTikla() {

    alert("1. GOREV TAMAMLANDI")
    document.getElementById("gorev1").style.display = "none"


}

function tersTikla() {

    alert("2. GOREV TAMAMLANDI")
    document.getElementById("gorev2").style.display = "none"

}

function hesapla() {

    var sayi1 = parseInt(document.getElementById("sayi1").value);
    var sayi2 = parseInt(document.getElementById("sayi2").value);

    var result = document.getElementById("result").innerHTML = sayi1 + sayi2;

    if (result == "1250") {

        alert("3. GOREV TAMAMLANDI");
        document.getElementById("gorev3").style.display = "none";

    }

    else {
        alert("SONUC YANLIS TEKRAR HESAPLAYINIZ !")
    }


}

function resimfark(event) {

    let x = event.clientX;
    let y = event.clientY;



    if (x > 770 && x < 800 && y > 270 && y < 285) {

        document.getElementById("cicek").innerHTML = "ÇİÇEK FARKI BULUNDU !"

    }

    else if (x > 830 && x < 848 && y > 370 && y < 380) {

        document.getElementById("igne").innerHTML = "İĞNE FARKI BULUNDU !"

    }

    else if (x > 800 && x < 815 && y > 240 && y < 250) {

        document.getElementById("kus").innerHTML = "KUŞ FARKI BULUNDU !"

    }
    else if (x > 700 && x < 735 && y > 390 && y < 400) {

        document.getElementById("ayak").innerHTML = "AYAK FARKI BULUNDU !"

    }

}

function gonder() {

    let flower = document.getElementById("cicek");
    let needle = document.getElementById("igne");
    let bird = document.getElementById("kus");
    let foot = document.getElementById("ayak");

    if (flower.innerHTML == "ÇİÇEK FARKI BULUNDU !" &&
        needle.innerHTML == "İĞNE FARKI BULUNDU !" &&
        bird.innerHTML == "KUŞ FARKI BULUNDU !" &&
        foot.innerHTML == "AYAK FARKI BULUNDU !") {

        alert("4. GOREV TAMAMLANDI");
        document.getElementById("gorev4").style.display = "none";

    }

    else {
        alert("TUM FARKLARI BULAMADINIZ TEKRAR DENEYINIZ !")
    }

};

let t = 0;

function tus() {

    t += 1;
    document.getElementById("tusonuc").innerHTML = "Tuş Sayısı :" + t;

    if (t == 100) {
        alert("5. GÖREV TAMAMLANDI")
        document.getElementById("gorev5").style.display = "none";
    }


};

function progress() {

    let s = event.key;
    let ss = document.getElementById("sonsonuc");

    ss.innerHTML = "Basılan Karakter : " + s;

    if (ss.innerHTML == "Basılan Karakter : End") {
        alert("TUM TESTLERI GECTINIZ TEBRIKLER")
        document.getElementById("songorev").style.display = "none";
        document.getElementById("testsonucu").id = "testsonucuedit"

    }

    else {
        alert("TEKRAR DENEYINIZ");
    }

}