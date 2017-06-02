$(document).ready(function(){
  $("#submit").hide() ;
  var simon = {
                count : 1 ,
                panels : [ "#redpanel" , "#greenpanel" , "#bluepanel" , "#yelpanel" ] ,
                playerMoves : [] ,
                cpuMoves : [0,1,1,2,0,3,2] ,
                tunes : [ new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')] ,
                color : ["red" , "green" , "blue" , "yellow"] ,
                initcolor : ["#b30000" , "#004d00" , "#000099" , "#ffff99" ]
              };
  function playSound(i)
     {
       if( i === 0)
        { red.play() ;}
       if( i === 1)
        { green.play() ;}
       if( i === 2)
        { blue.play() ;}
       if( i === 3)
        { yellow.play() ;}
     }
   var on = 0 ;
   

   $("#start").click(function(){
       if( on === 0 )
         {
            on = 1 ;
            showPattern( ) ;
         }
       else if ( on === 1)
         {   on = 0 ;
             $("#countshow").html("7"); 
             simon.count = 0;
             simon.playerMoves = [] ;
             simon.cpuMoves = [] ; 
         }
   });   
   function showPattern(){
     for (var i = 0; i < simon.cpuMoves.length ; i++) { 
    (function(i) {
        setTimeout(function() { 
          var temp = simon.panels[simon.cpuMoves[i]];
          $(temp).css("background-color", simon.color[simon.cpuMoves[i]]);
          playSound(simon.cpuMoves[i]) ;
         // alert(temp) ;
         }, i * 1000);
         setTimeout(function() { 
          var temp = simon.panels[simon.cpuMoves[i]];
          $(temp).css("background-color", simon.initcolor[simon.cpuMoves[i]]);
        //  alert(temp) ;
         }, 300 + i * 1000);
    })(i);
}
  $("#submit").show() ;
  
   }
}) ;
/*for (var i = 1; i <= 3; i++) {
    (function(index) {
        setTimeout(function() { alert(index); }, i * 1000);
    })(i);
} */