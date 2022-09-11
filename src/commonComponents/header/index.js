import styles from "./styles.module.scss";
import linkedin from "../../assets/images/linkedin.png";

const Header = () => {
  return (
    <header>
      <h1 className={styles.developer}>Made by Dzmitry Rubashka</h1>
      <div className={styles.icon}>
        <a
          href="https://www.linkedin.com/in/dzmitry-rubashka/"
          target="_blank"
          rel="noreferrer"
        >
          {<img src={linkedin} alt={"linkedin"} className={styles.image} />}
        </a>
      </div>
    </header>
  );
};

export default Header;
