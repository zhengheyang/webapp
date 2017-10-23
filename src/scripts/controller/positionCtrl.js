'use strict';
angular.module('app').controller('positionCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
  $scope.isLogin=false;
  $http({
    method: 'GET',
    url: '/data/position.json?id='+$state.params.id
  }).then(function successCallback(resp) {
    console.log('-------position.json--------');
    console.log(resp.data);
    console.log('-------position.json--------');
    $scope.position=resp.data;
  }, function errorCallback(resp) {
})
}])
