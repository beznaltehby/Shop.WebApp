'use strict';

import itemTileTpl from './itemTile.html';

function itemTileComponent() {
    'ngInject';

    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: itemTileTpl,
        controller: 'itemTileCtrl',
        controllerAs: 'item'
    };
}

export default itemTileComponent;
