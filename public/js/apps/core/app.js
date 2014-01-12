'use strict';

angular.module('mp3-io', ['mp3-io.controllers'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/start.html',
    controller: 'startController'
  })
  .when('/tracks', {
    templateUrl: '/views/tracks.html',
    controller: 'tracksController'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(function ($rootScope) {

    moment().lang('es');
  });
