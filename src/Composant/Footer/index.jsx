import logo from "../assets/logo_white.png";
import "../../styles/footer.css";

function Footer() {
  return (
    <div className="footer__noir">
      <img src={logo} alt="logo kasa blanc" className="footer__img" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
