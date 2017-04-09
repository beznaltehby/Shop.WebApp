'use strict';

function ItemController($state, itemData) {
    'ngInject';

    let vm = this;

    if (itemData.error) {
        $state.transitionTo('main');
    } else {
        vm.item = itemData;

        vm.item.shortDescription = itemData.shortDescriptionHTML.split('<br/>\n').map((item) => {
            let feature = item.split(': ');

            return {
                name: feature[0] + ':',
                value: feature[1] + '.'
            };
        });

        vm.warrantyFields = ['warranty', 'supplier', 'country', 'serviceCenters', 'manufacturer'];

        vm.returnToCategory = function () {
            $state.transitionTo('items', {categoryId: vm.item.category.id});
        }
    }
}

export default ItemController;
