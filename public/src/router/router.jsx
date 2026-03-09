import App from '../App';
import { Home } from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
