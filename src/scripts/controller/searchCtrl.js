'use strict';
angular.module('app').controller('searchCtrl',['$scope','$http',function ($scope,$http) {
  $http({
    method: 'GET',
    url: '/data/positionList.json',
  }).then(function successCallback(resp) {
    console.log('-------positionList.json--------');
    console.log(resp.data);
    console.log('-------positionList.json--------');
    $scope.positionList=resp.data;
  }, function errorCallback(resp) {
  })
}])
