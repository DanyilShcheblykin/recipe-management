import './header.scss';
import Logo from '../../../assets/home/logo.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useContext } from 'react';

const Header = () => {

    const { setShowModal, loggedIn, setLoggedIn } = useContext(UserContext);

    const logIn = () => {
        setShowModal(true)
    }

    const logOut = () => {
        localStorage.removeItem('user')
        setLoggedIn(false)
    }

    return (
        <header className='header'>
            <div className='header__block container'>
                <div className='header__navigation'>
                    <Link to={'/'}>
                    <div className="header__logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    </Link>

                    <nav>
                        <ul className='header__navigationBlock'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='saved'>Saved Recipes</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__registration">
                    {
                        loggedIn ?
                            <button onClick={logOut} className='header__logButton'>LOG OUT</button> :
                            <button onClick={logIn} className='header__logButton'>LOG IN</button>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;