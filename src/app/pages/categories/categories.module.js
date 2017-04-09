'use strict';

import './categories.scss';

import categoriesCtrl from './categories.controller';

const categoriesModule = angular.module('categories', []);

categoriesModule.controller('categoriesCtrl', categoriesCtrl);

export default categoriesModule;
