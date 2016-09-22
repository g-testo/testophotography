"use strict";
var app = angular.module("app", ['ngRoute', 'ngMaterial', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "pages/home.html",
        })
        .when('/artwork', {
            templateUrl: "pages/artwork_home.html",
        })
        .when('/2x4', {
            templateUrl: "pages/artwork/artwork_2x4.html",
        })
        .when('/2x6', {
            templateUrl: "pages/artwork/artwork_2x6.html",
        })
        .when('/custom', {
            templateUrl: "pages/artwork/artwork_custom.html",
        })
        .when('/about', {
            templateUrl: "pages/about_us.html",
        })
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API for removing the # in angular
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.controller('sideNavController', sideNavController);

function sideNavController($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
}

app.controller('MainCtrl', function($scope) {
        $scope.photos = [{
            image: 'images/2x4/bridge_boat.jpg',
            description: 'Image 00'
        }, {
            image: 'images/2x4/glow_nyc.jpg',
            description: 'Image 01'
        }, {
            image: 'images/2x4/hellgate_bridge.jpg',
            description: 'Image 02'
        }, {
            image: 'images/2x4/nyc_cityscape.jpg',
            description: 'Image 03'
        }, {
            image: 'images/2x4/nyc_night.jpg',
            description: 'Image 04'
        }];
    });