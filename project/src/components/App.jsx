import React from 'react';
import logo from '.././logo.svg';
import Header from './Header';
import Footer from './Footer';
import ShelterDog from './ShelterDog';
import Error404 from './Error404';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ShelterDog />
      <Footer />
    </div>
  );
}


export default App;
