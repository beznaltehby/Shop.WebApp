'use strict';

function CategoriesController($state, categoriesData) {
    'ngInject';

    let vm = this;

    vm.categories = categoriesData;

    vm.showData = function (category) {
        $state.transitionTo('items', {categoryId: category.id});
    }
}

export default CategoriesController;
