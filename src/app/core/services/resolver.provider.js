'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.catalogPagePreloading = catalogPagePreloading;
        this.itemsPagePreloading = itemsPagePreloading;
        this.itemPagePreloading = itemPagePreloading;
        this.aboutPagePreloading = aboutPagePreloading;
        this.contactsPagePreloading = contactsPagePreloading;
        this.deliveryPagePreloading = deliveryPagePreloading;

        this.$get = function () {
            return this;
        };
    }

    function catalogPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/catalog/catalog.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }

    function itemsPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/items/items.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }

    function itemPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/item/item.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }

    function aboutPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/about/about.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }

    function contactsPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/contacts/contacts.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }

    function deliveryPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/delivery/delivery.module');

            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });

            deferred.resolve(asyncModule.default.controller);
        });

        return deferred.promise;
    }
}
