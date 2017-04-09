'use strict';

import catalog from './catalogData.service';
import items from './itemsData.service';

export default function (app) {
    catalog(app);
    items(app);
}
