'use strict';

export default function(app) {
    app.service('CategoriesData', CategoriesData);
};

function CategoriesData ($q, ApiUrls) {
    'ngInject';

    this.categories = null;

    this.loadCategories = function () {
        let deferred = $q.defer();

        ApiUrls.getCategories().then(function (response) {
            deferred.resolve(response);
        }, function (err) {
            deferred.reject(err);
        });

        this.categories = deferred.promise;
    };

    this.getCategories = function () {
        if (!this.categories) {
            this.loadCategories();
        }

        return this.categories;
    };
}
