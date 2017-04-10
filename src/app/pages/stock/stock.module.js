'use strict';

import './stock.scss';

import stockCtrl from './stock.controller';

const stockModule = angular.module('stock', []);

stockModule.controller('stockCtrl', stockCtrl);

export default stockModule;
