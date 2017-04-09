'use strict';

export default function(app) {
    app.service('MainData', MainData);
};

function MainData ($q, ApiUrls) {
    'ngInject';

    this.popularItems = null;

    this.loadPopularItems = function () {
        let deferred = $q.defer();

        ApiUrls.getPopularItems()
            .then(response => deferred.resolve(response.data))
            .catch(err => deferred.reject(err));

        this.popularItems = deferred.promise;
    };

    this.getPopularItems = function () {
        if (!this.popularItems) {
            this.loadPopularItems();
        }

        return this.popularItems;
    };
}
