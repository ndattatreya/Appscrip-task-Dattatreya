import styles from "../styles/filters.module.css";
import { useState } from "react";

export default function Filters({ categories, categoryFilter, setCategoryFilter, priceFilter, setPriceFilter, ratingFilter, setRatingFilter }) {
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
          <label className={styles.checkboxLabel}>
            <input type="radio" name="category" checked={categoryFilter === ''} onChange={() => setCategoryFilter('')} />
            <span>All</span>
          </label>
          {categories.map(cat => (
            <label key={cat} className={styles.checkboxLabel}>
              <input type="radio" name="category" checked={categoryFilter === cat} onChange={() => setCategoryFilter(cat)} />
              <span>{cat}</span>
            </label>
          ))}
        </div>

        <div className={styles.group}>
          <h5>OCCASION</h5>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="price" checked={priceFilter === ''} onChange={() => setPriceFilter('')} />
            <span>All</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="price" checked={priceFilter === 'low'} onChange={() => setPriceFilter('low')} />
            <span>Low (&lt;50)</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="price" checked={priceFilter === 'medium'} onChange={() => setPriceFilter('medium')} />
            <span>Medium (50-200)</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="price" checked={priceFilter === 'high'} onChange={() => setPriceFilter('high')} />
            <span>High (&gt;200)</span>
          </label>
        </div>

        <div className={styles.group}>
          <h5>WORK</h5>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="rating" checked={ratingFilter === ''} onChange={() => setRatingFilter('')} />
            <span>All</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="rating" checked={ratingFilter === 'high'} onChange={() => setRatingFilter('high')} />
            <span>High Rating (&gt;4)</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="rating" checked={ratingFilter === 'low'} onChange={() => setRatingFilter('low')} />
            <span>Low Rating (&lt;4)</span>
          </label>
        </div>

        <div className={styles.group}>
          <h5>FABRIC</h5>
          <label className={styles.checkboxLabel}>
            <input type="radio" name="fabric" />
            <span>All</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
