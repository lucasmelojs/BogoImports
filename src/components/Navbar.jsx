import { Link } from "react-router-dom";
import styles from "../components/css/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to='/'><img src="../../logo.svg" alt="logo-header" /></Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}><Link to='/About'>About</Link></li>
          <li className={styles.item}><Link to='/Contact'>Contact</Link></li>
          <li className={styles.item}><Link to='/Product'>Product</Link></li>
          <li className={styles.item}><Link to='/ListProduct'>List</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar