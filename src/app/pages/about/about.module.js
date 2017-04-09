'use strict';

import './about.scss';

import aboutCtrl from './about.controller';

const aboutModule = angular.module('about', []);

aboutModule.controller('aboutCtrl', aboutCtrl);

export default aboutModule;
