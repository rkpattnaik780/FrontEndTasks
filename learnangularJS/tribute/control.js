var app = angular.module('myApp',[]) ;
app.controller('myCtrl', function($scope){
    $scope.test = {person : "Leonardo DiCaprio" , line : "The man who showed what is versatility" ,
                   pic : "leo.jpg" , wikilink : "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"} ;
    $scope.movies = ['What\'s Eating Gilbert Grape	1993' , 'The Basketball Diaries	1995' , "Romeo + Juliet	1996" , 
                     "Titanic	1997" , "Catch Me If You Can	2002" , "Gangs of New York	2002" , 
                     "The Aviator	2004" , "The Departed	2006" , "Blood Diamond	2006" ,
                     "Body of Lies	2008" ] ;
}) ;