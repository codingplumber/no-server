angular.module('weatherApp')
.controller('homeCtrl', function($scope, service) {

  $scope.cityData = true;

  $scope.tempToday;

  $scope.getWeather = function(input) {
    $scope.cityData = false;
    if (Number(input) && input.length === 5) {
      console.log('I found a zip code');
        service.getWeatherByZip(input).then(function(response) {
          $scope.cityData = response;

        });
    } else {
      console.log('I found a city');
        service.getWeatherByCity(input).then(function(response) {
          $scope.cityData = response;

        });
    }
    $scope.searchLocation = '';
  };

});
