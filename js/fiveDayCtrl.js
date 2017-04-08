angular.module('weatherApp')
.controller('fiveDayCtrl', function($scope, service) {

  $scope.forecastDays;

  $scope.getForecast = function(input) {
    $scope.forecast = false;
    if (Number(input) && input.length === 5) {
        service.getForecastByZip(input).then(function(response) {
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response.weatherIcon = '.jpg' /* <--------- enter image */
              break;
              // finish this for images of weather
            }
          }
          $scope.forecast = response;
        });
    } else {
      //console.log('I found a city');
        service.getForecastByCity(input).then(function(response) {
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response.weatherIcon = '.jpg'
              break;
              // finish this for images of weather
            }
          }
          $scope.forecast = response;
        });
    }
  };

});
