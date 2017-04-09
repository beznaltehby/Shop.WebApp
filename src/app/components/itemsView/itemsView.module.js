'use strict';

import itemsViewDirective from './itemsView.directive';
import itemsViewController from './itemsView.controller';
import './itemsView.scss';

const itemsViewModule = angular.module('itemsView', []);

itemsViewModule.directive('itemsView', itemsViewDirective);
itemsViewModule.controller('itemsViewCtrl', itemsViewController);

export default itemsViewModule;
