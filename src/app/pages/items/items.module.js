'use strict';

import './items.scss';

import itemsCtrl from './items.controller';

const items = angular.module('items', []);

items.controller('itemsCtrl', itemsCtrl);

export default items;
