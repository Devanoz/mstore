import logo from './logo.svg';
import './App.scss';
import Header from '../src/component/Header/Header'
import Home from '../src/view/Home'
import Footer from '../src/component/Footer';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
