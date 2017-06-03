$(document).ready(function () {
  $("#submit").hide();
  $("#res").click(function () {
    on = 0;
    $("#countshow").html("0");
    simon.playerMoves = [];
  });
  $("#submit").click(function () {
    if (simon.playerMoves.toString() === simon.cpuMoves.toString()) {
      alert("YOU WON THE SIMON!");
    }
    else {
      alert("Simon beats you . Try next time");
    }
    simon.playerMoves = [];
    $("#countshow").html("0");
  });
  var simon = {
    count: 1,
    panels: ["#redpanel", "#greenpanel", "#bluepanel", "#yelpanel"],
    playerMoves: [],
    cpuMoves: [0, 1, 1, 2, 0, 3, 2],
    tunes: [new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')],
    color: ["red", "green", "blue", "yellow"],
    initcolor: ["#b30000", "#004d00", "#000099", "#ffff99"]
  };

  function beepOnTouch(col) {
    if (col === "#redpanel") {
      red.play();
      $(col).css("background-color", simon.color[0]);
      setTimeout(function () { $(col).css("background-color", simon.initcolor[0]); }, 400);
      simon.playerMoves.push(0);
    }
    if (col === "#greenpanel") {
      green.play();
      $(col).css("background-color", simon.color[1]);
      setTimeout(function () { $(col).css("background-color", simon.initcolor[1]); }, 400);
      simon.playerMoves.push(1);
    }
    if (col === "#bluepanel") {
      blue.play();
      $(col).css("background-color", simon.color[2]);
      setTimeout(function () { $(col).css("background-color", simon.initcolor[2]); }, 400);
      simon.playerMoves.push(2);
    }
    if (col === "#yelpanel") {
      yellow.play();
      $(col).css("background-color", simon.color[3]);
      setTimeout(function () { $(col).css("background-color", simon.initcolor[3]); }, 400);
      simon.playerMoves.push(3);
    }
  }
  $(".col-sm-6").click(function () {
    var ch = "#" + $(this).attr("id");
    beepOnTouch(ch);
  });
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
  var on = 0;


  $("#start").click(function () {
    if (on === 0) {
      on = 1;
      $("#countshow").html("7");
      showPattern();
    }
    else if (on === 1) {
      on = 0;
      $("#countshow").html("7");
      simon.count = 0;
      simon.playerMoves = [];
      showPattern();
    }
  });
  function showPattern() {
    for (var i = 0; i < simon.cpuMoves.length; i++) {
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
          if (i === simon.cpuMoves.length - 1) {
            alert("User has to click the panels in the right pattern!\nand submit");
          }
          //  alert(temp) ;
        }, 300 + i * 1000);

      })(i);
    }
    $("#submit").show();

  }
});

/*for (var i = 1; i <= 3; i++) {
    (function(index) {
        setTimeout(function() { alert(index); }, i * 1000);
    })(i);
} */