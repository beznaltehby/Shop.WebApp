'use strict';

function StockController(stocksData) {
    'ngInject';

    let vm = this;

    vm.stocksData = stocksData;
}

export default StockController;
