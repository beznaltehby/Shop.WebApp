'use strict';

import categoriesTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/categories/categories.html';
import itemsTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/items/items.html';

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

    $stateProvider
        .state('items', {
            url: '/items/:categoryId',
            templateUrl: itemsTemplate,
            controller: 'itemsCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.itemsPagePreloading,
                itemsData: dataProvider.itemsDataPreloading
            }
        });


    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('index.routes', [])
        .config(routeConfig);
