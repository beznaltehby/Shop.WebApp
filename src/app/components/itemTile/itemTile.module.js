'use strict';

import itemTileDirective from './itemTile.directive';
import itemTileController from './itemTile.controller';
import './itemTile.scss';

const itemTileModule = angular.module('itemTile', []);

itemTileModule.directive('itemTile', itemTileDirective);
itemTileModule.controller('itemTileCtrl', itemTileController);

export default itemTileModule;
