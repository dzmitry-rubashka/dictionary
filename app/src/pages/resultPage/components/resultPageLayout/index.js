import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routesNames";
import styles from "./styles.module.scss"
import Button from "@mui/material/Button";

const ResultPageLayout = ({}) => {

  const {info, isLoading, isError, error} = useSelector(state => state.word);

  return (
    <>
      <div className={styles.button}>
        <Link to={ROUTES.HOME_PAGE} className={styles.link}>
          <Button style={{fontSize: '20px', backgroundColor: 'rgb(100,88,95)', color: '#9a782f', fontFamily: 'Architects Daughter, cursive'}}>Back To Home Page</Button>
        </Link>
      </div>
      <div className={styles.props}>
        {isError ? error.response :
        <>
          <p className={styles.description}>Word: <span className={styles.word}>{info[0].word}</span></p>
          <p className={styles.description}>Transcription: {info[0].phonetics[0]?.text}</p>
          <p className={styles.description}>Pronunciation:</p>
          <audio src={info[0].phonetics[0]?.audio} controls></audio>
          {/*<p>{info[0].phonetics[1]?.text}</p>*/}
          {/*<audio src={info[0].phonetics[1]?.audio} controls></audio>*/}
          <p className={styles.description}>Part Of Speech: {info[0].meanings[0]?.partOfSpeech}</p>
          <p className={styles.description}>{info[0].meanings[0]?.definitions[0].definition}</p>
          <p className={styles.description}>{info[0].meanings[0]?.definitions[0].example}</p>
          <p className={styles.description}>{info[0].meanings[1]?.partOfSpeech}</p>
          <p className={styles.description}>{info[0].meanings[1]?.definitions[0].definition}</p>
          <p className={styles.description}>{info[0].meanings[1]?.definitions[0].example}</p>
          <p className={styles.description}>{info[0].meanings[1]?.definitions[0].synonyms.join(', ')}</p>
          <p className={styles.description}>{info[0].meanings[2]?.partOfSpeech}</p>
          <p className={styles.description}>{info[0].meanings[2]?.definitions[0].definition}</p>
          <p className={styles.description}>{info[0].meanings[2]?.definitions[0].example}</p>
        </>
        }
      </div>
    </>
  );
};

export default ResultPageLayout;
