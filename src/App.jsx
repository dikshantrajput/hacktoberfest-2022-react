import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Contributors from "./components/Contributors";
import './app.css';
import { useSelector } from 'react-redux'
function App() {
  const mode = useSelector((state) => state.mode.value);
  console.log(mode);
  return (
    <div className={mode ? "app__container" : "app_container_light"}>
      <div className="body__container">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </div>
      </div>
      <div className="footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
