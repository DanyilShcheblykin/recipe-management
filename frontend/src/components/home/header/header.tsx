import './header.scss';
import Logo from '../../../assets/home/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='headerBlock container'>
                <div className='navigation'>
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <nav className="">
                        <ul className='navigationBlock'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='saved'>Saved Recipes</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="registration">

                    <button className='signIn'>SIGN IN</button>
                    <button className='logIn'>SIGN IN</button>

                </div>
            </div>
        </header>
    );
};

export default Header;