import "../styles/home.css";
import home from "../composant/assets/home.png";
import Location from "../composant/location";

function Home() {
  return (
    <div className="home">
      <div className="title_home">
        <img src={home} alt="paysage kasa" className="home__title__img" />
        <h1 className="home__title">Chez vous, partout et ailleurs</h1>
      </div>

      <section className="home_section">
        <Location />
      </section>
    </div>
  );
}

export default Home;
