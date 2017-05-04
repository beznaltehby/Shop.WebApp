'use strict';

import outsortingImage from '_images/outsorting.jpg';
import workstationImage from '_images/workstation.jpg';

function ItemsController() {
    'ngInject';

    let vm = this;

    vm.outsortingImage = outsortingImage;
    vm.workstationImage = workstationImage;
}

export default ItemsController;
