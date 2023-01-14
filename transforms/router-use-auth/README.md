# router-use-auth


## Usage

```
npx redwoodjs-v4-codemods router-use-auth path/of/files/ or/some**/*glob.js

# or

yarn global add redwoodjs-v4-codemods
redwoodjs-v4-codemods router-use-auth path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js router-use-auth path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/router-use-auth/__testfixtures__/basic.input.js)</small>):
```js
const Routes = () => {
  return <Router>{/* ... */}</Router>;
};

```

**Output** (<small>[basic.output.js](transforms/router-use-auth/__testfixtures__/basic.output.js)</small>):
```js
import { useAuth } from 'src/auth';
const Routes = () => {
  return <Router useAuth={useAuth}>{/* ... */}</Router>;
};

```
<!--FIXTURES_CONTENT_END-->