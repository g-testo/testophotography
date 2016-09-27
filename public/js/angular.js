"use strict";
var app = angular.module("app", ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "pages/home.html",
        }).when('/artwork', {
            templateUrl: "pages/artwork_home.html",
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
            templateUrl: "pages/about_us.html",
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
            route: "/",
            swiper_adjust:"_home",
            close: true
        }, {
            name: "Artwork",
            route: "#",
            close: false,
            subItems: [{
                name: "Canvas 2x4",
                route: "2x4"
            }, {
                name: "Canvas 2x6",
                route: "2x6"
            }, {
                name: "Custom Canvas",
                route: "custom"
            }]
        },
        // {
        //     name: "About Us",
        //     route: "#",
        //     close: false,
        //     subItems: [{
        //         name: "History"
        //     }, {
        //         name: "Quality"
        //     }, {
        //         name: "Contact Us"
        //     }]
        // }
    ];

    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
}