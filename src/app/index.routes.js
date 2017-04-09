'use strict';

import catalogTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/catalog/catalog.html';
import itemsTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/items/items.html';
import itemTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/item/item.html';
import aboutTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/about/about.html';
import contactsTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/contacts/contacts.html';
import deliveryTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/delivery/delivery.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider, dataProvider) {
    'ngInject';
    
    $stateProvider
        .state('catalog', {
            url: '/catalog',
            templateUrl: catalogTemplate,
            controller: 'catalogCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.catalogPagePreloading,
                categoriesData: dataProvider.catalogDataPreloading
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

    $stateProvider
        .state('item', {
            url: '/item/:itemId',
            templateUrl: itemTemplate,
            controller: 'itemCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.itemPagePreloading,
                itemData: dataProvider.itemDataPreloading
            }
        });

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: aboutTemplate,
            controller: 'aboutCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.aboutPagePreloading
            }
        });

    $stateProvider
        .state('contacts', {
            url: '/contacts',
            templateUrl: contactsTemplate,
            controller: 'contactsCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.contactsPagePreloading
            }
        });

    $stateProvider
        .state('delivery', {
            url: '/delivery',
            templateUrl: deliveryTemplate,
            controller: 'deliveryCtrl',
            controllerAs: 'vm',
            resolve: {
                asyncPreloading: resolverProvider.deliveryPagePreloading
            }
        });


    $urlRouterProvider.otherwise('/');
}

export default angular
    .module('index.routes', [])
        .config(routeConfig);
