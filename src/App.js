import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Routes from 'core/routes';

import './App.css';

const customHistory = createBrowserHistory();

function App() {
    return (
        <Router history={customHistory}>
            <Routes />
        </Router>
    );
}

export default App;
