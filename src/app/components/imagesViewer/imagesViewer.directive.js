'use strict';

import imagesViewerTpl from './imagesViewer.html';

function imagesViewerComponent() {
    'ngInject';

    return {
        restrict: 'E',
        scope: {
            images: '='
        },
        templateUrl: imagesViewerTpl,
        controller: 'imagesViewerCtrl',
        controllerAs: 'vm'
    };
}

export default imagesViewerComponent;
