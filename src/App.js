import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Login from './components/Login';
import Profile from './components/Profile';
import { auth } from './firebaseConfig';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <div className={`d-flex flex-column ${isDarkMode ? 'dark-mode' : ''}`} id="wrapper">
        <Header />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="d-flex" id="main-content">
          <Sidebar />
          <div id="page-content-wrapper" className="flex-grow-1">
            <MyNavbar setUser={setUser} />
            <div className="container-fluid">
              <Routes>
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
