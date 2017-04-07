angular.module('weatherApp')
.service('service', function($http) {

  let key = '487aa862147eca2e1534962f9c5e1767';

  let weatherCity = 'api.openweathermap.org/data/2.5/weather?q=';  /*{city name}*/

  let weatherZip = 'api.openweathermap.org/data/2.5/weather?zip='  /*{zip code}*/

  var getWeatherByCity = function(city) {
    return $http({
      metod: 'GET',
      url: weatherCity + city + '&units=imperial' + 'APPID=' + key;
    })then(function(res) {
      console.log(res.data);
      // return res.data;
    });
  };

  var getWeatherByCity = function(zip) {
    return $http({
      metod: 'GET',
      url: weatherCity + zip + '&units=imperial' + 'APPID=' + key;
    })then(function(res) {
      console.log(res.data);
      // return res.data;
    });
  };

});
