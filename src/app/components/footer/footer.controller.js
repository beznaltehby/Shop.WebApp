'use strict';

import moment from 'moment';

function footerController($rootScope) {
    'ngInject';

    let vm = this;

    vm.isItemPage = false;
    
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        vm.isItemPage = toState.name === 'item';
    });

    vm.year = moment().year();
}

export default footerController;
