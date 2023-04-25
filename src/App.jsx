import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Error from "./Composant/Error";
import Header from "./Composant/Header";
import Footer from "./Composant/Footer";
import Logement from "./Pages/logement";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
