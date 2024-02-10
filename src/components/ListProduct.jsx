import useAxios from '../hooks/useAxios'
import productInstance from '../helper/productInstance';
import styles from "../components/css/Card.module.css";

function ListProduct() {
  const [productList, loading, error] = useAxios({
    method: 'GET',
    url: 'products',
    productInstance: productInstance
  })

  console.log(productList)

  return (
    <>
      <h1>Todos os Produtos</h1>
      {productList && productList.map((product) => (
        <div key={product._id} className={styles.card}>
          <img className={styles.image_cover} src={product.image_cover} alt={product.name} />
          <ul className={styles.info}>
            <li>{product.brand}</li>
            <li className={styles.card_title}>{product.name}</li>
          </ul>

        </div>
      ))}
    </>
  );
}

export default ListProduct