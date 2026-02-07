import "./Main.scss";
import Products from "../Products/Products";

function Main({ menu }) {
  return (
    <main>
      <Products menu={menu} />
    </main>
  );
}

export default Main;
