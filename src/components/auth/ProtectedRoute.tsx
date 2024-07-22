import React from 'react';
import { RouteProps, Navigate } from 'react-router-dom';
import { getRole } from '../../utils/auth';

type ProtectedRouteProps = RouteProps & {
  component: React.ComponentType<any>;
  requiredRole: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, requiredRole }) => {
  
    const userRole = getRole();

    return (
        userRole && userRole == requiredRole ? (
            <Component />
        ) : (
            <Navigate to="/login" />
        )  
    );

};
