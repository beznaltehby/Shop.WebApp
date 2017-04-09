'use strict';

export default function(app) {
    app.service('ItemData', ItemData);
};

function ItemData ($q, ApiUrls) {
    'ngInject';

    this.items = {};

    this.loadItem = function (itemId) {
        let deferred = $q.defer();

        ApiUrls.getItem(itemId)
            .then(response => deferred.resolve(response.data.item))
            .catch(err => deferred.reject(err));

        this.items[itemId] = deferred.promise;
    };

    this.getItem = function (itemId) {
        if (!this.items[itemId]) {
            this.loadItem(itemId);
        }

        return this.items[itemId];
    };
}
