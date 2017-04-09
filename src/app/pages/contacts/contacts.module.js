'use strict';

import './contacts.scss';

import contactsCtrl from './contacts.controller';

const contactsModule = angular.module('contacts', []);

contactsModule.controller('contactsCtrl', contactsCtrl);

export default contactsModule;
