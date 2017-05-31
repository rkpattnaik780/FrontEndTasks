$(document).ready(function () {
    var check, t5;
    $("#reset").hide();
    $("#addssn").click(function () {
        var t1 = parseInt($("#ssndisp").html());
        t1++;
        $("#ssndisp").html(t1);
    });
    $("#subssn").click(function () {
        var t2 = parseInt($("#ssndisp").html());
        t2--;
        $("#ssndisp").html(t2);
    });
    $("#addbrk").click(function () {
        var t3 = parseInt($("#brkdisp").html());
        t3++;
        $("#brkdisp").html(t3);
    });
    $("#subbrk").click(function () {

        var t4 = parseInt($("#brkdisp").html());
        t4--;
        $("#brkdisp").html(t4);
    });
    $("#start1").click(function () {
        $("#reset").show();
        $("#start , #addssn , #ssndisp , #subssn , #addbrk , #brkdisp , #subbrk , p.btn").hide();
        check = setInterval(showTimeLeft, 1000);
        t5 = parseInt($("#ssndisp").html());
        t5 *= 60;
        function showTimeLeft() {
            if (t5 === 0) {
                clearInterval(check);
                tune.play();
                $("#time1").html(" Time left - 00 : 00 ");
            }
            else if (t5 % 60 < 10)
            { $("#time1").html(" Time left - " + Math.floor(t5 / 60) + " : 0" + t5 % 60); }
            else
            { $("#time1").html(" Time left - " + Math.floor(t5 / 60) + " : " + t5 % 60); }
            t5--;
        }

    });
    $("#reset1").click(function () {
        $("#start ,  #addssn , #ssndisp , #subssn , #addbrk , #brkdisp , #subbrk , p.btn ").show();
        clearInterval(check);
    });

});