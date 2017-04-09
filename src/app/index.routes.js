'use strict';

import categoriesTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/categories/categories.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
    'ngInject';
    
    $stateProvider
        .state('categories', {
            url: '/categories',
            templateUrl: categoriesTemplate,
            controller: 'categoriesCtrl',
            controllerAs: 'categories',
            resolve: {
                asyncPreloading: resolverProvider.categoriesPagePreloading
            }
        });

    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('index.routes', [])
        .config(routeConfig);
