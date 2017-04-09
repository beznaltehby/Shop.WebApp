'use strict';

import headerModule from './components/header/header.module';
import pageLoader from './components/pageLoader/pageLoader.module'
import itemTile from './components/itemTile/itemTile.module'
import itemsView from './components/itemsView/itemsView.module'
import imagesViewer from './components/imagesViewer/imagesViewer.module'

export default angular.module('index.components', [
	headerModule.name,
    pageLoader.name,
    itemTile.name,
    itemsView.name,
    imagesViewer.name
]);
