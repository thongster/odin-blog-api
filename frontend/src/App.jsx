import { useState } from 'react';
import './styles/App.css';

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
