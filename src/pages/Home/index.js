import React from 'react';

import Layout from 'common/components/Layout';
import catalogue from 'core/mocks/catalogue';
import Catalogue from 'features/Catalogue';

const Home = () => (
    <Layout>
        <h1>Catalogue</h1>
        <Catalogue catalogue={catalogue} />
    </Layout>
);

export default Home;
