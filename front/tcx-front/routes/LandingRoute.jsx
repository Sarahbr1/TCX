import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import Connexion from '../src/pages/Connexion';

export default function LandingRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/Connexion" component={Connexion} />
    </Switch>
  )
}
