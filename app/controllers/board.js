var snakesApp = angular.module('snakesApp');

snakesApp.controller('BoardCtrl', function (board) {
    board.build();
});
