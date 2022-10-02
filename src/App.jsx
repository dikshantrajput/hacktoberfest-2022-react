import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contributors from "./components/Contributors";
import "./app.css";
import Container from "./styled-components/Container";

function App() {
  return (
    // <div className="app__container">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
        <div className="body__container"></div>
        <div className="footer__container">
          <Footer />
        </div>
      </Container>
    // </div>
  );
}

export default App;
