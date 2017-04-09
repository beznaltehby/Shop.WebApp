'use strict';

import './main.scss';

import route from './main.route';

const mainPageModule = angular.module('main', [
    'ui.router'
]);

mainPageModule.config(route);

export default mainPageModule;
