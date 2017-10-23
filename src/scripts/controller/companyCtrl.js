'use strict';
angular.module('app').controller('companyCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
  $http({
    method: 'GET',
    url: '/data/company.json?id='+$state.params.id
  }).then(function successCallback(resp) {
    console.log('-------company.json--------');
    console.log(resp.data);
    console.log('-------company.json--------');
      $scope.company=resp.data;

  }, function errorCallback(resp) {
});


}]);
