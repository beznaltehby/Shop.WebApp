'use strict';

export default function (app) {
    app
        .constant('consts', {
            baseApiUrl: 'http://localhost:3000/api'
        });
}
