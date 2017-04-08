'use strict';

import  _ from 'lodash/core';
import moment from 'moment';
import angularLogo from '_images/angular.png';

function MainController(CategoriesData) {
    'ngInject';

    let vm = this;

    vm.result = null;

    CategoriesData.getCategories()
        .then(function (categories) {
            vm.result = categories;
        })
        .catch(function (err) {
            vm.result = err;
        });
}

export default MainController;
