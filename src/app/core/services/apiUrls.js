'use strict';

export default function (app) {
    app.service('ApiUrls', ApiUrls);
}

function ApiUrls ($http, consts, $q, $timeout) {
    'ngInject';

    function getRequest(url, params) {
        return $http({
            method: 'GET',
            url: consts.baseApiUrl + url,
            params: params
        });
    }

    // TODO: remove after end developing
    this.mockRequest = function (param) {
        let deferred = $q.defer();

        $timeout(() => deferred.resolve({data: {item : 'mock: ' + param}}), 2000);

        return deferred.promise;
    };

    this.getCategories = function () {
        const url = '/categories';

        return getRequest(url);
    };

    this.getItemsFromCategory = function (categoryId) {
        const url = '/category/' + categoryId + '/items';

        return getRequest(url);
    };

    this.getItem = function (itemId) {
        const url = '/item/' + itemId;

        return getRequest(url);
    };
}