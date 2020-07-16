import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Loader } from './utils/Loader';
import { Navbar } from './Components/Navbar';

const Navbar = lazy(() => import("./components/Navbar"));
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
