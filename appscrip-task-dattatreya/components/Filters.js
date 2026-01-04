import styles from "../styles/filters.module.css";
import { useState } from "react";

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={styles.filters}>
      <h4>CUSTOMIZABLE</h4>

      <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Open'} Filters
      </button>

      <div className={`${styles.groups} ${open ? styles.open : ''}`}>
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
      </div>
    </aside>
  );
}
