import logo from './logo.svg';
import './App.css';
import Header from '../src/component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/view/Home'
import second from '../src/component/Footer'
import Footer from '../src/component/Footer';

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
