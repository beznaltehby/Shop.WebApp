'use strict';

import footerDirective from './footer.directive';
import footerController from './footer.controller';
import './footer.scss';

const footerModule = angular.module('footer-module', []);

footerModule.directive('mainFooter', footerDirective);
footerModule.controller('footerCtrl', footerController);

export default footerModule;
