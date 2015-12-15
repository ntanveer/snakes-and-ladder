angular.module('snakesApp').controller('PlayCtrl', function ($scope, $rootScope, $timeout, dice, move) {
	$scope.startGame = function() {
        $rootScope.isLoading = true;

        $timeout(function(){move.takeTurn();},1000);

        if(!$rootScope.gameOver) {
            $timeout(function(){move.setNextPlayer();},2000);
        }
	}
});
