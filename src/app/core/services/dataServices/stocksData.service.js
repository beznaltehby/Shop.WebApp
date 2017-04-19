'use strict';

export default function(app) {
    app.service('StocksData', StocksData);
};

function StocksData ($q, ApiUrls) {
    'ngInject';

    this.stocks = null;

    this.loadStocks = function () {
        let deferred = $q.defer();

        ApiUrls.getStocks()
            .then(response => deferred.resolve(response.data.activeStocks))
            .catch(err => deferred.resolve([]));

        this.stocks = deferred.promise;
    };

    this.getStocks = function () {
        if (!this.stocks) {
            this.loadStocks();
        }

        return this.stocks;
    };
}
