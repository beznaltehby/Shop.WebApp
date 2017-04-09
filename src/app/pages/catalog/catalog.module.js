'use strict';

import './catalog.scss';

import catalogCtrl from './catalog.controller';

const catalogModule = angular.module('catalog', []);

catalogModule.controller('catalogCtrl', catalogCtrl);

export default catalogModule;
