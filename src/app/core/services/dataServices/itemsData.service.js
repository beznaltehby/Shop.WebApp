'use strict';

export default function(app) {
    app.service('ItemsData', ItemsData);
};

function ItemsData ($q, CategoriesData, ApiUrls) {
    'ngInject';

    this.items = {};

    this.loadItems = function (categoryId) {
        let deferred = $q.defer();

        ApiUrls.getItemsFromCategory(categoryId)
            .then(response => deferred.resolve(response.data.items))
            .catch(err => deferred.reject(err));

        this.items[categoryId] = deferred.promise;
    };

    this.checkCategoryId = function (categoryId) {
        return CategoriesData.checkCategoryId(categoryId);
    };

    this.getItems = function (categoryId) {
        return this.checkCategoryId(categoryId).then((isCategoryIdValid) => {
            if (isCategoryIdValid) {
                if (!this.items[categoryId]) {
                    this.loadItems(categoryId);
                }

                return this.items[categoryId];
            } else {
                return false;
            }
        });
    };
}
