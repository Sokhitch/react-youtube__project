import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss";

function About() {
  const navigate = useNavigate();
  return (
    <div className={styles.about}>
      <div className="container">
        <h3 className={styles["about__description"]}>
          This is the Menu of Novikov restaurant
        </h3>
        <p className={styles["about__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla
          eligendi qui, beatae dolore quibusdam. Laudantium libero rerum
          cupiditate, expedita at enim aliquam reprehenderit explicabo animi
          consequatur fugiat sequi sapiente ut ipsam, est nobis. Dolor, debitis
          aut earum impedit hic cumque libero dolorem ab pariatur saepe
          repellendus nisi eligendi non nemo odit. Facere sit eum nisi debitis
          neque, et quibusdam obcaecati vero nulla dolor. Aspernatur
          reprehenderit perspiciatis facere dolor adipisci necessitatibus optio
          quam dolorum, et dicta vero, ex hic architecto modi laborum, impedit
          ut totam. Ducimus, dolor quaerat. Accusantium, officia distinctio ex
          dignissimos natus veritatis suscipit dolorem velit a hic! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Porro laborum distinctio
          impedit. Beatae tenetur placeat accusamus, temporibus voluptas
          necessitatibus. Unde quibusdam perspiciatis ullam ea explicabo
          eligendi fugit culpa, consequuntur hic? neque, et quibusdam obcaecati
          vero nulla dolor. Aspernatur reprehenderit perspiciatis facere dolor
          adipisci necessitatibus optio quam dolorum, et dicta vero, ex hic
          architecto modi laborum, impedit ut totam. Ducimus, dolor quaerat.
          Accusantium, officia distinctio ex dignissimos natus veritatis
          suscipit dolorem velit a hic! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Porro laborum distinctio impedit. Beatae tenetur
          placeat accusamus, temporibus voluptas necessitatibus. Unde quibusdam
          perspiciatis ullam ea explicabo eligendi fugit culpa, consequuntur
          hic?
        </p>
      </div>
      <button className={styles["goBack-btn"]} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default About;
