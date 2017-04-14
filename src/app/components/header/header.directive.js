'use strict';

import headerTpl from './header.html';

function headerComponent() {
    'ngInject';

    return {
        restrict: 'E',
        replace: true,
        templateUrl: headerTpl,
        controller: 'headerCtrl',
        controllerAs: 'header'
    };
}

export default headerComponent;
