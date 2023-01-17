import { AuthProvider, useAuth } from './auth';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodApolloProvider useAuth={useAuth}>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
      </RedwoodProvider>
  </FatalErrorBoundary>
);
