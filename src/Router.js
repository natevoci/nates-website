import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';

import { ROUTES } from './routes';

const NotFound = lazy(() => import('./scenes/NotFound'));

const Router = () => {
  const routes = Object.values(ROUTES);

  return (
    <BrowserRouter>
      <Suspense fallback={(
        <div></div>
      )}>
        <Routes>
          {routes.map(({ url, Component }) => (
            <Route
              key={url}
              exact
              path={url}
              element={<Component />}
            />
          ))}
          <Route
            component={<NotFound />}  
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
