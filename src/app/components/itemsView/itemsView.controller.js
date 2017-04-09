'use strict';

function headerController($scope, $state) {
    'ngInject';

    let vm = this;

    vm.items = $scope.data;

    vm.showItemDetails = function (item) {
        $state.transitionTo('item', {itemId: item.id});
    }
}

export default headerController;




