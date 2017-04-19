'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import assistLogo from '_images/clients/assist-logo.png';
import bifLogo from '_images/clients/bif-logo.jpg';
import estalejLogo from '_images/clients/estalej-logo.png';
import goodelLogo from '_images/clients/goodel-logo.png';
import medinatLogo from '_images/clients/medinat-logo.jpg';

function MainController(mainData, stocksData) {
    'ngInject';

    let vm = this;

    vm.popularItems = mainData.popularItems;
    vm.clients = [
        goodelLogo,
        estalejLogo,
        assistLogo,
        medinatLogo,
        bifLogo
    ];

    vm.stocksData = _.filter(stocksData, 'image');
}

export default MainController;
