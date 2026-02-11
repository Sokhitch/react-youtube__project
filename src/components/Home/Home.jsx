import "./Home.scss";
import Products from "../Products/Products";

function Home({ menu }) {
  return (
    <main>
      <Products menu={menu} />
    </main>
  );
}

export default Home;
