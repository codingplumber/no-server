angular.module('weatherApp')
.controller('fiveDayCtrl', function($scope, service) {

  $scope.today = moment().add(0, 'days');

  $scope.forecastDays;

  $scope.getForecast = function(input) {
    $scope.forecast = false;
    //console.log(input);
    if (Number(input) && input.length === 5) {
      //console.log('I found a zip code');
        service.getForecastByZip(input).then(function(response){
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response.weatherIcon = '.jpg'
              break;
            }
          }

          console.log(response);

          $scope.forecast = response;
        });
    } else {
      //console.log('I found a city');
        service.getForecastByCity(input).then(function(response){
          for (var i = 0; i < 5; i++) {
            response[i].dt_txt = moment().add(i, 'days').format('dddd');
            switch (response[i].weather[0].main) {
              case 'Rain':
              response.weatherIcon = '.jpg'
              break;
            }
          }
          $scope.forecast = response;
        });
    }
  };

});
