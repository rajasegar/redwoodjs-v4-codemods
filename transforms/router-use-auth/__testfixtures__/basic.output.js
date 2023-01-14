import { useAuth } from 'src/auth';
const Routes = () => {
  return <Router useAuth={useAuth}>{/* ... */}</Router>;
};
