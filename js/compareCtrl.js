angular.module('weatherApp')
.controller('compareCtrl', function($scope, service) {

  $scope.cityData = true;

  $scope.compareCity1;
  $scope.compareCity2;
  $scope.compareCity3;

  $scope.getWeather1 = function(input) {
    $scope.cityData1 = false;
    if (Number(input) && input.length === 5) {
        service.getWeatherByZip(input).then(function(response) {
          $scope.cityData1 = response;

        });
    } else {
        service.getWeatherByCity(input).then(function(response) {
          $scope.cityData1 = response;
        });
    }
    $scope.searchLocation1 = '';
  };

  $scope.getWeather2 = function(input) {
    $scope.cityData2 = false;
    if (Number(input) && input.length === 5) {
        service.getWeatherByZip(input).then(function(response) {
          $scope.cityData2 = response;

        });
    } else {
        service.getWeatherByCity(input).then(function(response) {
          $scope.cityData2 = response;
        });
    }
    $scope.searchLocation2 = '';
  };

  $scope.getWeather3 = function(input) {
    $scope.cityData3 = false;
    if (Number(input) && input.length === 5) {
        service.getWeatherByZip(input).then(function(response) {
          $scope.cityData3 = response;

        });
    } else {
        service.getWeatherByCity(input).then(function(response) {
          $scope.cityData3 = response;
        });
    }
    $scope.searchLocation3 = '';
  };

});
