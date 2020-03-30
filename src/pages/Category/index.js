import React from 'react';

import Category from 'features/Category';

const CategoryPage = ({ match }) => {
    const categoryId = match.params.id;
    return <Category categoryId={categoryId} />;
};

export default CategoryPage;
