import Product from "../Product/Product";
import "./Products.scss";

function Products({ menu }) {
  return (
    <section className="movies">
      <div className="container">
        <div className="movies-card__wrap">
          {menu ? (
            menu.map((element, index) => {
              return (
                <Product
                  key={index}
                  title={element.strCategory}
                  description={element.strCategoryDescription}
                  id={element.idCategory}
                  category={element.strCategory}
                  images={element.strCategoryThumb}
                />
              );
            })
          ) : (
            <h2>Ничего не найдено</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
