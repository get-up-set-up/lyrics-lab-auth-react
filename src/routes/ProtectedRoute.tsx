import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = Cookies.get('jwt');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
