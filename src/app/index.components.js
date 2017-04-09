'use strict';

import headerModule from './components/header/header.module';
import pageLoader from './components/pageLoader/pageLoader.module'
import itemTile from './components/itemTile/itemTile.module'
import itemsView from './components/itemsView/itemsView.module'
import imagesViewer from './components/imagesViewer/imagesViewer.module'
import expandableSearch from './components/expandableSearch/expandableSearch.module'

export default angular.module('index.components', [
    expandableSearch.name,
	headerModule.name,
    pageLoader.name,
    itemTile.name,
    itemsView.name,
    imagesViewer.name
]);
