import React from 'react';
import logo from '.././logo.svg';
import Header from './Header';
import Footer from './Footer';
import APICall from './apiCall';
import ShelterDog from './ShelterDog';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import CreateAccount from './CreateAccount';
import Error404 from './Error404';
import './App.css';

console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ShelterDog} />
          <Route path="/profileform" component={ProfileForm} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route component={Error404} />
        </Switch>
        <APICall />
        <Footer />
      </div>
    );
  }
}


export default App;
