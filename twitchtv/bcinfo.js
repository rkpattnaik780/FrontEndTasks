var channelNames = ["saltyteemo", "cretetion", "freecodecamp", "storbeck", "habathcx", "noobs2ninjas", "brunofin", "OgamingSC2", "ESL_SC2"];
$(document).ready(function () {
  $('body').css("background-image", "url('http://th04.deviantart.net/fs70/PRE/f/2012/274/2/1/twitch_tv_minimalistic_background_by_vaughnwhiskey-d5giu64.png')");
  $("body").css("background-attachment", "fixed");
  // $("body").css("opacity" , "0.4") ;
  var fcc = "https://api.twitch.tv/kraken/streams/" + channelNames[2] + "?client_id=59x9ex7f5zzongzntqx0zrwleoxy12";
  $.getJSON(fcc).done(function (data) {
    // console.log(data);
    if (data.stream === null) {
      $('#fcc').html('FreeCodeCamp is offline');
    } else {
      $('#fcc').html('FreeCodeCamp is ONLINE!');
    }
  });
  var channellist = ["saltyteemo", "cretetion", "freecodecamp", "storbeck", "habathcx", "noobs2ninjas", "brunofin"];
  for (var i = 0; i < channelNames.length; i++) {   // var tempname = channelNames[i] ;

    //    var recurr = "https://api.twitch.tv/kraken/streams/" + tempname + "?client_id=59x9ex7f5zzongzntqx0zrwleoxy12" ;
    (function (i) {
      $.getJSON("https://api.twitch.tv/kraken/streams/" + channelNames[i] + "?client_id=59x9ex7f5zzongzntqx0zrwleoxy12").done(function (data2) {

        if (data2.stream === null) {
          $("#lst").append("<tr><td><img src = 'reddot.jpg' height = '50px' width = '50px'></td><td>" + channelNames[i] + "</td><td> Channel is offline! " + "</td></tr>");

        } else {
          $("#lst").append("<tr><td><img src = '" + data2.stream.preview.small + "' height = '50px' width = '50px'>" +
            "</td><td>" + channelNames[i] + "<br> Now playing - " + data2.stream.game + "<br> No. of viewers - " + data2.stream.viewers
            + "</td><td><b>Channel is online!</b> " + "</td></tr>");


        }
      });

    })(i);
  }
});



