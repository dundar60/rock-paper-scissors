const rock_display = document.getElementById("choise_js_rock");
const paper_display = document.getElementById("choise_js_paper");
const scissors_display = document.getElementById("choise_js_scissors");
const rock_display1 = document.getElementById("choise_js_rock1");
const paper_display1 = document.getElementById("choise_js_paper1");
const scissors_display1 = document.getElementById("choise_js_scissors1");
const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const scissors_button = document.getElementById("scissors_button");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const scorless = document.getElementById("scorless");

var metinParametresi = decodeURIComponent(new URLSearchParams(window.location.search).get("metin"));
document.getElementById("nickname1").textContent = metinParametresi;

rock_display.style.display = "inline-block";
paper_display.style.display = "none";
scissors_display.style.display = "none";

rock_display1.style.display = "inline-block";
paper_display1.style.display = "none";
scissors_display1.style.display = "none";

var puan = 0;


rock_button.addEventListener("click", function () {
    rock_button.style.border = "3px solid green"
    paper_button.style.border = "3px solid darkred"
    scissors_button.style.border = "3px solid darkred"
    var sayac = 0;
    if (sayac == 0) {
        rock_display.style.display = "inline-block";
        rock_display1.style.display = "inline-block";
        paper_display1.style.display = "none";
        scissors_display1.style.display = "none";
        paper_display.style.display = "none";
        scissors_display.style.display = "none";
        scorless.style.display = "none";
        win.style.display = "none";
        lose.style.display = "none";


        sayac++;

    }
    setTimeout(function () {
        if (sayac == 1) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";

            sayac++;
        }
    }, 500);
    setTimeout(function () {
        if (sayac == 2) {
            rock_display.style.display = "inline-block";
            rock_display1.style.display = "inline-block";
            sayac++;
        }
    }, 1000);
    setTimeout(function () {
        if (sayac == 3) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";
            sayac++;
        }
    }, 1500);
    setTimeout(function () {
        var choise; // Karşılaştırılacak değer
        var rasgeleSayi = Math.floor(Math.random() * 3) + 1;
        choise = rasgeleSayi;

        rock_display1.style.display = "inline-block";
        paper_display1.style.display = "none";
        scissors_display1.style.display = "none";

        if (choise == 1) {

            rock_display.style.display = "inline-block";
            paper_display.style.display = "none";
            scissors_display.style.display = "none";
            scorless.style.display = "block";

            console.log("1");
            sayac = 0;
        }

        if (choise == 2) {
            paper_display.style.display = "inline-block";
            rock_display.style.display = "none";
            scissors_display.style.display = "none";
            lose.style.display = "block";
            if (puan > 0) { puan--; }

            score.textContent = puan;
            console.log("2");
            sayac = 0;
        }

        if (choise == 3) {
            scissors_display.style.display = "inline-block";
            paper_display.style.display = "none";
            rock_display.style.display = "none";
            win.style.display = "block";
            puan++;
            score.textContent = puan;
            console.log("3");
            sayac = 0;
        }
    }, 2000);




});
paper_button.addEventListener("click", function () {
    paper_button.style.border = "3px solid green"
    rock_button.style.border = "3px solid darkred"
    scissors_button.style.border = "3px solid darkred"
    var sayac = 0;
    if (sayac == 0) {
        rock_display.style.display = "inline-block";
        rock_display1.style.display = "inline-block";
        paper_display1.style.display = "none";
        scissors_display1.style.display = "none";
        paper_display.style.display = "none";
        scissors_display.style.display = "none";
        scorless.style.display = "none";
        win.style.display = "none";
        lose.style.display = "none";


        sayac++;

    }
    setTimeout(function () {
        if (sayac == 1) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";

            sayac++;
        }
    }, 500);
    setTimeout(function () {
        if (sayac == 2) {
            rock_display.style.display = "inline-block";
            rock_display1.style.display = "inline-block";
            sayac++;
        }
    }, 1000);
    setTimeout(function () {
        if (sayac == 3) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";
            sayac++;
        }
    }, 1500);
    setTimeout(function () {
        var choise; // Karşılaştırılacak değer
        var rasgeleSayi = Math.floor(Math.random() * 3) + 1;
        choise = rasgeleSayi;

        rock_display1.style.display = "none";
        paper_display1.style.display = "inline-block";
        scissors_display1.style.display = "none";

        if (choise == 1) {

            rock_display.style.display = "inline-block";
            paper_display.style.display = "none";
            scissors_display.style.display = "none";
            win.style.display = "block";
            puan++;
            score.textContent = puan;
            console.log("1");
            sayac = 0;
        }

        if (choise == 2) {
            paper_display.style.display = "inline-block";
            rock_display.style.display = "none";
            scissors_display.style.display = "none";
            scorless.style.display = "block";



            console.log("2");
            sayac = 0;
        }

        if (choise == 3) {
            scissors_display.style.display = "inline-block";
            paper_display.style.display = "none";
            rock_display.style.display = "none";
            lose.style.display = "block";
            if (puan > 0) { puan--; }
            score.textContent = puan;
            console.log("3");
            sayac = 0;
        }
    }, 2000);
});


scissors_button.addEventListener("click", function () {
    paper_button.style.border = "3px solid darkred"
    rock_button.style.border = "3px solid darkred"
    scissors_button.style.border = "3px solid green"
    var sayac = 0;
    if (sayac == 0) {
        rock_display.style.display = "inline-block";
        rock_display1.style.display = "inline-block";
        paper_display1.style.display = "none";
        scissors_display1.style.display = "none";
        paper_display.style.display = "none";
        scissors_display.style.display = "none";
        scorless.style.display = "none";
        win.style.display = "none";
        lose.style.display = "none";


        sayac++;

    }
    setTimeout(function () {
        if (sayac == 1) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";

            sayac++;
        }
    }, 500);
    setTimeout(function () {
        if (sayac == 2) {
            rock_display.style.display = "inline-block";
            rock_display1.style.display = "inline-block";
            sayac++;
        }
    }, 1000);
    setTimeout(function () {
        if (sayac == 3) {
            rock_display.style.display = "none";
            rock_display1.style.display = "none";
            sayac++;
        }
    }, 1500);
    setTimeout(function () {
        var choise; // Karşılaştırılacak değer
        var rasgeleSayi = Math.floor(Math.random() * 3) + 1;
        choise = rasgeleSayi;

        rock_display1.style.display = "none";
        paper_display1.style.display = "none";
        scissors_display1.style.display = "inline-block";

        if (choise == 1) {

            rock_display.style.display = "inline-block";
            paper_display.style.display = "none";
            scissors_display.style.display = "none";
            lose.style.display = "block";
            if (puan > 0) { puan--; }
            score.textContent = puan;
            console.log("1");
            sayac = 0;
        }

        if (choise == 2) {
            paper_display.style.display = "inline-block";
            rock_display.style.display = "none";
            scissors_display.style.display = "none";
            win.style.display = "block";
            puan++;
            score.textContent = puan;



            console.log("2");
            sayac = 0;
        }

        if (choise == 3) {
            scissors_display.style.display = "inline-block";
            paper_display.style.display = "none";
            rock_display.style.display = "none";
            scorless.style.display = "block";

            console.log("3");
            sayac = 0;
        }
    }, 2000);
});












