import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs />
      },
      {
        path: '/blogs',
        element: <Blog />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
