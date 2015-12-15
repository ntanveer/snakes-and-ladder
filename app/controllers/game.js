angular.module('snakesApp').controller('GameCtrl', function ($scope, $rootScope) {

	$scope.initializeGame = function() {
        $rootScope.players[0] = { 'currentPos': -1 };
        $rootScope.players[1] = { 'currentPos': -1 };
        $rootScope.currentPlayer = 0;
        $rootScope.gameOver = false;
        $rootScope.showBoard = true;
	}
});
