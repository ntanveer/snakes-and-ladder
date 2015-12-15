snakesApp.directive('gameBoard', [function() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/gameBoard.html',
        controller: 'BoardCtrl'
    };
}]);
