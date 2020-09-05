import angular from 'angular';

export default angular.module('poker', [])

    .controller('PokerCtrl', ['$scope',

        function ($scope) {

            $scope.name = 'Zack';

        }

    ]);

