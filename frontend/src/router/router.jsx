import App from '../App';
// import Login from '../pages/Login';
// import ErrorPage from '../pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];

export default routes;
