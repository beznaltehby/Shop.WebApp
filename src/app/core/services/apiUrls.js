'use strict';

export default function (app) {
    app.service('ApiUrls', ApiUrls);
}

function ApiUrls ($http, consts) {
    'ngInject';

    function getRequest(url, params) {
        return $http({
            method: 'GET',
            url: consts.baseApiUrl + url,
            params: params
        });
    }

    this.getCategories = function () {
        const url = '/categories';

        return getRequest(url);
    }
}
