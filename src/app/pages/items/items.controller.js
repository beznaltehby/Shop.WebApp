'use strict';

function ItemsController($state, itemsData) {
    'ngInject';

    let vm = this;

    if (itemsData === false || !itemsData.length) {
        $state.transitionTo('catalog');
    }

    vm.items = itemsData;
}

export default ItemsController;
