import React from 'react';

import catalogue from 'core/mocks/catalogue';
import Catalogue from 'features/Catalogue';

const Home = () => (
    <>
        <h1>Catalogue</h1>
        <Catalogue catalogue={catalogue} />
    </>
);

export default Home;
