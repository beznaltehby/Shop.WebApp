'use strict';

function CategoriesController(CategoriesData) {
    'ngInject';

    let vm = this;

    vm.result = null;

    CategoriesData.getCategories()
        .then(function (categories) {
            vm.result = categories;
        })
        .catch(err => vm.result = err);
}

export default CategoriesController;
