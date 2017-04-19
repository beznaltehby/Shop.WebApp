'use strict';

function CategoriesController($state, categoriesData) {
    'ngInject';

    let vm = this;

    if (!categoriesData.length) {
        $state.transitionTo('main');
    } else {
        vm.categories = categoriesData;
        vm.selectedRootCategory = vm.categories[0];

        let preselectFirstSubCategory = function () {
            if (vm.selectedRootCategory.children[0].children) {
                vm.selectedSubCategory = vm.selectedRootCategory.children[0];
            } else {
                vm.selectedSubCategory = {};
            }
        }
        
        preselectFirstSubCategory();

        vm.showItems = function (category) {
            $state.transitionTo('items', {categoryId: category.id});
        };

        vm.selectRootCategory = function (category) {
            vm.selectedRootCategory = category;

            preselectFirstSubCategory();
        };

        vm.selectSubCategory = function (category) {
            if (category.children) {
                vm.selectedSubCategory = category;
            } else {
                vm.showItems(category);
            }
        };
    }
}

export default CategoriesController;
