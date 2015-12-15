angular.module('snakesApp').service('move', ['$rootScope', 'dice', function($rootScope, dice) {
    var self = this;
    function getNewPosition(currentPosition, steps) {
        return currentPosition + steps;
    };

    function allowed(newPosition) {
        if (newPosition <= 99) {
            return true;
        }
        return false;
    };

    this.takeTurn = function () {
        var player = $rootScope.currentPlayer,
            playerName = player + 1,
            currentPosition = $rootScope.players[player].currentPos,
            newPosition = getNewPosition(currentPosition, dice.roll());

        if (allowed(newPosition)) {
            var positionDetail = $rootScope.board[99 - newPosition],
                finalPosition = newPosition;

            if (positionDetail.start != positionDetail.end) { //climb up or slide down
                finalPosition = positionDetail.end;
            }

            $rootScope.players[player].currentPos = finalPosition;

            Materialize.toast('Player ' + playerName +  ' moves to position ' + (finalPosition + 1), 3000, 'rounded');

            if(newPosition === 99) {
                $rootScope.gameOver = true;
                Materialize.toast('Player ' + playerName +  ' is the winner!', 3000, 'rounded');
            }
        }
		else {
                Materialize.toast('Player ' + playerName +  ' cannot move...', 3000, 'rounded');
		}
    };

    this.setNextPlayer = function() {

        if($rootScope.currentPlayer === 0) {
            $rootScope.currentPlayer = 1;
        } else {
            $rootScope.currentPlayer = 0;
        }

		$rootScope.isLoading = false;
    };

}]);
