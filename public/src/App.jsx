import { Outlet } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
