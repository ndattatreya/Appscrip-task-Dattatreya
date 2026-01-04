import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>LOGO</div>
      </div>

      <nav className={styles.nav}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>

      <div className={styles.right}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <span className={styles.icon}>🔍</span>
        </div>
        <span className={styles.icon}>♡</span>
        <span className={styles.icon}>🛒</span>
        <span className={styles.icon}>👤</span>
        <select className={styles.lang}>
          <option>ENG</option>
        </select>
      </div>
    </header>
  );
}
