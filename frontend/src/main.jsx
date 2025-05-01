 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/User/Profile.jsx";
import UserList from "./pages/Admin/UserList";
import CategoryList from './pages/Admin/CategoryList.jsx';

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AdminRoute from "./pages/Admin/AdminRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
      </Route>
      
      <Route path="/admin" element={<AdminRoute />}>
      <Route path="userlist" element={<UserList />} />
      <Route path="categorylist" element={<CategoryList />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);