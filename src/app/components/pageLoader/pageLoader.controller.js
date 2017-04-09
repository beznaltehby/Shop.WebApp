'use strict';

function pageLoaderController($rootScope, $scope) {
    'ngInject';

    $scope.$watch(function () {
        return $rootScope.indicators.pageLoading;
    }, function (loading) {
        if (!loading) {
            $scope.hide();
        } else {
            $scope.show();
        }
    });
}

export default pageLoaderController;
