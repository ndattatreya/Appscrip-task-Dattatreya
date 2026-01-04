import Header from "../components/Header";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import styles from "../styles/plp.module.css";
import { useState, useMemo } from "react";

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");

    const text = await res.text();

    let products = [];
    try {
        products = JSON.parse(text);
    } catch (err) {
        console.error("FakeStore returned non-JSON:", text.slice(0, 200));
    }

    return {
        props: { products },
        revalidate: 3600,
    };
}

export default function Home({ products: initialProducts }) {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [sortBy, setSortBy] = useState('recommended');

    const categories = useMemo(() => {
        if (!initialProducts || initialProducts.length === 0) return [];
        return [...new Set(initialProducts.map(p => p.category))];
    }, [initialProducts]);

    const filteredAndSortedProducts = useMemo(() => {
        if (!initialProducts || initialProducts.length === 0) return [];

        let filtered = initialProducts.filter(product => {
            // CATEGORY
            if (categoryFilter && product.category !== categoryFilter) return false;

            // PRICE
            if (priceFilter) {
                const price = product.price ?? 0;
                if (priceFilter === 'low' && price >= 50) return false;
                if (priceFilter === 'medium' && (price < 50 || price > 200)) return false;
                if (priceFilter === 'high' && price <= 200) return false;
            }

            // ⭐ RATING (SAFE)
            if (ratingFilter) {
                const rating =
                    typeof product.rating === "object"
                        ? product.rating?.rate
                        : product.rating;

                if (rating == null) return true; // don’t block product

                if (ratingFilter === 'high' && rating <= 4) return false;
                if (ratingFilter === 'low' && rating > 4) return false;
            }

            return true;
        });

        // SORTING
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        } else if (sortBy === 'rating-high') {
            filtered.sort((a, b) => {
                const r1 = typeof a.rating === "object" ? a.rating?.rate : a.rating ?? 0;
                const r2 = typeof b.rating === "object" ? b.rating?.rate : b.rating ?? 0;
                return r2 - r1;
            });
        }

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
