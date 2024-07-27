import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import CategoryFilter from "../../components/CategoryFilter";
import styles from './index.module.css';

function Home() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState('all');

    async function getData(url) {
        try {
            const response = await fetch(url);
            let data = [];
            if (response.status === 200) {
                data = await response.json();
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData("https://cars-pagination.onrender.com/products")
            .then(data => {
                setProducts(data);
                setFilterProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (selectCategory === 'all') {
            setFilterProducts(products);
        } else {
            const filter = products.filter(product => product.category === selectCategory);
            setFilterProducts(filter);
        }
    }, [selectCategory, products]);

    return (
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <h1>Products</h1>
                <CategoryFilter onFilterChange={setSelectCategory} />
            </header>
            <div className={styles['products']}>
                {
                    filterProducts.length > 0 && filterProducts.map((product, index) => (
                        <Card key={index} data={product} />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
