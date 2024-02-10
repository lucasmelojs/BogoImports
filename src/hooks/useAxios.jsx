import { useEffect, useState } from "react";
import axios from 'axios';
import productInstance from '../helper/productInstance';

export default function useAxios(configRequest) {
    const { productInstance, method, url, otherConfigs = {} } = configRequest
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await productInstance[method.toLowerCase()](url, {
                    ...otherConfigs
                })
                console.log(res.data)
                setData(res.data)
            }
            catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return [data, loading, error]
}