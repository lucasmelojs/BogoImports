import { useFetch } from '../hooks/useFetch';

import styles from "../components/css/Card.module.css";

const ListProduct = () => {
  const url = "http://localhost:3000/products"
  const callFetch = true;
  const { data, loading, error, method } = useFetch(url, callFetch);
  return (
    <>
      <h1>Todos os Produtos</h1>
      <div className={styles.card_list}>

        {data && data.map((product) => (

          <div key={product.id} className={styles.card}>

            <img className={styles.image_cover} src={product.image_cover} alt={product.name} />
            <ul className={styles.info}>

              <li>{product.brand}</li>
              <li className={styles.card_title}>{product.name}</li>

            </ul>

            <li>R$: {product.price}</li>
          </div>
        ))}

      </div>
    </>
  );

};

export default ListProduct