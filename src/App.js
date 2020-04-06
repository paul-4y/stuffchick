import React, { useEffect, useState } from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Layout from 'common/components/Layout';
import Routes from 'core/routes';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import './App.css';

const customHistory = createBrowserHistory();

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            } else {
                setCurrentUser(null);
            }
        });
    }, [auth.onAuthStateChanged]);
    console.log('App -> currentUser', currentUser);

    return (
        <Router history={customHistory}>
            <Layout currentUser={currentUser}>
                <Routes />
            </Layout>
        </Router>
    );
}

export default App;
