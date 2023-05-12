import "../styles/home.css";
import home from "../composant/assets/home.png";
import Location from "../composant/location";
import Banniere from "../composant/banniere";

function Home() {
  // tous les elements pour la page accueil
  return (
    <div className="home">
      <Banniere
        img={home}
        text="Chez vous, partout et ailleurs" /*baniere modifiable grace au prop*/
      />
      <section className="home_section">
        <Location /* composant pour afficher toutes les locations*/ />
      </section>
    </div>
  );
}

export default Home;
