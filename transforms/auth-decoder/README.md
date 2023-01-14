# auth-decoder


## Usage

```
npx redwoodjs-v4-codemods auth-decoder path/of/files/ or/some**/*glob.js

# or

yarn global add redwoodjs-v4-codemods
redwoodjs-v4-codemods auth-decoder path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js auth-decoder path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/auth-decoder/__testfixtures__/basic.input.js)</small>):
```js
import { createGraphQLHandler } from '@redwoodjs/graphql-server';

import directives from 'src/directives/**/*.{js,ts}';
import sdls from 'src/graphql/**/*.sdl.{js,ts}';
import services from 'src/services/**/*.{js,ts}';

import { db } from 'src/lib/db';
import { logger } from 'src/lib/logger';

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  },
});

```

**Output** (<small>[basic.output.js](transforms/auth-decoder/__testfixtures__/basic.output.js)</small>):
```js
import { authDecoder } from '@redwoodjs/auth-auth0-api';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';

import directives from 'src/directives/**/*.{js,ts}';
import sdls from 'src/graphql/**/*.sdl.{js,ts}';
import services from 'src/services/**/*.{js,ts}';

import { db } from 'src/lib/db';
import { logger } from 'src/lib/logger';

export const handler = createGraphQLHandler({
  authDecoder: authDecoder,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});

```
<!--FIXTURES_CONTENT_END-->