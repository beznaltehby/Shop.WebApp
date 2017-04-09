'use strict';

function ItemsController($state, itemsData) {
    'ngInject';

    let vm = this;

    if (itemsData === false) {
        $state.transitionTo('categories');
    }

    vm.items = itemsData;
}

export default ItemsController;
