import React from 'react';

import categories from 'core/mocks/categories';
import Category from 'features/Category';

const Shop = () => categories.map((category) => <Category key={category.id} categoryId={category.id} />);

export default Shop;
