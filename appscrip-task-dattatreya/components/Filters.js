import styles from "../styles/filters.module.css";

export default function Filters() {
  return (
    <aside className={styles.filters}>
      <h4>CUSTOMIZABLE</h4>

      <div className={styles.group}>
        <h5>IDEAL FOR</h5>
        <p>All</p>
      </div>

      <div className={styles.group}>
        <h5>OCCASION</h5>
        <p>All</p>
      </div>

      <div className={styles.group}>
        <h5>WORK</h5>
        <p>All</p>
      </div>

      <div className={styles.group}>
        <h5>FABRIC</h5>
        <p>All</p>
      </div>
    </aside>
  );
}
