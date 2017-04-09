'use strict';

function expandableSearchController($scope, $timeout) {
    'ngInject';

    let vm = this;

    $scope.expanded = false;

    vm.submit = function () {
        if (!$scope.expanded) {
            $scope.searchQuery = '';
            $scope.expanded = true;
        } else {
            $timeout(() => $scope.onSearch());

            $scope.expanded = false;
        }
    };


    vm.cancel = function () {
        $scope.searchQuery = '';
        $scope.expanded = false;
    };

    vm.checkEsc = function ($event) {
        const escKeyCode = 27;

        if ($event.keyCode === escKeyCode) {
            vm.cancel();
        }
    }
}

export default expandableSearchController;
