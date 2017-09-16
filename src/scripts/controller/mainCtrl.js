'use strict';
angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
  $scope.list=[{
    name:'销售',
    imgSrc:'image/company-3.png',
    companyName:'千度',
    city:'上海',
    industry:'互联网',
    time:'20165-06-01 11:05'
  },{
    name:'WEB前端',
    imgSrc:'image/company-1.png',
    companyName:'慕课网',
    city:'北京',
    industry:'互联网',
    time:'20165-06-01 01:05'
  }];
}])
