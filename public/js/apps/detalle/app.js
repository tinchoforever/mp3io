'use strict';

angular.module('mp3-io', ['mp3-io.controllers', 'mp3-io.services'])
  .run(function ($rootScope) {
    moment().lang('es');
  });
