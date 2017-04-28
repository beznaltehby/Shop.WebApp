'use strict';

function StockController($sce, stocksData) {
    'ngInject';

    let vm = this;

    vm.stocksData = stocksData;
    vm.trustAsHtml = function (htmlString) {
        return $sce.trustAsHtml(htmlString);
    }
}

export default StockController;
