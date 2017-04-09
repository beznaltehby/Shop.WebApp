'use strict';

import imagesViewerDirective from './imagesViewer.directive';
import imagesViewerController from './imagesViewer.controller';
import './imagesViewer.scss';

const imagesViewerModule = angular.module('imagesViewer', []);

imagesViewerModule.directive('imagesViewer', imagesViewerDirective);
imagesViewerModule.controller('imagesViewerCtrl', imagesViewerController);

export default imagesViewerModule;
