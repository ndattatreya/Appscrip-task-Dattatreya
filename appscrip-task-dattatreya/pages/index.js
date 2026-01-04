'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import styles from "../styles/plp.module.css";

export async function getServerSideProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: { products },
    };
}

export default function Home({ products }) {
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
                    <Filters />

                    <div className={styles.grid}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
