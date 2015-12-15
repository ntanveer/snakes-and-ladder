snakesApp.directive('appHeader', [function() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/appHeader.html',
        controller: 'GameCtrl'
    };
}]);
