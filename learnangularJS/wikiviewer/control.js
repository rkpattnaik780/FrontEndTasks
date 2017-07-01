var app = angular.module('myApp' , []) ;
app.controller('myCtrl' , function($scope , $http){ 
    var store = $scope ;
      store.data = { "wikiLogo1" : "wikilogo.png" ,
                     "randomlink" : "https://en.wikipedia.org/wiki/Special:Random"
                    } ;
      store.showres = function(){
      $http({
    url:'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ store.searchTerm + '&format=json&callback=JSON_CALLBACK',
    method:'jsonp'
    
  }).success(function(res){
      console.log(res) ;
  });
    } ;
}) ; 