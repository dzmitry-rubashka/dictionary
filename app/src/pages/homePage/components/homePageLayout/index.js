import styles from "./styles.module.scss"
import Button from "@mui/material/Button";

import search from '../../../../static/images/search.svg';

import {useForm} from "react-hook-form";


const HomePageLayout = ({handleGoToWord, isLoading, word}) => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (word) => {
    handleGoToWord(word.searchWord)
  }

  return (
    <div>
      <h1 className={styles.title}>Free Dictionary API</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Search' type="text" {...register("searchWord", { required: true, minLength: 1 })}/>
          <Button type='submit'>{<img src={search} alt={"search"} className={styles.image}/>}</Button>
          {errors.searchWord && <p className={styles.error}>The minimum length of a word is one character.</p>}
        </form>
      </div>
    </div>
  );
};

export default HomePageLayout;
