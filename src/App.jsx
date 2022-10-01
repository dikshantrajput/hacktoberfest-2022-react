import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Contributors from "./components/Contributors";
import './app.css'

function App() {
  return (
    <div className='app__container'>
      <div className="body__container">
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contributors' element={<Contributors/>} />
          </Routes>
      </div>
      <div className='footer__container'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
