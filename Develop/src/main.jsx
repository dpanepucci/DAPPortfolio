import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import Error from './page-components/Error.jsx';
import Contact from './page-components/Contact.jsx';
import About from './page-components/About.jsx';
import Portfolio from './page-components/Portfolio.jsx';
import Resume from './page-components/Resume.jsx';

// Nav Tabs
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },{
        path: 'Portfolio',
        element: <Portfolio />,
      },{
        path: '/Contact',
        element: <Contact />,
      },{
        path: 'Resume',
        element: <Resume />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);