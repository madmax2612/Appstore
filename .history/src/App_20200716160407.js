import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={} />
  </Switch>
  </Suspense>
  </HashRouter>
  );
}

export default App;
