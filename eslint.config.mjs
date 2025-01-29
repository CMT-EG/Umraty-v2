import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      // Disable any type warnings
      "@typescript-eslint/no-explicit-any": "off",

      // Handle unused variables
      "no-unused-vars": "off", // Turn off base rule
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // // Allow any type
      // "@typescript-eslint/no-unsafe-function-type": "off",

      // // Disable non-null assertion warnings
      // "@typescript-eslint/no-non-null-assertion": "off",
      // "@typescript-eslint/no-non-null-asserted-optional-chain": "off",

      // // Make React hooks warnings less strict
      // "react-hooks/exhaustive-deps": "warn",

      // // Make key warnings less strict (but still show them)
      // "react/jsx-key": "warn",

      // // Allow reassignment (for the axiosInstance.ts issue)
      // "prefer-const": "warn",

      // // Add additional TypeScript-specific rules
      // "@typescript-eslint/explicit-function-return-type": "off",
      // "@typescript-eslint/no-empty-interface": "warn",
      // "@typescript-eslint/no-inferrable-types": "warn",
      // "@typescript-eslint/no-unused-expressions": "warn",
    },
  },
];

export default eslintConfig;
