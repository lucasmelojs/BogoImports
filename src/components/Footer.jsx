import styles from "../components/css/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.link_list}>
        <li>
          <p>Link 1</p>
        </li>
        <li>
          <p>Link 2</p>
        </li>
        <li>
          <p>Link 3</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer