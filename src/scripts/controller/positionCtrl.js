'use strict';
angular.module('app').controller('$http','positionCtrl',['$scope',function ($scope,$http) {
  $http({
    method: 'GET',
    url: '/data/position?id='+$state.params.id
  }).then(function successCallback(resp) {
      console.log(resp.data);
  }, function errorCallback(resp) {
});
}])
