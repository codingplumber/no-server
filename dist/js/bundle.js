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
  });
});
'use strict';

angular.module('weatherApp').controller('compareCtrl', function ($scope) {});
'use strict';

angular.module('weatherApp').controller('homeCtrl', function ($scope) {});
'use strict';

angular.module('weatherApp').service('service', function ($http) {

  var key = '487aa862147eca2e1534962f9c5e1767';

  var weatherCity = 'api.openweathermap.org/data/2.5/weather?q=';

  var weatherZip = 'api.openweathermap.org/data/2.5/weather?zip='; /*{zip code}*/

  var getWeatherByCity = function getWeatherByCity(city) {};
});
//# sourceMappingURL=bundle.js.map
