'use strict';

function runBlock($window, $rootScope, $location) {
	'ngInject';

    $window.ga('create', 'UA-98152910-1', 'auto');

    $rootScope.indicators = {
        pageLoading: true
    };

    $rootScope.$on('$stateChangeStart', function () {
        $rootScope.indicators.pageLoading = true;
    });

    $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.indicators.pageLoading = false;
        $window.ga('send', 'pageview', $location.path());
    });

    $rootScope.$on('$stateChangeError', function () {
        $rootScope.indicators.pageLoading = false;
    });
}

export default runBlock;
