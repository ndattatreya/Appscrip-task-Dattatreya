import Header from "../components/Header";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import styles from "../styles/plp.module.css";
import { useState, useMemo } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return {
    props: { products },
  };
}

export default function Home({ products: initialProducts }) {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [sortBy, setSortBy] = useState('recommended');

    const categories = useMemo(() => [...new Set(initialProducts.map(p => p.category))], [initialProducts]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = initialProducts.filter(product => {
            if (categoryFilter && product.category !== categoryFilter) return false;
            if (priceFilter) {
                const price = product.price;
                if (priceFilter === 'low' && price >= 50) return false;
                if (priceFilter === 'medium' && (price < 50 || price > 200)) return false;
                if (priceFilter === 'high' && price <= 200) return false;
            }
            if (ratingFilter) {
                const rating = product.rating.rate;
                if (ratingFilter === 'high' && rating <= 4) return false;
                if (ratingFilter === 'low' && rating > 4) return false;
            }
            return true;
        });

        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating-high') {
            filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        // recommended is default order

        return filtered;
    }, [initialProducts, categoryFilter, priceFilter, ratingFilter, sortBy]);

    return (
        <>
            <Header />

            <main className={styles.container}>
                <section className={styles.intro}>
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                        scelerisque.
                    </p>
                </section>

                <section className={styles.content}>
                    <Filters 
                        categories={categories}
                        categoryFilter={categoryFilter}
                        setCategoryFilter={setCategoryFilter}
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        ratingFilter={ratingFilter}
                        setRatingFilter={setRatingFilter}
                    />

                    <div className={styles.grid}>
                        <div className={styles.sortContainer}>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.sortSelect}>
                                <option value="recommended">Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating-high">Rating: High to Low</option>
                            </select>
                        </div>
                        {filteredAndSortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
