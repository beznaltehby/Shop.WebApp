'use strict';

function pageLoaderDirective($timeout) {
    'ngInject';

    function link(scope, element) {
        scope.hide = function () {
            angular.element(document.querySelector('.page-loader')).addClass('loaded');
            $timeout(function () {
                element.removeClass('loading');
            }, 500);
        };

        scope.show = function () {
            angular.element(document.querySelector('.page-loader')).removeClass('loaded');
            element.addClass('loading');
        };
    }

    return {
        restrict: 'A',
        controller: 'pageLoaderCtrl',
        controllerAs: 'vm',
        link: link
    };
}

export default pageLoaderDirective;
