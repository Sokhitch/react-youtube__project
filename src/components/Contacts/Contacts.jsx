import { useNavigate } from "react-router-dom";
import styles from "./Contacts.module.scss";

function Contacts() {
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles["goBack-btn"]} onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="container">
        <h1 className={styles.contacts}>Contacts Page</h1>
        <p className={styles["contacts__desc"]}>
          Contact Us Host your next corporate event or intimate celebration in
          our exclusive private dining room, with bespoke menus and impeccable
          service. Dine on our lush terrace with premium shishas, romantic
          waterfront views, and a setting inspired by Amalfi and Santorini.
          Unwind with handcrafted cocktails in our vibrant bar lounge, where
          live piano performances and top DJs set the tone for unforgettable
          evenings. Whether entertaining clients, celebrating milestones, or
          indulging in fine dining, every detail is crafted around you to ensure
          an exceptional experience.
        </p>
        <div className={styles["contacts__wrap"]}>
          <img
            className={styles["contacts__svg"]}
            src="public/calling-icon.svg"
            alt="calling"
          />
          +971 2 563 2937
          <a className={styles["contacts-number"]} href="+971 2 563 2937"></a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
