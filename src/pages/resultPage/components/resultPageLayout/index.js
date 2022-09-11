import { Link } from "react-router-dom";

import { ROUTES } from "../../../../routes/routesNames";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles.module.scss";

const ResultPageLayout = ({ info, isLoading, isError, error }) => {
  return (
    <div className={styles.props}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Link to={ROUTES.HOME_PAGE} className={styles.link}>
            <Button
              style={{
                fontSize: "20px",
                backgroundColor: "rgb(100,88,95)",
                color: "#9a782f",
                fontFamily: "Architects Daughter, cursive",
              }}
            >
              Back To Home Page
            </Button>
          </Link>
          <div>
            {isError ? (
              <p className={styles.error}>{error.response}</p>
            ) : (
              <>
                <p className={styles.description}>
                  Word: <span className={styles.word}>{info[0].word}</span>
                </p>
                {info[0].phonetics[0]?.text ? (
                  <p className={styles.description}>
                    Transcription: {info[0].phonetics[0]?.text}
                  </p>
                ) : null}
                {info[0].phonetics[0]?.audio ? (
                  <p className={styles.description}>Pronunciation:</p>
                ) : null}
                {info[0].phonetics[0]?.audio ? (
                  <div className={styles.audio}>
                    <audio src={info[0].phonetics[0]?.audio} controls></audio>
                  </div>
                ) : null}
                {info[0].phonetics[1]?.text ? (
                  <p className={styles.description}>
                    Transcription: {info[0].phonetics[1]?.text}
                  </p>
                ) : null}
                {/*<audio src={info[0].phonetics[1]?.audio} controls></audio>*/}
                {info[0].meanings[0]?.partOfSpeech ? (
                  <p className={styles.description}>
                    Part Of Speech: {info[0].meanings[0]?.partOfSpeech}
                  </p>
                ) : null}
                {info[0].meanings[0]?.definitions[0].definition ? (
                  <p className={styles.description}>
                    Meaning: {info[0].meanings[0]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[0]?.definitions[0].example ? (
                  <p className={styles.description}>
                    Example: {info[0].meanings[0]?.definitions[0].example}
                  </p>
                ) : null}
                {info[0].meanings[1]?.partOfSpeech ? (
                  <p className={styles.description}>
                    Part Of Speech: {info[0].meanings[1]?.partOfSpeech}
                  </p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].definition ? (
                  <p className={styles.description}>
                    Definition: {info[0].meanings[1]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].example ? (
                  <p className={styles.description}>
                    Example: {info[0].meanings[1]?.definitions[0].example}
                  </p>
                ) : null}
                {info[0].meanings[1]?.definitions[0].synonyms.join(", ") ? (
                  <p className={styles.description}>
                    Synonyms:{" "}
                    {info[0].meanings[1]?.definitions[0].synonyms.join(", ")}
                  </p>
                ) : null}
                {info[0].meanings[2]?.partOfSpeech ? (
                  <p className={styles.description}>
                    Part Of Speech: {info[0].meanings[2]?.partOfSpeech}
                  </p>
                ) : null}
                {info[0].meanings[2]?.definitions[0].definition ? (
                  <p className={styles.description}>
                    Meaning: {info[0].meanings[2]?.definitions[0].definition}
                  </p>
                ) : null}
                {info[0].meanings[2]?.definitions[0].example ? (
                  <p className={styles.description}>
                    Example: {info[0].meanings[2]?.definitions[0].example}
                  </p>
                ) : null}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPageLayout;
