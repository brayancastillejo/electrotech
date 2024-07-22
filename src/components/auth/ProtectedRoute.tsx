import React, { useEffect, useState } from "react";
import { RouteProps, Navigate } from "react-router-dom";
import { getRole } from "../../utils/auth";

type ProtectedRouteProps = RouteProps & {
  component: React.ComponentType;
  requiredRole: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  requiredRole,
}) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRole();
      setUserRole(role);
      setIsLoading(false);
    };
    fetchRole();
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (userRole === null) {
    return <Navigate to="/login" />;
  }

  return userRole === requiredRole ? <Component /> : <Navigate to="/login" />;
};
