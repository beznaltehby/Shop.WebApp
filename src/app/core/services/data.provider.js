'use strict';

export default function (app) {
    app.provider('data', dataProvider);

    function dataProvider () {
        this.catalogDataPreloading = catalogDataPreloading;
        this.itemsDataPreloading = itemsDataPreloading;
        this.itemDataPreloading = itemDataPreloading;

        this.$get = function () {
            return this;
        };
    }

    function catalogDataPreloading (CatalogData) {
        'ngInject';

        return CatalogData.getCategories();
    }

    function itemsDataPreloading ($stateParams, ItemsData) {
        'ngInject';

        return ItemsData.getItems($stateParams.categoryId);
    }

    function itemDataPreloading ($stateParams, ItemData) {
        'ngInject';

        return ItemData.getItem($stateParams.itemId);
    }
}
