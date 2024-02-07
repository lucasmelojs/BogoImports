import React from 'react';
import { useProducts } from '../hooks/useProducts';
import styles from "../components/css/AddProduct.module.css";
export function AddProduct() {
    const { products, addProduct } = useProducts();

    const [product, setProduct] = React.useState({
        type: '',
        category: '',
        brand: '',
        name: '',
        model: '',
        year: '',
        gear: '',
        fipe: 0,
        price: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        const Product = { ...product, _id: id };
        addProduct(Product);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div value={product._id}></div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Situação:
                    <input
                        type="text"
                        value={product.type}
                        onChange={(e) => setProduct({ ...product, type: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Categoria:
                    <input
                        type="text"
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Marca:
                    <input
                        type="text"
                        value={product.brand}
                        onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Nome:
                    <input
                        type="text"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </label>
            </div>
            <div className={styles.container}>
                <label className={styles.label}>
                    Modelo:
                    <input
                        type="text"
                        value={product.model}
                        onChange={(e) => setProduct({ ...product, model: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Ano:
                    <input
                        type="text"
                        value={product.year}
                        onChange={(e) => setProduct({ ...product, year: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Câmbio:
                    <input
                        type="text"
                        value={product.gear}
                        onChange={(e) => setProduct({ ...product, gear: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Preço:
                    <input
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    />
                </label>
            </div>

            <div className={styles.container}>
                <label className={styles.label}>
                    Tabela Fipe:
                    <input
                        type="number"
                        value={product.fipe}
                        onChange={(e) => setProduct({ ...product, fipe: e.target.value })}
                    />
                </label>
            </div>

            {/* Add other form inputs as needed */}
            <button className={styles.container} type="submit">Add Product</button>
        </form>
    );

}
export default AddProduct;