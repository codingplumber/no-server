'use strict';

angular.module('weatherApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './view/home.html',
    controller: 'homeCtrl'
  }).state('compare', {
    url: '/compare',
    templateUrl: './view/compare.html',
    controller: 'compareCtrl'
  }).state('fiveday', {
    url: '/fiveday',
    templateUrl: './view/fiveDayForecast.html',
    controller: 'fiveDayCtrl'
  });
});
'use strict';

angular.module('weatherApp').controller('compareCtrl', function ($scope, service) {

  $scope.cityData = true;

  $scope.compareCity1;
  $scope.compareCity2;
  $scope.compareCity3;

  $scope.getWeather1 = function (input) {
    $scope.cityData1 = false;
    if (Number(input) && input.length === 5) {
      service.getWeatherByZip(input).then(function (response) {
        $scope.cityData1 = response;
      });
    } else {
      service.getWeatherByCity(input).then(function (response) {
        $scope.cityData1 = response;
      });
    }
    $scope.searchLocation1 = '';
  };

  $scope.getWeather2 = function (input) {
    $scope.cityData2 = false;
    if (Number(input) && input.length === 5) {
      service.getWeatherByZip(input).then(function (response) {
        $scope.cityData2 = response;
      });
    } else {
      service.getWeatherByCity(input).then(function (response) {
        $scope.cityData2 = response;
      });
    }
    $scope.searchLocation2 = '';
  };

  $scope.getWeather3 = function (input) {
    $scope.cityData3 = false;
    if (Number(input) && input.length === 5) {
      service.getWeatherByZip(input).then(function (response) {
        $scope.cityData3 = response;
      });
    } else {
      service.getWeatherByCity(input).then(function (response) {
        $scope.cityData3 = response;
      });
    }
    $scope.searchLocation3 = '';
  };
});
'use strict';

angular.module('weatherApp').controller('fiveDayCtrl', function ($scope, service) {

  $scope.forecastDays;

  $scope.getForecast = function (input) {
    $scope.forecast = false;
    if (Number(input) && input.length === 5) {
      service.getForecastByZip(input).then(function (response) {
        console.log(response[0].weather[0].main);
        for (var i = 0; i < 5; i++) {
          response[i].dt_txt = moment().add(i, 'days').format('dddd');
          switch (response[i].weather[0].main) {
            case 'Rain':
              response[i].weatherIcon = './icons/Rain-50.png';
              break;
            case 'Clear':
              response[i].weatherIcon = './icons/Sun-50.png';
              break;
            case 'Clouds':
              response[i].weatherIcon = './icons/Cloud-50.png';
              break;
            case 'Snow':
              response[i].weatherIcon = './icons/Snow-50.png';
              break;
            case 'Thunderstorm':
              response[i].weatherIcon = './icons/Cloud Lightning-50.png';
              break;
            case 'Drizzle':
              response[i].weatherIcon = './icons/Rain-50.png';
              break;
          }
        }
        $scope.forecast = response;
      });
    } else {
      service.getForecastByCity(input).then(function (response) {
        for (var i = 0; i < 5; i++) {
          response[i].dt_txt = moment().add(i, 'days').format('dddd');
          switch (response[i].weather[0].main) {
            case 'Rain':
              response.weatherIcon = './icons/Rain-50.png';
              break;
            case 'Clear':
              response.weatherIcon = './icons/Sun-50.png';
              break;
            case 'Clouds':
              response.weatherIcon = './icons/Cloud-50.png';
              break;
            case 'Snow':
              response.weatherIcon = './icons/Snow-50.png';
              break;
            case 'Thunderstorm':
              response.weatherIcon = './icons/Cloud Lightning-50.png';
              break;
            case 'Drizzle':
              response.weatherIcon = './icons/Rain-50.png';
              break;
          }
        }
        $scope.forecast = response;
      });
    }
  };
});
'use strict';

angular.module('weatherApp').directive('headerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './view/headerView.html'
  };
});
'use strict';

angular.module('weatherApp').controller('homeCtrl', function ($scope, service) {

  $scope.cityData = true;

  $scope.tempToday;

  $scope.getWeather = function (input) {
    $scope.cityData = false;
    if (Number(input) && input.length === 5) {
      console.log('I found a zip code');
      service.getWeatherByZip(input).then(function (response) {
        $scope.cityData = response;
      });
    } else {
      console.log('I found a city');
      service.getWeatherByCity(input).then(function (response) {
        $scope.cityData = response;
      });
    }
    $scope.searchLocation = '';
  };
});
'use strict';

angular.module('weatherApp').service('service', function ($http) {

  var key = '487aa862147eca2e1534962f9c5e1767';

  var weatherCity = 'http://api.openweathermap.org/data/2.5/weather?q='; /*{city name}*/

  var weatherZip = 'http://api.openweathermap.org/data/2.5/weather?zip='; /*{zip code}*/

  var forecastCity = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  var forecastZip = 'http://api.openweathermap.org/data/2.5/forecast?zip=';

  this.getWeatherByCity = function (city) {
    //console.log(city);
    return $http({
      method: 'GET',
      url: weatherCity + city + '&units=imperial&APPID=' + key
    }).then(function (response) {
      return response.data;
    });
  };

  this.getWeatherByZip = function (zip) {
    //console.log('zip');
    return $http({
      method: 'GET',
      url: weatherZip + zip + '&units=imperial&APPID=' + key
    }).then(function (response) {
      return response.data;
    });
  };

  this.getForecastByCity = function (city) {
    return $http({
      method: 'GET',
      url: forecastCity + city + '&units=imperial&APPID=' + key
    }).then(function (response) {
      return response.data.list;
    });
  };

  this.getForecastByZip = function (zip) {
    return $http({
      method: 'GET',
      url: forecastZip + zip + '&units=imperial&APPID=' + key
    }).then(function (response) {
      return response.data.list;
    });
  };
});
//# sourceMappingURL=bundle.js.map
