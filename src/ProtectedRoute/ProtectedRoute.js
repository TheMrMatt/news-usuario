import React, { useContext, useState, useEffect } from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../Store/context/UserContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children }) => {

  const { user, auth } = useContext(UserContext)
  let location = useLocation();
  if (!auth) {

    toast.error('debes estar logeado', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;

}

export default ProtectedRoute
