$(document).ready(function () {
    var simon = {
        current: 0, // changes in every round to zero , gets updated after each click
        round: 0, // max value is 6  
        panels: ["#redpanel", "#greenpanel", "#bluepanel", "#yelpanel"],
        playerMoves: [],
        cpuMoves: [0, 1, 1, 2, 0, 3, 2], // size is 7
        tunes: [new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')],
        color: ["red", "green", "blue", "yellow"],
        initcolor: ["#b30000", "#004d00", "#000099", "#ffff99"]
    };
    $("#countshow").html("0");
    $(".col-sm-6").click(function () {
        if(simon.current == 6 && simon.round == 6){
            alert('you won!') ;
            return ;

        }
        var ch = "#" + $(this).attr("id");
        if (ch == simon.panels[simon.cpuMoves[simon.current]]) {
            if (simon.current < simon.round) {
                beepOnTouch(ch);
                simon.current++;
            }
            else if (simon.current == simon.round) {
                beepOnTouch(ch);
                simon.current = 0;
                simon.round ++;
                setTimeout( function() {$("#countshow").html(simon.round + 1); } , 1200 );
                setTimeout( function(){showPattern();} , 1200 ) ;
            }

        }
        else
        { alert('Simon wins');
          return ; }
    });


    // this function makes the panel beep with xound .
    function beepOnTouch(col) {
        if (col === "#redpanel") {
            red.play();
            $(col).css("background-color", simon.color[0]);
            setTimeout(function () { $(col).css("background-color", simon.initcolor[0]); }, 400);
        }
        if (col === "#greenpanel") {
            green.play();
            $(col).css("background-color", simon.color[1]);
            setTimeout(function () { $(col).css("background-color", simon.initcolor[1]); }, 400);
        }
        if (col === "#bluepanel") {
            blue.play();
            $(col).css("background-color", simon.color[2]);
            setTimeout(function () { $(col).css("background-color", simon.initcolor[2]); }, 400);
        }
        if (col === "#yelpanel") {
            yellow.play();
            $(col).css("background-color", simon.color[3]);
            setTimeout(function () { $(col).css("background-color", simon.initcolor[3]); }, 400);
        }
    }
    function showPattern() {
        for (var i = 0; i < simon.round + 1; i++) {
            (function (i) {
                setTimeout(function () {
                    var temp = simon.panels[simon.cpuMoves[i]];
                    $(temp).css("background-color", simon.color[simon.cpuMoves[i]]);
                    playSound(simon.cpuMoves[i]);
                    // alert(temp) ;
                }, i * 1000);
                setTimeout(function () {
                    var temp = simon.panels[simon.cpuMoves[i]];
                    $(temp).css("background-color", simon.initcolor[simon.cpuMoves[i]]);
                }, 300 + i * 1000);

            })(i);
        }
    }
    function playSound(i) {
        if (i === 0)
        { red.play(); }
        if (i === 1)
        { green.play(); }
        if (i === 2)
        { blue.play(); }
        if (i === 3)
        { yellow.play(); }
    }
    $("#start").click(function(){
      $("#countshow").html("1");
      setTimeout(function () {
                    var temp = simon.panels[simon.cpuMoves[0]];
                    $(temp).css("background-color", simon.color[simon.cpuMoves[0]]);
                    playSound(simon.cpuMoves[0]);
                    // alert(temp) ;
                     }, 500);
      setTimeout(function () {
                    var temp = simon.panels[simon.cpuMoves[0]];
                    $(temp).css("background-color", simon.initcolor[simon.cpuMoves[0]]);
                    }, 800); 
  }) ;
  $("#res").click(function(){
     $('#countshow').html('1') ;
     simon.current = 0 ;
     simon.round = 0 ;
  });
});