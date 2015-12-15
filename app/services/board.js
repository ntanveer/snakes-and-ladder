angular.module('snakesApp').service('board', ['$rootScope',function($rootScope) {
    var ladders = [
        { "index": 14, "end": 48 },
        { "index": 19, "end": 60 },
        { "index": 55, "end": 76 },
        { "index": 78, "end": 97 }
        ],
        snakes = [
            { "index": 91, "end": 29 },
            { "index": 47, "end": 18 },
            { "index": 25, "end": 7 }
        ],
        board = [];

    this.build = function() {
        for (i = 0; i < 100; ++i) {
            board[i] = {
                "start": i,
                "end": i,
                "class":''
            };
        }

        for (i = 0; i < ladders.length; ++i) {
            board[(ladders[i].index - 1)].end = ladders[i].end - 1;
        }

        for (i = 0; i < snakes.length; ++i) {
            board[(snakes[i].index - 1)].end = snakes[i].end - 1;
        }

        $rootScope.board = board.reverse();

//        for (i = 0; i < 100; ++i) {
//            if(board[i].start > board[i].end){
//                board[i].class = board[i].class+'snake ';
//            }
//            if(board[i].start < board[i].end){
//                board[i].class = board[i].class+'ladder ';
//            }
//        }
    };
}]);
