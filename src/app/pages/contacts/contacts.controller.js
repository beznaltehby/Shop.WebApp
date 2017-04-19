'use strict';

import mtsLogo from '_images/mts-logo.png';
import velcomLogo from '_images/velcom-logo.png';
import skypeLogo from '_images/skype-logo.png';
import emailLogo from '_images/email-logo.png';

function ContactsController() {
    'ngInject';

    let vm = this;

    vm.mtsLogo = mtsLogo;
    vm.velcomLogo = velcomLogo;
    vm.skypeLogo = skypeLogo;
    vm.emailLogo = emailLogo;
}

export default ContactsController;
