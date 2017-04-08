angular.module('weatherApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './view/home.html',
      controller: 'homeCtrl'
    })
    .state('compare', {
      url: '/compare',
      templateUrl: './view/compare.html',
      controller: 'compareCtrl'
    })
    .state('fiveday', {
      url: '/fiveday',
      templateUrl: './view/fiveDayForecast.html',
      controller: 'fiveDayCtrl'
    })

});
