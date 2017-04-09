'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import resolverProvider from './services/resolver.provider';
import dataProvider from './services/data.provider';
import apiUrls from './services/apiUrls';
import data from './services/dataServices/data.service';

validationTestDirective(shared);

constants(shared);
resolverProvider(shared);
dataProvider(shared);
apiUrls(shared);
data(shared);

export default shared;
