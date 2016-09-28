"use strict";
var app = angular.module("app", ['ngRoute', 'ngMaterial','ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "pages/home.html",
        }).when('/2x4', {
            templateUrl: "pages/artwork/artwork_2x4.html",
            controller: 'MainCtrl',
        }).when('/2x6', {
            templateUrl: "pages/artwork/artwork_2x6.html",
            controller: 'MainCtrl',
        }).when('/custom', {
            templateUrl: "pages/artwork/artwork_custom.html",
            controller: 'MainCtrl',
        }).when('/about', {
            templateUrl: "pages/about.html",
        }).when('/album', {
            templateUrl: "pages/album.html",
        }).otherwise({
            redirectTo: '/'
        });
        // use the HTML5 History API for removing the # in angular
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

);

app.controller('MainCtrl', function($scope) {
});



app.controller('sideNavController', sideNavController);

function sideNavController($scope, $mdSidenav) {
    $scope.showChilds = function(index) {

        $scope.items[index].active = !$scope.items[index].active;
        collapseAnother(index);
    };

    var collapseAnother = function(index) {
        for (var i = 0; i < $scope.items.length; i++) {
            if (i != index) {
                $scope.items[i].active = false;
            }
        }
    };
    $scope.items = [{
            name: "Home",
            icon: "images/home_icon.png",
            route: "/",
            swiper_adjust:"_home",
            close: true
        }, {
            name: "album",
            icon: "images/album_icon.png",
            route: "album",
            close: true
        }, {
            name: "Prints",
            icon: "images/print_icon.png",
            route: "#",
            close: false,
            subItems: [{
                name: "2x4",
                route: "2x4"
            }, {
                name: "2x6",
                route: "2x6"
            }, {
                name: "Custom",
                route: "custom"
            }]
        }, {
            name: "About Us",
            icon: "images/contact_icon.png",
            route: "about",
            close: true
        }
    ];

    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
}