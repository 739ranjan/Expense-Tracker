import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router-dom";

import './index.css';
import LandingPage from './components/LandingPage';
import Login from './Credentials/Login';
import SignUp from './Credentials/Signup';
import Sidebar from './mainpages/Sidebar';
import Dashboard from './mainpages/Dashboard';
import Create from './mainpages/Create';
import Transaction from './mainpages/Transaction';
import Compare from './mainpages/Compare';
import UserProfile from './mainpages/UserProfile';



// creating routes
const router = createBrowserRouter([
    {path: '/', element:<LandingPage />},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <SignUp />},
    {path: '/home', element:<Sidebar />, children:[
        {path: '/home/profile', element:<UserProfile />},
        {path: '/home/dashboard', element:<Dashboard />},
        {path: '/home/create', element: <Create />},
        {path: '/home/transaction', element: <Transaction />},
        {path: '/home/compare', element: <Compare />},
    ]}

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

