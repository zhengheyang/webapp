

angular.module('app').config(['$stateProvider','$urlRouterProvider',
function ($stateProvider,$urlRouterProvider) {
      'use strict';

      $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
      });
      $urlRouterProvider.otherwise('main')
}])
