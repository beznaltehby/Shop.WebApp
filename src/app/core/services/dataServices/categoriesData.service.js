'use strict';

export default function(app) {
    app.service('CategoriesData', CategoriesData);
};

function CategoriesData ($q, ApiUrls) {
    'ngInject';

    this.categories = null;

    this.loadCategories = function () {
        let deferred = $q.defer();

        ApiUrls.getCategories()
            .then(response => deferred.resolve(response.data.categories))
            .catch(err => deferred.reject(err));

        this.categories = deferred.promise;
    };

    this.getCategories = function () {
        if (!this.categories) {
            this.loadCategories();
        }

        return this.categories;
    };

    this.getCategoryId = function (category) {
        return this.getCategories().then((categories) => {
            return _.find(categories, {linkRewrite: category}).id;
        });
    };

    this.checkCategoryId = function (categoryId) {
        return this.getCategories().then((categories) => {
            return !!_.find(categories, {id: parseInt(categoryId)});
        });
    };
}
