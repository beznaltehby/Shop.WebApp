'use strict';

import _ from 'lodash';

function headerController($scope) {
    'ngInject';

    _.assign(this, $scope.data);
}

export default headerController;
