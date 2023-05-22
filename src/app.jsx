import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Error from "./Pages/error";
import Header from "./Composant/Header";
import Footer from "./Composant/Footer";
import Logement from "./Pages/logement";
import "./Styles/app.css";

function App() {
  return (
    <div>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <Error />
              } /* utilisation de * pour toute les pages qui ne font pas partie des route sont une erreur */
            />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
