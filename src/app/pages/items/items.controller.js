'use strict';

function ItemsController($state, itemsData) {
    'ngInject';

    let vm = this;

    if (itemsData === false) {
        $state.transitionTo('categories');
    }

    vm.data = itemsData;
}

export default ItemsController;
