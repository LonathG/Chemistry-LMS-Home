import './Header.css';
import Logo from './assets/Logo.png';
import user from './assets/user1.png';

function Header() {
    return (
        <>
        <header>
            <div className="Logo">
                <img src={Logo} alt="logo"></img>
            </div>
            
            <nav>
                <ul>
                    <li><button className="nav-btn">Home</button></li>
                    <li><button className="nav-btn">Course Content</button></li>
                    <li><button className="nav-btn">Forum</button></li>
                    <li><button className="nav-btn">Cart</button></li>
                </ul>
            </nav>

            <div className="Profile">
                <img src={user} alt="profile" />
                <button className="login-btn">Login</button>
            </div>
        </header>
        </>
    )

}

export default Header