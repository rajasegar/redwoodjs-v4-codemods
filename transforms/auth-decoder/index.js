module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: { name: 'createGraphQLHandler' },
    })
    .forEach((path) => {
      const props = path.value.arguments[0].properties;
      const hasProp = props.filter((p) => p.key.name === 'authDecoder').length;

      if (!hasProp) {
        path.value.arguments[0].properties.unshift(
          j.objectProperty(j.identifier('authDecoder'), j.identifier('authDecoder'))
        );
        const importDecl = j.importDeclaration(
          [j.importSpecifier(j.identifier('authDecoder'), j.identifier('authDecoder'))],
          j.stringLiteral('@redwoodjs/auth-auth0-api')
        );
        let body = root.get().value.program.body;
        body.unshift(importDecl);
      }
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
