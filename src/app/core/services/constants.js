'use strict';

export default function (app) {
    app
        .constant('consts', {
            baseApiUrl: 'http://localhost:3000/api',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/No-logo.svg/2000px-No-logo.svg.png'
        });
}