import { Link } from "react-router-dom";
import styles from "../components/css/Navbar.module.css";

const Navbar = () => {
return (
<div>
  <nav className={styles.navbar}>
    <ul className={styles.ul}>
     <li>
      <Link to='/'><img src="../../logo.svg" alt="logo-header" /></Link></li>
     <li><Link to='/About'>About</Link></li>
     <li><Link to='/Contact'>Contact</Link></li>
     <li><Link to='/Product'>Product</Link></li>
     <li><Link to='/ListProduct'>List</Link></li>
    </ul>
  </nav>
</div>
  )
}

export default Navbar