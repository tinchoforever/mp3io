'use strict';
var mp3io = angular.module('mp3-io.controllers');

mp3io.controller('tracksController', function ($scope,$location, $http, $timeout) {

  var trackPath ="/record/track/";
  var photoPath = "/record/photos/"

  $scope.items = [];

  $http.get('/record/mp3io.json')
         .then(function(res){
            for (var i = 0; i < res.data.length; i++) {
              var track =  res.data[i];
            
              var name = track.file;
              var item =  {
                audio : trackPath + name,
                title : track.title,
                name  : track.title,
                src   : photoPath + i + ".jpg",
                showPlay: false,
              }
              $scope.items.push(item);
            }
            $timeout(function(){
            $("#owl-demo").owlCarousel({

              autoPlay: 5000, //Set AutoPlay to 3 seconds

              singleItem:true

            });
            $("#owl-demo").show();
          },1000);

    });
  



  


  $scope.play = function(item){
    item.showPlay = true;
    item.player = document.createElement('audio');
    item.player.src = item.audio;
    item.player.play();
  }
  $scope.stop = function(item){
    item.showPlay = false;
    item.player.pause();
  }


});
