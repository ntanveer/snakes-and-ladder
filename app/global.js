var snakesGame = angular.module('snakesApp', []);
snakesGame.run(function ($rootScope) {
    $rootScope.players = [];
	$rootScope.currentPlayer = 0;
	$rootScope.gameOver = false;
	$rootScope.showBoard = false;
	$rootScope.isLoading = false;
});
