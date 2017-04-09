'use strict';

import pagetLoaderDirective from './pageLoader.directive';
import pagetLoaderController from './pageLoader.controller';

const pageLoaderModule = angular.module('pageLoader', []);

pageLoaderModule.directive('pageLoader', pagetLoaderDirective);
pageLoaderModule.controller('pageLoaderCtrl', pagetLoaderController);

export default pageLoaderModule;
