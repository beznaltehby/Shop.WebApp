'use strict';

export default function (app) {
    app.service('ApiUrls', ApiUrls);
}

function ApiUrls ($http, consts) {
    'ngInject';

    function getParams(params) {
        return Object.assign({key: consts.apiKey}, params);
    }

    function getRequest(url, params) {
        return $http({
            method: 'GET',
            url: consts.baseApiUrl + url,
            params: getParams(params)
        });
    }

    this.getCategories = function () {
        const url = '/categories';

        return getRequest(url);
    }
}
