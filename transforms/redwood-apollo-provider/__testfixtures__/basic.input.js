const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={auth0} type="auth0">
        <Routes />
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);
