import { useState, useEffect } from 'react';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [response, setResponse] = useState(null);

    const url = "http://localhost:4000/api/products";

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
        newProduct.type = String(newProduct.type);
        newProduct.category = String(newProduct.category);
        newProduct.name = String(newProduct.name);
        newProduct.model = String(newProduct.model);
        newProduct.brand = String(newProduct.brand);
        newProduct.year = String(newProduct.year);
        newProduct.gear = String(newProduct.gear);
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