# redwood-apollo-provider


## Usage

```
npx redwoodjs-v4-codemods redwood-apollo-provider path/of/files/ or/some**/*glob.js

# or

yarn global add redwoodjs-v4-codemods
redwoodjs-v4-codemods redwood-apollo-provider path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js redwood-apollo-provider path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/redwood-apollo-provider/__testfixtures__/basic.input.js)</small>):
```js
const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={auth0} type="auth0">
        <Routes />
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

```

**Output** (<small>[basic.output.js](transforms/redwood-apollo-provider/__testfixtures__/basic.output.js)</small>):
```js
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

```
<!--FIXTURES_CONTENT_END-->