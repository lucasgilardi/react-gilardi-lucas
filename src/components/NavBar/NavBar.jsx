import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io';
import { useCartContext } from '../../context/CartContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {

    const { itemCounter } = useCartContext()

    return (
        <header>
            {/* <div>
                <Link to='/'><h1>Arivaci &amp; Co.</h1></Link>
            </div>
            <div className="navbar-cart">
                <nav>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/collection'>COLLECTION</Link></li>
                        <li className="submenu"><Link to='/category'>SHOP<IoIosArrowDown className="submenu-arrow"/></Link>
                            <ul>
                                <li><Link to='/category/day'>DAY</Link></li>
                                <li><Link to='/category/night'>NIGHT</Link></li>
                            </ul>
                        </li>
                        <li><Link to=''>CONTACT US</Link></li>
                        <li><Link to='/cart'><CartWidget/></Link></li>
                        <span className="item-counter">{itemCounter() !== 0 && itemCounter()}</span>
                    </ul>
                </nav>
            </div> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <GiHamburgerMenu className="hamburger-icon"/>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/'>HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/collection'>COLLECTION</Link>
                  </li>
                  <li className="nav-item submenu"><Link to='/category'>SHOP<IoIosArrowDown className="submenu-arrow"/></Link>
                            <ul>
                                <li><Link to='/category/day'>DAY</Link></li>
                                <li><Link to='/category/night'>NIGHT</Link></li>
                            </ul>
                        </li>
                  <li className="nav-item cart-widget-desktop">
                      <Link to='/cart'><CartWidget/></Link>
                      <span className="item-counter">{itemCounter() !== 0 && itemCounter()}</span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="cart-widget-mobile">
            <Link to='/cart'><CartWidget/></Link>
            <span className="item-counter">{itemCounter() !== 0 && itemCounter()}</span>
          </div>
        </header>
    )
}

export default NavBar
