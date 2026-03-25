import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loading from './Loading';

/**
 * Componente para proteger rotas que requerem autenticação
 * @param {Object} props - Props do componente
 * @param {React.ReactNode} props.children - Componente filho a ser renderizado
 * @param {boolean} props.adminOnly - Se true, apenas ADMIN pode acessar
 * @param {string} props.requiredPermission - Permissão específica necessária
 */
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <Loading message="Verificando autenticação..." />;
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/volunteer/dashboard" replace />;
  }

  return children;
};

export default PrivateRoute;
