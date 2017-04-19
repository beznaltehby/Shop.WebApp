'use strict';

import moment from 'moment';
import acerLogo from '_images/brands/acer-logo.png';
import apcLogo from '_images/brands/apc-logo.png';
import appleLogo from '_images/brands/apple-logo.png';
import asusLogo from '_images/brands/asus-logo.png';
import canonLogo from '_images/brands/canon-logo.png';
import ciscoLogo from '_images/brands/cisco-logo.png';
import hpLogo from '_images/brands/hp-logo.png';
import lenovoLogo from '_images/brands/lenovo-logo.png';
import logitechLogo from '_images/brands/logitech-logo.png';
import microsoftLogo from '_images/brands/microsoft-logo.png';

function footerController($rootScope) {
    'ngInject';

    let vm = this;

    vm.isItemPage = false;
    
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        vm.isItemPage = toState.name === 'item';
    });

    vm.year = moment().year();
    vm.brandsLogos = [
        canonLogo,
        hpLogo,
        asusLogo,
        appleLogo,
        ciscoLogo,
        microsoftLogo,
        apcLogo,
        acerLogo,
        lenovoLogo,
        logitechLogo
    ];
}

export default footerController;
