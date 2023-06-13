import './header.scss';
import Logo from '../../../assets/home/logo.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useContext } from 'react';

const Header = () => {

    const { setShowModal, loggedIn , setLoggedIn} = useContext(UserContext);

    const logIn = () => {
        setShowModal(true)
    }

    const logOut = () => {
        localStorage.removeItem('user')
        setLoggedIn(false)
    }

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

                    {
                        loggedIn ?
                            <button onClick={logOut} className='logButton'>LOG OUT</button> :
                            <button onClick={logIn} className='logButton'>LOG IN</button>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;