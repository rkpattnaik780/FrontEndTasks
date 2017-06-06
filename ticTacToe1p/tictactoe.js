var count = 0;
var t1 = 10, t2 = 10, t3 = 10, t4 = 10, t5 = 10, t6 = 10, t7 = 10, t8 = 10, t9 = 10;
var pl1, pl2;
var tdraw = 10;
pl1 = prompt("Enter your name, Player 1 : ");
pl2 = prompt("Enter your name, Player 2 : ");
document.getElementById("alert1").innerHTML = "<strong>" + pl1 + "</strong>" + " " + "has to use <strong> ( X ) </strong>"
    + " and play first .";
document.getElementById("alert2").innerHTML = "<strong>" + pl2 + "</strong>" + " " + "has to use <strong> ( O ) </strong>"
    + " and play second .";
function chkdraw() {
    if (t1 < 10 && t2 < 10 && t3 < 10 && t4 < 10 && t5 < 10 && t6 < 10 && t7 < 10 && t8 < 10 && t9 < 10 && tdraw <= 10)
    { alert("Match is a draw between " + pl1 + " and " + pl2); }
}
function checkb() {
    if (t1 == 0 && t2 == 0 && t3 == 0)  //For the player one with ( X ) .
    {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box2").style.backgroundColor = "#ffffe6";
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t4 == 0 && t5 == 0 && t6 == 0) {
        document.getElementById("box4").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box6").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t7 == 0 && t8 == 0 && t9 == 0) {
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        document.getElementById("box8").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t1 == 0 && t4 == 0 && t7 == 0) {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box4").style.backgroundColor = "#ffffe6";
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t2 == 0 && t5 == 0 && t8 == 0) {
        document.getElementById("box2").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box8").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t3 == 0 && t6 == 0 && t9 == 0) {
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        document.getElementById("box6").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t1 == 0 && t5 == 0 && t9 == 0) {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    if (t3 == 0 && t5 == 0 && t7 == 0) {
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl1 + " wins the game !");
    }
    //For the player two with ( O ) .
    if (t1 == 1 && t2 == 1 && t3 == 1)  //For the player one with ( X ) .
    {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box2").style.backgroundColor = "#ffffe6";
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t4 == 1 && t5 == 1 && t6 == 1) {
        document.getElementById("box4").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box6").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t7 == 1 && t8 == 1 && t9 == 1) {
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        document.getElementById("box8").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t1 == 1 && t4 == 1 && t7 == 1) {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box4").style.backgroundColor = "#ffffe6";
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t2 == 1 && t5 == 1 && t8 == 1) {
        document.getElementById("box2").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box8").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t3 == 1 && t6 == 1 && t9 == 1) {
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        document.getElementById("box6").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t1 == 1 && t5 == 1 && t9 == 1) {
        document.getElementById("box1").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box9").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
    if (t3 == 1 && t5 == 1 && t7 == 1) {
        document.getElementById("box3").style.backgroundColor = "#ffffe6";
        document.getElementById("box5").style.backgroundColor = "#ffffe6";
        document.getElementById("box7").style.backgroundColor = "#ffffe6";
        tdraw = 100;
        alert(pl2 + " wins the game !");
    }
}
function moved1() {
    if (count % 2 == 0 && t1 == 10) {
        document.getElementById("box1").src = "cross.jpg";
        t1 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t1 == 10) {
        document.getElementById("box1").src = "circle.png";
        t1 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved2() {
    if (count % 2 == 0 && t2 == 10) {
        document.getElementById("box2").src = "cross.jpg";
        t2 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t2 == 10) {
        document.getElementById("box2").src = "circle.png";
        t2 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved3() {
    if (count % 2 == 0 && t3 == 10) {
        document.getElementById("box3").src = "cross.jpg";
        t3 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t3 == 10) {
        document.getElementById("box3").src = "circle.png";
        t3 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved4() {
    if (count % 2 == 0 && t4 == 10) {
        document.getElementById("box4").src = "cross.jpg";
        t4 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t4 == 10) {
        document.getElementById("box4").src = "circle.png";
        t4 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved5() {
    if (count % 2 == 0 && t5 == 10) {
        document.getElementById("box5").src = "cross.jpg";
        t5 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t5 == 10) {
        document.getElementById("box5").src = "circle.png";
        t5 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved6() {
    if (count % 2 == 0 && t6 == 10) {
        document.getElementById("box6").src = "cross.jpg";
        t6 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t6 == 10) {
        document.getElementById("box6").src = "circle.png";
        t6 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved7() {
    if (count % 2 == 0 && t7 == 10) {
        document.getElementById("box7").src = "cross.jpg";
        t7 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t7 == 10) {
        document.getElementById("box7").src = "circle.png";
        t7 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved8() {
    if (count % 2 == 0 && t8 == 10) {
        document.getElementById("box8").src = "cross.jpg";
        t8 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t8 == 10) {
        document.getElementById("box8").src = "circle.png";
        t8 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}
function moved9() {
    if (count % 2 == 0 && t9 == 10) {
        document.getElementById("box9").src = "cross.jpg";
        t9 = 0; count = count + 1;
    }
    if (count % 2 == 1 && t9 == 10) {
        document.getElementById("box9").src = "circle.png";
        t9 = 1; count = count + 1;
    }
    checkb();
    chkdraw();
}