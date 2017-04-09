'use strict';

import _ from 'lodash';

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

    let checkId = function (categories, id) {
        return !!_.find(categories, (category) => {
            if (category.id === id) {
                return true;
            }

            if (category.children) {
                return checkId(category.children, id);
            }
        });
    };

    this.checkCategoryId = function (categoryId) {
        return this.getCategories().then((categories) => {
            let id = parseInt(categoryId);

            return checkId(categories, id);
        });
    };
}
