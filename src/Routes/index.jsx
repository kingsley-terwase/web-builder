import { useLocation } from 'react-router-dom';
import PublicRoutes from './public';
import DashboardRoutes from './dashboard';

export default function Router() {
  const { pathname } = useLocation();

  const isDashboardRoute = pathname.startsWith('/dashboard');

  return isDashboardRoute ? <DashboardRoutes /> : <PublicRoutes />;
}
