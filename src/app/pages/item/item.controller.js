'use strict';

function ItemController(itemData) {
    'ngInject';

    let vm = this;

    vm.item = itemData;

    vm.item.shortDescription = itemData.shortDescriptionHTML.split('<br/>\n').map((item) => {
        let feature = item.split(': ');

        return {
            name: feature[0] + ':',
            value: feature[1] + '.'
        };
    });

    vm.warrantyFields = ['warranty', 'supplier', 'country', 'serviceCenters', 'manufacturer'];
}

export default ItemController;
