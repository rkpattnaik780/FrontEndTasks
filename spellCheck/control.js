$(document).ready(function(){
    var word_arr = [];
    var word_input = [];
    var out_put = "";
     $.getJSON("https://raw.githubusercontent.com/saisankargochhayat/gdg-prelims-2017/master/spellbug/dictionary.json", function(result){
        word_arr = result.commonWords;
      //  console.log(JSON.stringify(word_arr));
    });
  $("#add").click(function(){
      word_arr.push($("#new").val());
    //alert($("#new").val());
  });
  $("#submit").click(function(){
      var word_input = $("#input").val() ;
      word_input = word_input.split(" ");
      for( var i = 0 ; i < word_input.length ; i ++){
          if( i % 14 === 0 && i !== 0){
              out_put += '<br>'
          }
         if(word_arr.indexOf(word_input[i]) === -1){
             out_put += '<span class="red_text">' + word_input[i] + '&nbsp;</span>' ;
         }
            else{
                out_put += '<span>' + word_input[i] + '&nbsp;</span>' ;
            }
      }
     $("#out").html(out_put);
    // console.log(out_put);
     out_put = "" ;
     // alert();
  });
});