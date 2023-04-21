import "../Styles/home.css";
import home from "../Composant/Assets/home.png";
import Location from "./location";

function Home() {
  return (
    <div className="home">
      <img src={home} alt="paysage kasa" className="home__title__img" />
      <h1 className="home__title">Chez vous, partout et ailleurs</h1>
      <section className="home_section">
        <Location />
      </section>
    </div>
  );
}

export default Home;
