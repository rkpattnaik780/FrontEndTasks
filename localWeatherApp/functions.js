$(document).ready(function(){
var longtd , lattd , city , country , state ;
var api_l = "http://ip-api.com/json" ;
 $.getJSON(api_l, function(pos){
   longtd = pos.lon ;
   lattd = pos.lat;
   city = pos.city ;
   country = pos.country ;
   state = pos.regionName ;
  $("#ct").html( city + " ," + state +" ,"+ country) ;
 var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lattd+'&lon='+longtd+'&appid=b86d21440d8c9a110912a2eb0845abb4';
   var temp, tempc , tempf , hdty , wspeed ; 
  $.getJSON(api, function(data){
     temp = data.main.temp;
     hdty = data.main.humidity ;
     wspeed = data.wind.speed ;
    tempc = temp - 273 ;
    tempf = 9/5*tempc + 32 ;
    wspeed = wspeed * 1.852 ;
    $("#temp").html(tempc.toFixed(1) + "&deg;C");
     $("#tempf").html(tempf.toFixed(1) + "&deg;F");
      $("#hdty").html(hdty + '%') ;
    $("#ws").html(wspeed.toFixed(1) + ' knots') ;
  });
 });
});