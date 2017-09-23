'use stritct';
angular.module('app').directive('appPositionClass',[function () {
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/positionClass.html'
  }
}])
