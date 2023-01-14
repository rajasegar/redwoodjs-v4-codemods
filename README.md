# redwoodjs-v4-codemods


A collection of codemods for redwoodjs-v4-codemods.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx redwoodjs-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add redwoodjs-v4-codemods
redwoodjs-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [auth-decoder](transforms/auth-decoder/README.md)
* [redwood-apollo-provider](transforms/redwood-apollo-provider/README.md)
* [router-use-auth](transforms/router-use-auth/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`