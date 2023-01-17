module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'RedwoodProvider' } },
    })
    .forEach((path) => {
      const hasChild = path.value.children.filter(
        (c) => c.openingElement && c.openingElement.name.name === 'AuthProvider'
      ).length;

      if (!hasChild) {
        const newComp = j.jsxElement(
          j.jsxOpeningElement(j.jsxIdentifier('AuthProvider'), [], false),
          j.jsxClosingElement(j.jsxIdentifier('AuthProvider')),
          path.value.children,
          false
        );

        path.value.children = [j.jsxText('\n  '), newComp, j.jsxText('\n  ')];

        root
          .find(j.JSXElement, {
            openingElement: { name: { name: 'RedwoodApolloProvider' } },
          })
          .forEach((path) => {
            const useAuthAttr = j.jsxAttribute(
              j.jsxIdentifier('useAuth'),
              j.jsxExpressionContainer(j.identifier('useAuth'))
            );
            path.value.openingElement.attributes.push(useAuthAttr);
          });

        const authImport = root.find(j.ImportDeclaration, {
          source: { value: './auth' },
        });

        const hasAuthImport = authImport.length > 0;

        if (!hasAuthImport) {
          const importDecl = j.importDeclaration(
            [
              j.importSpecifier(j.identifier('AuthProvider'), j.identifier('AuthProvider')),
              j.importSpecifier(j.identifier('useAuth'), j.identifier('useAuth')),
            ],
            j.stringLiteral('./auth')
          );
          let body = root.get().value.program.body;
          body.unshift(importDecl);
        }
      }
    });

  return root.toSource({ quote: 'single', tabWidth: 2 });
};

module.exports.type = 'js';
