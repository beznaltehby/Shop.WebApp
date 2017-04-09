'use strict';

import './item.scss';

import itemCtrl from './item.controller';

const itemModule = angular.module('item', []);

itemModule.controller('itemCtrl', itemCtrl);

export default itemModule;
