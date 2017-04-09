'use strict';

import _ from 'lodash';

function headerController($state, $rootScope, consts) {
    'ngInject';

    let vm = this;

    vm.logoUrl = consts.logoUrl;
    vm.menuItems = [{
        translationKey: 'LABELS.MENU.CATALOG',
        state: 'catalog',
        activeStates: ['items', 'item']
    }, {
        translationKey: 'LABELS.MENU.DELIVERY',
        state: 'delivery'
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

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        selectMenuItem(toState.name);
    });
}

export default headerController;
