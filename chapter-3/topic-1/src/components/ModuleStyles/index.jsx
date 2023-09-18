import styles from "./modulestyles.module.css";

const ModuleStyles = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center vh-100">
      <button className={styles.btn}>Berubah</button>
      <button className={styles["btn-success"]}>Tetap</button>
      <button className={styles["btn-sm"]}>Tetap</button>
    </div>
  );
};

export default ModuleStyles;
