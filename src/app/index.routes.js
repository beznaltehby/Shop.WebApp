'use strict';

import categoriesTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/categories/categories.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider, dataProvider) {
    'ngInject';
    
    $stateProvider
        .state('categories', {
            url: '/categories',
            templateUrl: categoriesTemplate,
            controller: 'categoriesCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.categoriesPagePreloading,
                categoriesData: dataProvider.categoriesDataPreloading
            }
        });

    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('index.routes', [])
        .config(routeConfig);
