angular.module('snakesApp').service('dice', [function() {
    this.roll = function() {
        return Math.floor(Math.random() * 6) + 1;
    };
}]);
