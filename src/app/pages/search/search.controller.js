'use strict';

function SearchController($stateParams, $state, searchData) {
    'ngInject';

    let vm = this;

    if (searchData === false) {
        $state.transitionTo('main');
    } else {
        vm.searchedItems = searchData;
        vm.searchQuery = decodeURIComponent($stateParams.query);
    }
}

export default SearchController;
