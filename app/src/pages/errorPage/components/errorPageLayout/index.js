import styles from "./styles.module.scss"

const ErrorPageLayout = () => {
  return (
    <div>
      <h1 className={styles.title}>Error 404</h1>
      <p className={styles.description}>Wooops. Looks like this page doesn't exist.</p>
    </div>
  );
};

export default ErrorPageLayout;
