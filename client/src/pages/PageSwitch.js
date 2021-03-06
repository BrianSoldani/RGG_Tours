import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from "../utils/API";

import LandingPage from './Landingpage';
import About from './About';
import Contact from './Contact';
import Tours from './Tours';
import Booking from './Booking';

const PageSwitch = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    API.currentUser().then(res => {
      setUser(res.data);
    }).catch(err => {

    })
  }, [])
  return (<Switch>
    <Route exact path="/">
      <LandingPage user={user} setUser={setUser} />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/tours" component={Tours} />
    <Route exact path="/booking">
      <Booking user={user} setUser={setUser} />
    </Route>
  </Switch>)
}

export default PageSwitch;