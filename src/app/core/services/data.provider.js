'use strict';

export default function (app) {
    app.provider('data', dataProvider);

    function dataProvider () {
        this.categoriesDataPreloading = categoriesDataPreloading;

        this.$get = function () {
            return this;
        };
    }

    function categoriesDataPreloading (CategoriesData) {
        'ngInject';

        return CategoriesData.getCategories();
    }
}
