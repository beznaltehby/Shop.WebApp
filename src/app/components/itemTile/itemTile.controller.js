'use strict';

function headerController($scope) {
    'ngInject';

    _.assign(this, $scope.data);
}

export default headerController;
