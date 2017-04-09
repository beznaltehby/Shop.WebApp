'use strict';

import headerModule from './components/header/header.module';
import pageLoader from './components/pageLoader/pageLoader.module'

export default angular.module('index.components', [
	headerModule.name,
    pageLoader.name
]);
