import { useState, useEffect } from 'react';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [response, setResponse] = useState(null);

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

    const getProducts = async () => {
        const config = httpConfig({}, 'GET');
        const res = await fetch(url, config);
        const json = await res.json();
        setProducts(json);
        setResponse(json);
    };

    const addProduct = async (newProduct) => {
        newProduct.price = Number(newProduct.price);
        newProduct.fipe = Number(newProduct.fipe);
        const config = httpConfig(newProduct, 'POST');
        const res = await fetch(url, config);
        const json = await res.json();
        setResponse(json);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { products, addProduct };

}
export default useProducts