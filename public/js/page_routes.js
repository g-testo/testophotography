var app = angular.module("app",['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl:"pages/app.html",
        controller:"appCtrl"
        })
    .when('/artwork', {
        templateUrl:"pages/artwork_index.html",
        controller:"artworkCtrl"
    })
    .when('/1x4', {
        templateUrl:"pages/artwork_1x4.html",
        controller:"artworkCtrl"
    })
    .when('/2x2', {
        templateUrl:"pages/artwork_2x2.html",
        controller:"artworkCtrl"
    })
    .when('/2x4', {
        templateUrl:"pages/artwork_2x4.html",
        controller:"artworkCtrl"
    })
    .when('/custom', {
        templateUrl:"pages/artwork_custom.html",
        controller:"artworkCtrl"
    })
    .when('/about', {
        templateUrl:"pages/about_us.html",
        controller:"artworkCtrl"
    })
    .otherwise({
		redirectTo: '#/'
      });
});