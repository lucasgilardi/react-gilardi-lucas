import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <div>
                <Link to='/'><h1>Arivaci &amp; Co.</h1></Link>
            </div>
            <div className="navbar-cart">
                <nav>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to=''>COLLECTION</Link></li>
                        <li className="submenu"><Link to='/category'>SHOP<IoIosArrowDown className="submenu-arrow"/></Link>
                            <ul>
                                <li><Link to='/category/day'>DAY</Link></li>
                                <li><Link to='/category/night'>NIGHT</Link></li>
                            </ul>
                        </li>
                        <li><Link to=''>CONTACT US</Link></li>
                        <li><Link to='/cart'><CartWidget/></Link></li>
                    </ul>
                </nav>
                
            </div>
            
        </header>
    )
}

export default NavBar
