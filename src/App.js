import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserDetails from "./components/UserDetails";
import { UsersProvider } from "./context";

export default function App() {

  return (
    <UsersProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/userdetails/:id">
            <UserDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </UsersProvider>
  );
}
