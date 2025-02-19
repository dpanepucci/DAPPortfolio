import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import Error from './Pages.jsx/Error';
import Contact from './Pages.jsx/Contact';
import About from './Pages.jsx/About';
import Portfolio from './Pages.jsx/Portfolio';
import Resume from './Pages.jsx/Resume';

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