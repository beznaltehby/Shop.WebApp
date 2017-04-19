'use strict';

import i18nRu from './core/i18n/ru';

function config($logProvider, $compileProvider, $translateProvider) {
	'ngInject';

    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }

    $translateProvider.translations('ru', i18nRu);
    $translateProvider.preferredLanguage('ru');

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype):/);
}

export default config;
