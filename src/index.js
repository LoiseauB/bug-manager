import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ShowBugs from './components/ShowBugs';
import CreateBugForm from './components/CreateBugForm';
import EditBugForm from './components/EditBugForm';
import DeleteBug from './components/DeleteBug';
import ResolveBugForm from './components/ResolveBugForm';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<ShowBugs />
      },
      {
        path:'/bugs',
        element:<ShowBugs />
      },
      {
        path:'/bugs/create',
        element:<CreateBugForm />
      },
      {
        path:'/bugs/resolve',
        element:<ResolveBugForm />
      },
      {
        path:'/bugs/edit',
        element:<EditBugForm />
      },
      {
        path:'/bugs/delete',
        element:<DeleteBug />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
