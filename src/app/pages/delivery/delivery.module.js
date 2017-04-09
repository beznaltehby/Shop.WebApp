'use strict';

import './delivery.scss';

import deliveryCtrl from './delivery.controller';

const deliveryModule = angular.module('delivery', []);

deliveryModule.controller('deliveryCtrl', deliveryCtrl);

export default deliveryModule;
