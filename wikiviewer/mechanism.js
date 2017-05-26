$(document).ready(function(){
   $("#clk").click(function(){
     var searchrqst = $("#searchbar").val();
   var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchrqst +"&format=json&callback=?"; 
   $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data){
         for(var i = 0 ;i < data[1].length; i++)
          {$("#showresults").append("<li><a href=" + data[3][i] + ">" + data[1][i] +"</a><br><p>" + data[2][i]+ "</p></li>");}
        },
        error : function(errorMessage){
          alert("Error!!") ;
        } 
   });
   });  
});