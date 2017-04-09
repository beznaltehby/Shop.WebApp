'use strict';

function imagesViewerController($scope) {
    'ngInject';

    let vm = this;

    vm.images = $scope.images;
    vm.selectedImage = null;

    vm.selectImage = function (image) {
        if (vm.selectedImage !== image) {
            vm.selectedImage = image;
        } else {
            vm.selectedImage = null;
        }
    };

    vm.closeImage = function () {
        vm.selectedImage = null;
    }
}

export default imagesViewerController;
