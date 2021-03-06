import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Loader } from './utils/Loader/Loader';

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
function App() {
  return (
    <HashRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Navbar} />
  </Switch>
  </Suspense>
  </HashRouter>
  );
}

export default App;
