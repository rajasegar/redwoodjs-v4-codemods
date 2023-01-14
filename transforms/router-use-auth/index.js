module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.JSXElement, {
      openingElement: { name: { name: 'Router' } },
    })
    .forEach((path) => {
      const attrs = path.value.openingElement.attributes;
      const useAuthAttr = attrs.filter((a) => a.name.name === 'useAuth').length;
      if (!useAuthAttr) {
        attrs.push(
          j.jsxAttribute(
            j.jsxIdentifier('useAuth'),
            j.jsxExpressionContainer(j.identifier('useAuth'))
          )
        );

        const importDecl = j.importDeclaration(
          [j.importSpecifier(j.identifier('useAuth'), j.identifier('useAuth'))],
          j.stringLiteral('src/auth')
        );
        let body = root.get().value.program.body;
        body.unshift(importDecl);
      }
    });

  return root.toSource({ quote: 'single' });
};

module.exports.type = 'js';
