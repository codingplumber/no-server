angular.module('weatherApp')
.controller('fiveDayCtrl', function($scope, service) {

  $scope.forecastDays;

  $scope.getForecast = function(input) {
    $scope.forecast = false;
    if (Number(input) && input.length === 5) {
        service.getForecastByZip(input).then(function(response) {
          console.log(response[0].weather[0].main)
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response[i].weatherIcon = './icons/Rain-50.png'
              break;
              case 'Clear':
              response[i].weatherIcon = './icons/Sun-50.png'
              break;
              case 'Clouds':
              response[i].weatherIcon = './icons/Cloud-50.png'
              break;
              case 'Snow':
              response[i].weatherIcon = './icons/Snow-50.png'
              break;
              case 'Thunderstorm':
              response[i].weatherIcon = './icons/Cloud Lightning-50.png'
              break;
              case 'Drizzle':
              response[i].weatherIcon = './icons/Rain-50.png'
              break;
            }
          }
          $scope.forecast = response;
        });
    } else {
        service.getForecastByCity(input).then(function(response) {
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response[i].weatherIcon = './icons/Rain-50.png'
              break;
              case 'Clear':
              response[i].weatherIcon = './icons/Sun-50.png'
              break;
              case 'Clouds':
              response[i].weatherIcon = './icons/Cloud-50.png'
              break;
              case 'Snow':
              response[i].weatherIcon = './icons/Snow-50.png'
              break;
              case 'Thunderstorm':
              response[i].weatherIcon = './icons/Cloud Lightning-50.png'
              break;
              case 'Drizzle':
              response[i].weatherIcon = './icons/Rain-50.png'
              break;
            }
          }
          $scope.forecast = response;
        });
    }
  };

});
