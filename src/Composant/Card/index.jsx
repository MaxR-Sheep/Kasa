import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../Styles/card.css";

function Card({ product }) {
  return (
    <Link to={`/logement/${product.id}`} className="card_link">
      <img src={product.cover} alt={product.title} className="card_img" />
      <h3 className="card_h3">{product.title}</h3>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
