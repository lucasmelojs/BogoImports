import React, { useState, useEffect } from 'react';

export function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        brand: '',
        fipe: 0,
    });

    const [method, setMethod] = useState(null);
    const [response, setResponse] = useState(null);
    const [config, setConfig] = useState(null);

    const url = "http://localhost:3000/products";

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            return {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
        }
        // Add other HTTP methods as needed
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = httpConfig(product, 'POST');
        setMethod('POST');
        setResponse(null);
        setConfig(config);
    };

    useEffect(() => {
        if (method === 'POST') {
            const httpRequest = async () => {
                try {
                    const res = await fetch(url, config);
                    const json = await res.json();
                    setResponse(json);
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            httpRequest();
        }
    }, [config, method, url]);

    return (
        <form onSubmit={handleSubmit}>
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