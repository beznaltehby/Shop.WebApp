'use strict';

import moment from 'moment';

function footerController() {
    'ngInject';

    this.year = moment().year();
}

export default footerController;