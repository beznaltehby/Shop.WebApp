'use strict';

import catalog from './catalogData.service';
import items from './itemsData.service';
import item from './itemData.service';

export default function (app) {
    catalog(app);
    items(app);
    item(app);
}
