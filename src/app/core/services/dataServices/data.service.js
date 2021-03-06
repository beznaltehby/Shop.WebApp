'use strict';

import catalog from './catalogData.service';
import items from './itemsData.service';
import item from './itemData.service';
import main from './mainData.service';
import search from './searchData.service';
import stocks from './stocksData.service';

export default function (app) {
    catalog(app);
    items(app);
    item(app);
    main(app);
    search(app);
    stocks(app);
}
