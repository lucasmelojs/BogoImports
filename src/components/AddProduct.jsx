import React from 'react';
import { useProducts } from '../hooks/useProducts';

export function AddProduct() {
    const { products, addProduct } = useProducts();

    const [product, setProduct] = React.useState({
        id: 0,
        brand: '',
        name: '',
        fipe: 0,
        price: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { ...product, id: products.length > 0 ? products[products.length - 1].id + 1 : 1 };
        addProduct(newProduct);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div value={product.id}></div>

            <label>
                Marca:
                <input
                    type="text"
                    value={product.brand}
                    onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                />
            </label>
            <label>
                Nome:
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
            </label>
            <label>
                Tabela Fipe:
                <input
                    type="number"
                    value={product.fipe}
                    onChange={(e) => setProduct({ ...product, fipe: e.target.value })}
                />
            </label>
            <label>
                Preço:
                <input
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                />
            </label>
            {/* Add other form inputs as needed */}
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProduct;