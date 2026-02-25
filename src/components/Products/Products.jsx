import Errorpage from "../ErrorPage/Errorpage";
import Product from "../Product/Product";
import styles from "./Products.module.scss";

function Products({ menu }) {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles["products-card__wrap"]}>
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
            <Errorpage />
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
