'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from 'angular-ui-router';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';

const App = angular.module(
    'CashlessShop', [
        uiRouter,
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ngResource',
        'oc.lazyLoad',
        'pascalprecht.translate',

        coreModule.name,
        indexComponents.name,
        indexRoutes.name,
        mainModule.name
    ]
);

App.config(config).run(run);

export default App;
