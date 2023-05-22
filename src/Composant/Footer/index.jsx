import logo from "../Assets/logo_white.png";
import "../../Styles/footer.css";

function Footer() {
  return (
    <div className="footer__noir">
      <img src={logo} alt="logo kasa blanc" className="footer__img" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
