var app = angular.module("app",['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl:"pages/app.html",
        })
    .when('/artwork', {
        templateUrl:"pages/artwork_index.html",
    })
    .when('/1x4', {
        templateUrl:"pages/artwork/artwork_1x4.html",
    })
    .when('/2x2', {
        templateUrl:"pages/artwork/artwork_2x2.html",
    })
    .when('/2x4', {
        templateUrl:"pages/artwork/artwork_2x4.html",
    })
    .when('/custom', {
        templateUrl:"pages/artwork/artwork_custom.html",
    })
    .when('/about', {
        templateUrl:"pages/about_us.html",
    })
    .otherwise({
		redirectTo: '#/'
    });
});

app.controller('sideNavController', sideNavController);
    
    function sideNavController ($scope, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
     };
        $scope.closeSideNavPanel = function() {
            $mdSidenav('left').close();
    };
}


