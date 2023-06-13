import React, { createContext, useState } from 'react';
import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SavedPage from './pages/saved';
import Modal from './components/shared/modal/modal';

interface UserContextProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextProps>({
  showModal: false,
  setShowModal: () => { },
  loggedIn: false,
  setLoggedIn: () => { },
});

function App() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ showModal, setShowModal, loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </BrowserRouter>
      <Modal></Modal>
    </UserContext.Provider>
  );
}

export default App;