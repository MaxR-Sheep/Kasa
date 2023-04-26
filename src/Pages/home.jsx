import "../styles/home.css";
import home from "../composant/assets/home.png";
import Location from "../composant/location";
import Banniere from "../composant/banniere";

function Home() {
  return (
    <div className="home">
      <Banniere img={home} text="Chez vous, partout et ailleurs" />
      <section className="home_section">
        <Location />
      </section>
    </div>
  );
}

export default Home;
