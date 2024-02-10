import axios from 'axios'

const productInstance = axios.create({
    baseURL: 'http://localhost:4000/api/'

})

export default productInstance;