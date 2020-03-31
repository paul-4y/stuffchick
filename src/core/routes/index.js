import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import APP_ROUTES from './constants';

const Home = lazy(() => import('pages/Home'));
const Category = lazy(() => import('pages/Category'));
const Shop = lazy(() => import('pages/Shop'));
const Auth = lazy(() => import('pages/Auth'));

const Routes = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={APP_ROUTES.CATEGORIES} component={Category} />
            <Route exact path={APP_ROUTES.SHOP} component={Shop} />
            <Route exact path={APP_ROUTES.AUTH} component={Auth} />
        </Switch>
    </Suspense>
);

export default Routes;
