import {Link} from 'react-router-dom';
import {ROUTES} from "../../routes/routesNames";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss"
import linkedin from '../../static/images/linkedin.png';

const Header = () => {
  return (
    <header>
      <Link to={ROUTES.HOME_PAGE} className={styles.link}>
        <Button style={{backgroundColor: '#371c56', color: '#c08d21'}}>Home Page</Button>
      </Link>
      <Link to={ROUTES.RESULT_PAGE} className={styles.link}>
        <Button style={{backgroundColor: '#371c56', color: '#c08d21'}}>Result Page</Button>
      </Link>
      <h1 className={styles.developer}>Made by Dmitry Rubashko</h1>
      <div className={styles.icon}>
        <a href="https://www.linkedin.com/in/dmitry-rubashko/" target="_blank">
          {<img src={linkedin} alt={"linkedin"} className={styles.image}/> }
        </a>
      </div>
    </header>
  );
};

export default Header;
