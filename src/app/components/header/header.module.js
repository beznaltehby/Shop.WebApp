'use strict';

import headerDirective from './header.directive';
import headerController from './header.controller';
import './header.scss';

const headerModule = angular.module('main-header', []);

headerModule.directive('mainHeader', headerDirective);
headerModule.controller('headerCtrl', headerController);

export default headerModule;
