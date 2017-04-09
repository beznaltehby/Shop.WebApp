'use strict';

import itemsViewTpl from './itemsView.html';
import $ from 'jquery';

function itemsViewComponent($timeout) {
    'ngInject';

    let tileWidth = 312;
    let scrollWidth = 17;

    function centerTiles () {
        let windowWidth = $(window).width();
        let remainingSpace = windowWidth % tileWidth - scrollWidth;
        remainingSpace = remainingSpace < 0 ? remainingSpace + tileWidth : remainingSpace;

        let viewerPadding = remainingSpace / 2;

        $('items-view').css({
            padding: '0 ' + viewerPadding + 'px'
        });
    }

    function link (scope, element) {
        $timeout(() => {
            if (scope.inline !== 'true') {
                centerTiles();

                $(window).on('resize.item-view', centerTiles);

                scope.$on('destroy', () => $(window).off('resize.item-view', centerTiles));
            } else {
                $(element).addClass('inline-mode');
            }
        });
    }

    return {
        restrict: 'E',
        scope: {
            data: '=',
            inline: '@'
        },
        templateUrl: itemsViewTpl,
        controller: 'itemsViewCtrl',
        controllerAs: 'vm',
        link: link
    };
}

export default itemsViewComponent;
