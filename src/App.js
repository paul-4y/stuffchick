import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Layout from 'common/components/Layout';
import Routes from 'core/routes';

import './App.css';

const customHistory = createBrowserHistory();

function App() {
    return (
        <Router history={customHistory}>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    );
}

export default App;
