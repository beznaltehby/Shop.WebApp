'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {
        this.categoriesPagePreloading = categoriesPagePreloading;
        this.itemsPagePreloading = itemsPagePreloading;

        this.$get = function () {
            return this;
        };
    }

    function categoriesPagePreloading ($q, $ocLazyLoad) {
        'ngInject';

        const deferred = $q.defer();

        require.ensure([], (require) => {
            const asyncModule = require('../../pages/categories/categories.module');

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
}
