import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Posts, CurrentPosts } from './pages';

import './index.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={Posts} exact />
      <Route
        path="/details/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <CurrentPosts itemId={id} />;
        }}
      />
    </Switch>
  );
}

export default App;
