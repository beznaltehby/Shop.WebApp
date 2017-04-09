'use strict';

function CategoriesController(categoriesData) {
    'ngInject';

    let vm = this;

    vm.categories = categoriesData.data;

    vm.showData = function (category) {

    }
}

export default CategoriesController;
