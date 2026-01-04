import styles from "../styles/product-card.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />

      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
    </article>
  );
}
