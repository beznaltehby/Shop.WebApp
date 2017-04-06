'use strict';

import i18nEn from './core/i18n/en';

function config($logProvider, $compileProvider, $translateProvider) {
	'ngInject';

    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }

    $translateProvider.translations('en', i18nEn);
    $translateProvider.preferredLanguage('en');
}

export default config;