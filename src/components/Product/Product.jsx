import { Link } from "react-router-dom";
import "./Product.scss";

function Product({ category, description, title, images, id }) {
  return (
    <article className="product-card">
      <img className=" product__picture" src={images} alt={title} />
      <p className="product-card__title">{title}</p>
      <p className="product-card__desc">{description.slice(0, 60)}...</p>
      <div className="wrapper">
        <p className="product-card__category">{category}</p>
        <Link className="product-card__link" to={`/category/${title}`}>
          WATCH CATEGORY
        </Link>
      </div>
    </article>
  );
}

export default Product;
