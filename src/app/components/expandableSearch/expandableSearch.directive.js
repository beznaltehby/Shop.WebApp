'use strict';

import expandableSearchTpl from './expandableSearch.html';
import $ from 'jquery';

function expandableSearchComponent() {
    'ngInject';

    function link (scope) {
        scope.$watch(() => scope.expanded, () => {
            if (scope.expanded) {
                $('.search-input').focus();
            }
        });
    }

    return {
        restrict: 'E',
        templateUrl: expandableSearchTpl,
        scope: {
            searchQuery: '=',
            onSearch: '&'
        },
        controller: 'expandableSearchCtrl',
        controllerAs: 'vm',
        link: link
    };
}

export default expandableSearchComponent;
