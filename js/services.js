angular.module('weatherApp')
.service('service', function($http) {

  let key = '487aa862147eca2e1534962f9c5e1767';

  let weatherCity = 'http://api.openweathermap.org/data/2.5/weather?q=';  /*{city name}*/

  let weatherZip = 'http://api.openweathermap.org/data/2.5/weather?zip=';  /*{zip code}*/

  let forecastCity = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  let forecastZip = 'http://api.openweathermap.org/data/2.5/forecast?zip=';

  this.getWeatherByCity = function(city) {
    return $http({
      method: 'GET',
      url: weatherCity + city + '&units=imperial&APPID=' + key
    }).then(function(response) {
      return response.data;
    });
  };

  this.getWeatherByZip = function(zip) {
    return $http({
      method: 'GET',
      url: weatherZip + zip + '&units=imperial&APPID=' + key
    }).then(function(response) {
      return response.data;
    });
  };

  this.getForecastByCity = function(city) {
    return $http({
      method: 'GET',
      url: forecastCity + city + '&units=imperial&APPID=' + key
    }).then(function(response) {
      return response.data.list;
    });
  };

  this.getForecastByZip = function(zip) {
    return $http({
      method: 'GET',
      url: forecastZip + zip + '&units=imperial&APPID=' + key
    }).then(function(response) {
      return response.data.list;
    });
  };


});
