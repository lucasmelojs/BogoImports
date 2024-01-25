import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [itemId, setItemId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:3000/products";
            setLoading(true);
            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
                setItemId(null);
                setError(null);
                setCallFetch(true)
            } catch (error) {
                console.log(error.message);

                setError("Houve um erro ao carregar os dados!");
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    return { data, loading, error, itemId };
};