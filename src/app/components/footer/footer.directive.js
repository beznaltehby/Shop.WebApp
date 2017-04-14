'use strict';

import footerTpl from './footer.html';

function footerComponent() {
    'ngInject';

    return {
        restrict: 'E',
        templateUrl: footerTpl,
        controller: 'footerCtrl',
        controllerAs: 'footer'
    };
}

export default footerComponent;
