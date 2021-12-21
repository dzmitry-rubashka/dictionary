import styles from "./styles.module.scss"

import {useForm} from "react-hook-form";

const HomePageLayout = ({handleGoToWord, isLoading, word}) => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (word) => {
    console.log(word.searchWord);
  }

  return (
    <div>
      <h1 className={styles.title}>Free Dictionary API</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={styles.search}>Search</label>
            <input placeholder='Search Word' type="text" {...register("searchWord", { required: true, minLength: 1 })}/>
          </div>
          {errors.searchWord && <p className={styles.error}>The minimum length of a word is 1 character.</p>}
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default HomePageLayout;
