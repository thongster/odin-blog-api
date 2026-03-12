import App from '../App';
import { Home } from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import { Adventures } from '../pages/Adventures';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'adventures', element: <Adventures /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;
