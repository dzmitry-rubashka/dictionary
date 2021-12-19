import styles from "./styles.module.scss"

import {useForm} from "react-hook-form";

const HomePageLayout = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h1 className={styles.title}>Free Dictionary API</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Search Word</label>
            <input placeholder='Search Word' type="text" {...register("searchWord", { required: true, maxLength: 20 })}/>
          </div>
          {errors.searchWord && <p>The maximum length of a word is 20 characters.</p>}
          <button type='submit'>Search</button>
        </form>
        {/*<form>*/}
        {/*  <label>*/}
        {/*    <input type="text" name="name" />*/}
        {/*  </label>*/}
        {/*  <input type="submit" value="Search" />*/}
        {/*</form>*/}
      </div>
    </div>
  );
};

export default HomePageLayout;
