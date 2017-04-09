'use strict';

import './search.scss';

import searchCtrl from './search.controller';

const searchModule = angular.module('search', []);

searchModule.controller('searchCtrl', searchCtrl);

export default searchModule;
