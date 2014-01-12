'use strict';
var mp3io = angular.module('mp3-io.controllers');

mp3io.controller('tracksController', function ($scope,$location, $timeout) {

  var discoPath ="/disco/tracks/";

  $scope.items = [];


  var name = "PLACARD - Amor en el Fin del Mundo - 01 Corte Conmigo.mp3";
  var item =  {
    audio : discoPath + name,
    title : "01-Corté Conmigo",
    name  : name,
    src   :discoPath + "01.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 02 Ruta.mp3";
  var item =  {
    audio : discoPath + name,
    title : "02-Ruta",
    name  : name,
    src   :discoPath + "02.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 03 Amor en el Fin del Mundo.mp3";
  var item =  {
    audio : discoPath + name,
    title : "03-Amor en el Fin Del Mundo!",
    name  : name,
    src   :discoPath + "03.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 04 Mi Cancion.mp3";
  var item =  {
    audio : discoPath + name,
    title : "04-Mi Canción",
    name  : name,
    src   :discoPath + "04.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 05 Por Explotar!.mp3";
  var item =  {
    audio : discoPath + name,
    title : "05-Por Explotar",
    name  : name,
    src   :discoPath + "05.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 06 Pobre Azul.mp3";
  var item =  {
    audio : discoPath + name,
    title : "O6-Pobre Azul",
    name  : name,
    src   :discoPath + "06.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 07 Lluvia del 8 de Febrero.mp3";
  var item =  {
    audio : discoPath + name,
    title : "07-Lluvia del 8 de Febrero",
    name  : name,
    src   :discoPath + "07.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 08 Juli.mp3";
  var item =  {
    audio : discoPath + name,
    title : "08-Juli",
    name  : name,
    src   :discoPath + "08.jpg"
  }
  $scope.items.push(item);

  var name = "PLACARD - Amor en el Fin del Mundo - 09 Dormis Conmigo.mp3";
  var item =  {
    audio : discoPath + name,
    title : "09-Dormís Conmigo",
    name  : name,
    src   :discoPath + "09.jpg",
    showPlay: false,
  }
  $scope.items.push(item);


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

  $timeout(function(){

    $("#owl-demo").owlCarousel({

      autoPlay: 5000, //Set AutoPlay to 3 seconds

      singleItem:true

    });
    $("#owl-demo").show();
  },1000);

});
