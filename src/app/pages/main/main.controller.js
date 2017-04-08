'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import angularLogo from '_images/angular.png';

function MainController(CategoriesData) {
    'ngInject';

    let vm = this;

    vm.result = null;

    CategoriesData.getCategories()
        .then((categories) => vm.result = categories)
        .catch((err) => vm.result = err);
}

export default MainController;
