import React, { useContext, useState } from 'react';
import './modal.scss';
import { UserContext } from '../../../App';

function Modal() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const { showModal, setShowModal, setLoggedIn } = useContext(UserContext);

    console.log(showModal)

    const handleSubmit = (e: any) => {
        setLoggedIn(true)
        const user = { name, email };
        const userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
        e.preventDefault();
        setEmail('')
        setName('')
        setTimeout(() => {
            setShowModal(false)
        } , 300)
    };

    return (
        <div className={`modal-overlay ${showModal ? 'showModal' : ''}`}>
            <div className="modal-content">
                <button onClick={() => setShowModal(false)} className="modal-close">
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button className='buttonSubmit' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;