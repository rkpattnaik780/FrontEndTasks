$(document).ready(function(){
  $("#submit").hide() ;
  var simon = {
                count : 1 ,
                panels : [ "#redpanel" , "#greenpanel" , "#bluepanel" , "yelpanel" ] ,
                playerMoves : [] ,
                cpuMoves : [] ,
                tunes : [ new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') ,
                          new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')] 
              };

   var on = 0 ;
   

   $("#start").click(function(){
       if( on === 0 )
         {
            on = 1 ;
         }
       else if ( on === 1)
         {   on = 0 ;
             $("#countshow").html("0"); 
             simon.count = 1;
             simon.playerMoves = [] ;
             simon.cpuMoves = [] ; 
         }
   });
   function createPattern(){
       for ( var i = 0 ; i < count ; i ++)
         {
            var temp = Math.floor(Math.random() * 4 );
            simon.cpuMoves.push(temp);
         }
       
    }
 
   
   function showPattern(){
       for(var j = 0 ; j < simon.cpuMoves.length ; j ++ )
        {

        }
   }
}) ;