'use strict';

import "../assets/styles/index.scss";
import '!!file-loader?name=[name].[ext]!../favicon.ico';
import "./index.vendor";
import "./index.module";

angular.element(document).ready(() => {
    angular.bootstrap(document, ['CashlessShop'], {
        strictDi: true
    });
});