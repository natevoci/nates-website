import React, { Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, Redirect } from 'react-router-dom';

import { ROUTES } from './routes';

const NotFound = lazy(() => import('./scenes/NotFound'));

const Router = () => {
  const routes = Object.values(ROUTES);

  return (
    <HashRouter>
      <Suspense fallback={(
        <div></div>
      )}>
        <Routes>
          {routes.map(({ url, handleAnchor, route, element }) => (
            <Route
              key={route || url}
              path={route || url}
              element={element}
            >
              {handleAnchor ? (
                <Route
                  path=":anchor"
                  element={element}
                />
              ) : null}
            </Route>
          ))}
          <Route
            component={<NotFound />}  
          />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
