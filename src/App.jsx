import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Composant/Error";
import Header from "./Composant/Header";

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
