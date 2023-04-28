import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card.css";

function Card({ product }) {
  return (
    <Link to={`/logement/${product.id}`}>
      <div
        className="card_link"
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        ),url(${product.cover})`,
        }}
      >
        <h3 className="card_h3">{product.title}</h3>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
