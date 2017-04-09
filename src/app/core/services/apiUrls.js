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
    this.mockRequest = function () {
        let deferred = $q.defer();

        $timeout(() => deferred.resolve({data: 'mock'}), 2000);

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
}
