import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserList from "./forms/UserList/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserList/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
