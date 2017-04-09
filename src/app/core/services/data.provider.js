'use strict';

export default function (app) {
    app.provider('data', dataProvider);

    function dataProvider () {
        this.categoriesDataPreloading = categoriesDataPreloading;
        this.itemsDataPreloading = itemsDataPreloading;

        this.$get = function () {
            return this;
        };
    }

    function categoriesDataPreloading (CategoriesData) {
        'ngInject';

        return CategoriesData.getCategories();
    }

    function itemsDataPreloading ($stateParams, ItemsData) {
        'ngInject';

        return ItemsData.getItems($stateParams.categoryId);
    }
}
