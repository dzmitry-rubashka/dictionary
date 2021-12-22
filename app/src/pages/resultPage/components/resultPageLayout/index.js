import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routesNames";
import styles from "../../../../commonComponents/header/styles.module.scss";
import Button from "@mui/material/Button";

const ResultPageLayout = ({}) => {

  const {info, isLoading, isError, error} = useSelector(state => state.word);


  return (
    <>
      <div>
        <Link to={ROUTES.HOME_PAGE} className={styles.link}>
          <Button style={{fontSize: '20px', backgroundColor: 'rgb(100,88,95)', color: '#9a782f', fontFamily: 'Architects Daughter, cursive'}}>Back To Home Page</Button>
        </Link>
      </div>
      <div>
        {isError ? error.response :
        <>
          <p>{info[0].word}</p>
          <p>{info[0].phonetics[0].text}</p>
          <p>{info[0].phonetics[0].audio}</p>
          <p>{info[0].phonetics[1].text}</p>
          <p>{info[0].phonetics[1].audio}</p>
          <p>{info[0].meanings[0].partOfSpeech}</p>
          <p>{info[0].meanings[0].definitions[0].definition}</p>
          <p>{info[0].meanings[0].definitions[0].example}</p>
          <p>{info[0].meanings[1].partOfSpeech}</p>
          <p>{info[0].meanings[1].definitions[0].definition}</p>
          <p>{info[0].meanings[1].definitions[0].example}</p>
          {/*<p>{info[0].meanings[1].definitions[0].synonyms.join(',')}</p>*/}
        </>
        }
      </div>
    </>
  );
};

export default ResultPageLayout;
