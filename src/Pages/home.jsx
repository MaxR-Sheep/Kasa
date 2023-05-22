import "../Styles/home.css";
import home from "../Composant/Assets/home.png";
import Location from "../Composant/location";
import Banniere from "../Composant/banniere";

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
