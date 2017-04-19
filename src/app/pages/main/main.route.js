'use strict';

import mainTpl from './main.html';
import mainController from './main.controller';

function routeConfig($stateProvider, dataProvider) {
    'ngInject';

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: mainTpl,
            controller: mainController,
            controllerAs: 'vm',
            resolve: {
                mainData: dataProvider.mainDataPreloading,
                stocksData: dataProvider.stocksDataPreloading
            }
        });
}

export default routeConfig;
