import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./composant/error";
import Header from "./composant/header";
import Footer from "./composant/footer";
import Logement from "./pages/logement";

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
