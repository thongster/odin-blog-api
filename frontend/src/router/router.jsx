import App from '../App';
// import Home from '../pages/Home';
// import Profile from '../pages/Profile';
// import CreatePost from '../pages/CreatePost';
// import EditPost from '../pages/EditPost';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import ErrorPage from '../pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <Profile /> },
      { path: 'create', element: <CreatePost /> },
      { path: 'edit', element: <EditPost /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
];

export default routes;
