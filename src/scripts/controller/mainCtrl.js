'use strict';
angular.module('app').controller('mainCtrl',function ($http,$scope) {
  $http({
    method: 'GET',
    url: '/data/positionList.json'
  }).then(function successCallback(resp) {
      console.log(resp.data);
      $scope.list=resp.data;
  }, function errorCallback(resp) {
});

})
