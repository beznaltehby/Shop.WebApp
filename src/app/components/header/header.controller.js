'use strict';

import _ from 'lodash';
import headerBackground from '_images/header.jpg';

function headerController($state, $rootScope, consts, $log) {
    'ngInject';

    let vm = this;

    vm.logoUrl = consts.logoUrl;
    vm.menuItems = [{
        translationKey: 'LABELS.MENU.CATALOG',
        state: 'catalog',
        activeStates: ['items', 'item']
    }, {
        translationKey: 'LABELS.MENU.STOCK',
        state: 'stock'
    }, {
        translationKey: 'LABELS.MENU.ABOUT',
        state: 'about'
    }, {
        translationKey: 'LABELS.MENU.CONTACTS',
        state: 'contacts'
    }];

    vm.goTo = function (state) {
        $state.transitionTo(state);
        selectMenuItem(state);
    };

    let selectMenuItem = function (state) {
        vm.menuItems.forEach((item) => {
            item.isActive = item.state === state || _.includes(item.activeStates, state);
        });
    };

    vm.isMainHeader = false;

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        selectMenuItem(toState.name);

        vm.isMainHeader = toState.name === 'main';
    });

    vm.searchQuery = '';
    vm.onSearch = function () {
        $state.transitionTo('search', {query: vm.searchQuery});
    };

    vm.headerBackground = headerBackground;
}

export default headerController;
