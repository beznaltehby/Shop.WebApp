'use strict';

function runBlock($rootScope) {
	'ngInject';

    $rootScope.indicators = {
        pageLoading: true
    };

    $rootScope.$on('$stateChangeStart', function () {
        $rootScope.indicators.pageLoading = true;
    });

    $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.indicators.pageLoading = false;
    });

    $rootScope.$on('$stateChangeError', function () {
        $rootScope.indicators.pageLoading = false;
    });
}

export default runBlock;
