import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verifySession } from '../axios';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const result = await verifySession();
      setIsAuth(result);
    };

    checkSession();
  }, []);

  if (isAuth === null) {
    return <div>Carregando...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
