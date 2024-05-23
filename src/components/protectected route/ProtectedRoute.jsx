import React, { useMemo } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children, redirect }) => {
  const authenticate = useMemo(() => !!localStorage.getItem('token'), []);
  const location = useLocation();

  return authenticate ? (
    children
  ) : (
    <Navigate
      to={`/login?redirect=${encodeURIComponent(redirect || location.pathname)}`}
    />
  );
};

export default ProtectedRoute;

