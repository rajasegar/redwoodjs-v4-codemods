import { AuthProvider, useAuth } from 'src/auth';
const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider><RedwoodApolloProvider useAuth={useAuth}>
          <Routes />
        </RedwoodApolloProvider></AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);
