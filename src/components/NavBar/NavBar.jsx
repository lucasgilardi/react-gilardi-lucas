import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <div>
                <a href="index.html"><h1>Arivaci &amp; Co.</h1></a>
            </div>
            <div className="navbar-cart">
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#collection">COLLECTION</a></li>
                        <li><a href="#shop">SHOP</a></li>
                        <li><a href="#contact">CONTACT US</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
            
        </header>
    )
}

export default NavBar
