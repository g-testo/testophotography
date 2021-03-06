"use strict";
var app = angular.module("app", ['ngRoute', 'ngMaterial','ngAnimate'])


app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "pages/home.html",
        }).when('/2x4', {
            templateUrl: "pages/artwork/artwork_2x4.html",
            controller: 'MainCtrl'
        }).when('/2x6', {
            templateUrl: "pages/artwork/artwork_2x6.html",
            controller: 'MainCtrl'
        }).when('/custom', {
            templateUrl: "pages/artwork/artwork_custom.html",
            controller: 'MainCtrl'
        }).when('/contact', {
            templateUrl: "pages/contact.html",
            controller: 'contactController'
        }).when('/album', {
            templateUrl: "pages/album.html",
            controller: 'albumCtrl'
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

app.controller('NavController', sideNavController);

app.controller('contactController', function($scope, $http) {
    $scope.submit = function(){
       var data = {
           name: $scope.name,
           email: $scope.email,
           mobile: $scope.mobile,
           subject: $scope.subject,
           message: $scope.message
       };
    $http.post('/contact/', data).success(function(response) {
        console.log("Success");
    }, function(response) {
        console.log("Contact form posting failure");
    });
   };
   $scope.showAddFields = function () {
     var x = document.getElementById('contactAddFields');
         if (x.style.display === 'none') {
             x.style.display = 'inline';
             $('#showToggle').text("Hide Additional Fields")
         } else {
             x.style.display = 'none';
             $('#showToggle').text("Show Additional Fields")
         }
    };
});

app.controller('albumCtrl', function($scope) {
  $scope.photoArr = [ 'images/album/manhendge.jpg', "images/album/taxi.jpg", "images/album/bridge_trees.jpg", "images/album/carstreaks.jpg", "images/album/cityscape.jpg", "images/album/streetscape.jpg", "images/album/clouds_cityscape.jpg", "images/album/sunset.jpg", "images/album/emptytraintracks.jpg", "images/album/park.jpg", "images/album/sunsetscape.jpg", "images/album/trains.jpg" ]
});

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
            icon: "images/icons_logo/home_icon.png",
            route: "/",
            swiper_adjust:"_home",
            close: true
        }, {
            name: "album",
            icon: "images/icons_logo/album_icon.png",
            route: "album",
            close: true
        }, {
            name: "Prints",
            icon: "images/icons_logo/print_icon.png",
            route: "#",
            close: false,
            subItems: [{
                name: "2x4",
                icon: "images/icons_logo/8_panel_icon.png",
                route: "2x4"
            }, {
                name: "2x6",
                icon: "images/icons_logo/12_panel_icon.png",
                route: "2x6"
            }, {
                name: "Custom",
                icon: "images/icons_logo/custom_panel_icon.png",
                route: "custom"
            }]
        }, {
            name: "About Us",
            icon: "images/icons_logo/contact_icon.png",
            route: "contact",
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
