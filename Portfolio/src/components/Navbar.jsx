import { Link } from "react-router-dom";
import './css/Navbar.css'
const Navbar = () => {
return (
<div className="navbar">
  <nav>
    <ul>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/About'>About</Link></li>
     <li><Link to='/Contact'>Contact</Link></li>
     <li><Link to='/Product'>Product</Link></li>
    </ul>
  </nav>
</div>
  )
}

export default Navbar