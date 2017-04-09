'use strict';

export default function(app) {
    app.service('SearchData', SearchData);
};

function SearchData ($q, ApiUrls) {
    'ngInject';

    this.items = {};

    this.loadSearchedItems = function (query) {
        let deferred = $q.defer();

        ApiUrls.getSearchedItems(query)
            .then(response => deferred.resolve(response.data.searchedItems))
            .catch(err => deferred.reject(err));

        this.items[query] = deferred.promise;
    };

    this.getSearchedItems = function (query) {
        if (!this.items[query]) {
            this.loadSearchedItems(query);
        }

        return this.items[query];
    };
}
