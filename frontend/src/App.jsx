import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet context={{}} />
        <Footer />
      </div>
    </>
  );
}

export default App;
