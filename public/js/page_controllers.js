app.controller('sideNavController', sideNavController);
    
    function sideNavController ($scope, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
     };
        $scope.closeSideNavPanel = function() {
            $mdSidenav('left').close();
    };
}