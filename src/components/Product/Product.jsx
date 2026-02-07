import "./Product.scss";

function Product({ category, description, title, images, id }) {
  return (
    <article className="movies-card">
      <img className=" movies__picture" src={images} alt={title} />
      <p className="movies-card__title">{title}</p>
      <p className="movies-card__desc">{description.slice(0, 60)}...</p>
      <div className="wrapper">
        <p className="movies-card__category">{category}</p>
        <a className="movies-card__link" href="/watch categories">
          WATCH CATEGORY
        </a>
      </div>
    </article>
  );
}

export default Product;
