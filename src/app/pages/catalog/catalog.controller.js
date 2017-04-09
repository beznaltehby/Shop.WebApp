'use strict';

function CategoriesController($state, categoriesData) {
    'ngInject';

    let vm = this;

    if (!categoriesData.length) {
        $state.transitionTo('main');
    }

    vm.categories = categoriesData;
    vm.selectedRootCategory = vm.categories[0];
    vm.selectedSubCategory = vm.selectedRootCategory.children[0];

    vm.showItems = function (category) {
        $state.transitionTo('items', {categoryId: category.id});
    };

    vm.selectRootCategory = function (category) {
        vm.selectedRootCategory = category;
        vm.selectedSubCategory = vm.selectedRootCategory.children[0];
    };

    vm.selectSubCategory = function (category) {
        vm.selectedSubCategory = category;
    };
}

export default CategoriesController;
