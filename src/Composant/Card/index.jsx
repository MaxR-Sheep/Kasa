import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div>
      <Link to={`/logement/${product.id}`}>
        <img src={product.cover} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
