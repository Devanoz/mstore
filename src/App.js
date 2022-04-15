import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';

//import
import Home from './view/Home';
import Header from './component/Header';
import Footer from './component/Footer';
//import images




// function App() {

// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}


export default App;
