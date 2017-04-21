'use strict';

import _ from 'lodash';
import headerBackground from '_images/header.jpg';
import mtsLogo from '_images/mts-logo.png';
import velcomLogo from '_images/velcom-logo.png';
import skypeLogo from '_images/skype-logo.png';
import emailLogo from '_images/email-logo.png';
import belnaztehLogo from '_images/belnazteh-logo.png';
import $ from 'jquery';

function headerController($state, $rootScope, consts, $log) {
    'ngInject';

    let vm = this;

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

        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    vm.searchQuery = '';
    vm.onSearch = function () {
        $state.transitionTo('search', {query: vm.searchQuery});
    };

    vm.headerBackground = headerBackground;
    vm.mtsLogo = mtsLogo;
    vm.velcomLogo = velcomLogo;
    vm.skypeLogo = skypeLogo;
    vm.emailLogo = emailLogo;
    vm.belnaztehLogo = belnaztehLogo;
}

export default headerController;
