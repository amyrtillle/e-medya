module.exports = (plop) => {
  plop.setWelcomeMessage(
    "Welcome to e-medya Monorepo! Pick a generator from below:"
  );
  // plop.load(['./scripts/plop/generators/component.js'])
  // plop.load(['./scripts/plop/generators/block.js'])
  const rootDir = plop.getDestBasePath();
  const templateDir = `${rootDir}/scripts/plop/templates`;
  const folder = `${rootDir}/packages/components/src/`;
  const componentsFile = `${rootDir}/packages/components/src/`;

  plop.setGenerator("component", {
    description: "Create component",
    prompts: [
      {
        type: "list",
        name: "type",
        choices: ["atoms", "molecules", "organisms"],
        message: "Component type :",
      },
      {
        type: "input",
        name: "name",
        message: "Component name :",
        validate: (value) => {
          const pascalCase = plop.getHelper("pascalCase");
          if (!value) {
            return "Name is required";
          }

          if (value !== pascalCase(value)) {
            return "Name must be PascalCase (ex: EmButton)";
          }

          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: `${folder}/{{ kebabCase type }}/{{ name }}/{{ name }}.vue`,
        templateFile: `${templateDir}/component.hbs`,
      },
      {
        type: "add",
        path: `${folder}/{{ kebabCase type }}/{{ name }}/{{ name }}.stories.ts`,
        templateFile: `${templateDir}/story.hbs`,
      },

      {
        type: "modify",
        pattern: /(\/\/ COMPONENTS EXPORTS)/g,
        path: `${componentsFile}/components.ts`,
        template:
          "export { default as {{ name }} } from './{{ kebabCase type }}/{{ name }}/{{ name }}.vue';\n$1'",
      },
    ],
  });
};
