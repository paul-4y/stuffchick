import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Layout from 'common/components/Layout';
import Routes from 'core/routes';
import { setCurrentUser } from 'core/store/user/user.actions';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import './App.css';

const customHistory = createBrowserHistory();

function App({ setCurrentUser }) {
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

    return (
        <Router history={customHistory}>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
