// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("node:path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unreachable": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "{.,..}/*.scss",
            group: "unknown",
            position: "after",
          },
        ],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "tsconfig.json"),
      },
    },
  },
  ignorePatterns: ["cypress", ".storybook"],
};
