import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import Error from './page-components/Error';
import Contact from './page-components/Contact';
import About from './page-components/About';
import Portfolio from './page-components/Portfolio';
import Resume from './page-components/Resume';

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