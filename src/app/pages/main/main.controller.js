'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import angularLogo from '_images/angular.png';

function MainController(mainData) {
    'ngInject';

    let vm = this;

    vm.popularItems = mainData.popularItems;
}

export default MainController;
