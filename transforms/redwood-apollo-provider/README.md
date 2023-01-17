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
* [advanced](#advanced)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="advanced">**advanced**</a>

**Input** (<small>[advanced.input.js](transforms/redwood-apollo-provider/__testfixtures__/advanced.input.js)</small>):
```js
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

```

**Output** (<small>[advanced.output.js](transforms/redwood-apollo-provider/__testfixtures__/advanced.output.js)</small>):
```js
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

```
<!--FIXTURES_CONTENT_END-->