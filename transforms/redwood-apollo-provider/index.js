module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'AuthProvider' } },
    })
    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      // Remove client and type attrs
      const newAttrs = attrs.filter((a) => !['client', 'type'].includes(a.name.name));
      path.value.openingElement.attributes = newAttrs;
      const useAuthAttr = attrs.filter((a) => a.name.name === 'useAuth').length;
      if (!useAuthAttr) {
        const newComp = j.jsxElement(
          j.jsxOpeningElement(
            j.jsxIdentifier('RedwoodApolloProvider'),
            [
              j.jsxAttribute(
                j.jsxIdentifier('useAuth'),
                j.jsxExpressionContainer(j.identifier('useAuth'))
              ),
            ],
            false
          ),
          j.jsxClosingElement(j.jsxIdentifier('RedwoodApolloProvider')),
          path.value.children,
          false
        );

        const hasChild = path.value.children.filter(
          (c) => c.openingElement && c.openingElement.name.name === 'RedwoodApolloProvider'
        ).length;
        if (!hasChild) {
          path.value.children = [newComp];
        }
      }
    });

  const hasAuthImport =
    root.find(j.ImportDeclaration, {
      source: { value: 'src/auth' },
    }).length > 0;

  if (!hasAuthImport) {
    const importDecl = j.importDeclaration(
      [
        j.importSpecifier(j.identifier('AuthProvider'), j.identifier('AuthProvider')),
        j.importSpecifier(j.identifier('useAuth'), j.identifier('useAuth')),
      ],
      j.stringLiteral('src/auth')
    );
    let body = root.get().value.program.body;
    body.unshift(importDecl);
  }

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
