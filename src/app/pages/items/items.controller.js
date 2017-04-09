'use strict';

function ItemsController($state, itemsData) {
    'ngInject';

    let vm = this;

    if (itemsData === false) {
        $state.transitionTo('categories');
    }

    vm.items = itemsData;
    vm.showItemDetails = function (item) {
        $state.transitionTo('item', {itemId: item.id});
    }
}

export default ItemsController;
