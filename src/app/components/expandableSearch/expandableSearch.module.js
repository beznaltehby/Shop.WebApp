'use strict';

import expandableSearchDirective from './expandableSearch.directive';
import expandableSearchController from './expandableSearch.controller';
import './expandableSearch.scss';

const expandableSearchModule = angular.module('expandableSearch', []);

expandableSearchModule.directive('expandableSearch', expandableSearchDirective);
expandableSearchModule.controller('expandableSearchCtrl', expandableSearchController);

export default expandableSearchModule;
