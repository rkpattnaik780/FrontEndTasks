$(document).ready(function(){
    var checkArr = [10,10,10,10,10,10,10,10,10,10] ;
    function checkWinPlayer(){
        if(checkArr[1] === 1 && checkArr[2] === 1 && checkArr[3] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[4] === 1 && checkArr[5] === 1 && checkArr[6] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[7] === 1 && checkArr[8] === 1 && checkArr[9] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[1] === 1 && checkArr[5] === 1 && checkArr[9] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[3] === 1 && checkArr[5] === 1 && checkArr[7] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[1] === 1 && checkArr[4] === 1 && checkArr[7] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[2] === 1 && checkArr[5] === 1 && checkArr[8] === 1)
          {
              alert("Player wins!") ;
          }
        if(checkArr[3] === 1 && checkArr[6] === 1 && checkArr[9] === 1)
          {
              alert("Player wins!") ;
          }
    }
    function checkWinCpu(){
        if(checkArr[1] === 0 && checkArr[2] === 0 && checkArr[3] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[4] === 0 && checkArr[5] === 0 && checkArr[6] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[7] === 0 && checkArr[8] === 0 && checkArr[9] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[1] === 0 && checkArr[5] === 0 && checkArr[9] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[3] === 0 && checkArr[5] === 0 && checkArr[7] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[1] === 0 && checkArr[4] === 0 && checkArr[7] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[2] === 0 && checkArr[5] === 0 && checkArr[8] === 0)
          {
              alert("CPU wins!") ;
          }
        if(checkArr[3] === 0 && checkArr[6] === 0 && checkArr[9] === 10)
          {
              alert("CPU wins!") ;
          }
    }
    function updateBox (obtain , obtain1){
        $("#" + obtain).attr("src","cross.jpg") ;
        checkArr[obtain1] = 1 ;
     };
     function cpuMove()
      {   var available = [] , count = 0 , gen;
          for( var i = 1 ; i <= 9 ; i ++)
           {
               if(checkArr[i] === 10)
               {
                   available.push(i) ;
               }
           }
           count = available.length ;
           gen = Math.floor(Math.random() * count); 
          checkArr[available[gen]] = 0 ;          
          $("#" + available[gen] ).attr("src","circle.png") ; 
      }
  $(".a").click(function(){
      var obtain = $(this).attr('id') ;
       var obtain1 = parseInt(obtain) ;
      if(checkArr[obtain1] === 10)
       { 
         updateBox( obtain , obtain1 ) ;
         setTimeout( cpuMove , 2000 ) ;
         checkWinPlayer();
         checkWinCpu();
       }
  });
});