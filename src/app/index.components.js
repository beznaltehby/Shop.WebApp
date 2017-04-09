'use strict';

import footerModule from './components/footer/footer.module';
import headerModule from './components/header/header.module';
import pageLoader from './components/pageLoader/pageLoader.module'

export default angular.module('index.components', [
	footerModule.name,
	headerModule.name,
    pageLoader.name
]);
