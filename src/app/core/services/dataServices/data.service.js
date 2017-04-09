'use strict';

import categories from './categoriesData.service';
import items from './itemsData.service';

export default function (app) {
    categories(app);
    items(app);
}
