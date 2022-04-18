import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <Header />
        <div className="container">
          <Home />
        </div>

        <Footer />
      </Router>
    );
  }
}


export default App;
