'use strict';
angular.module('app').controller('mainCtrl',['$http','$scope',function ($http,$scope) {
  $http({
    method: 'GET',
    url: '/data/positionList.json'
  }).then(function successCallback(resp) {
    console.log('-------positionList.json--------');
    console.log(resp.data);
    console.log('-------positionList.json--------');
      $scope.list=resp.data;
  }, function errorCallback(resp) {
});

}])
