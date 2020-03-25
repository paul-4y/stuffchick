import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('pages/Home'));

const Routes = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </Suspense>
);

export default Routes;
