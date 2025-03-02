// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';

export default {
  ...eslint.configs.recommended, // Configuración recomendada de ESLint
  ...tseslint.configs.recommendedTypeChecked, // Reglas recomendadas de TypeScript
  ...eslintPluginPrettierRecommended, // Configuración recomendada de Prettier
  ignores: [
    'eslint.config.mjs',
    {
      "ignorePatterns": ["dist/*"], // Ignorar la carpeta dist
    },
  ],
  languageOptions: {
    globals: {
      ...globals.node,  // Incluir los globals de Node.js
      ...globals.jest,  // Incluir los globals de Jest (si es necesario)
    },
    ecmaVersion: 2020, // Usar ECMA 2020 en lugar de 5 para compatibilidad con características modernas
    sourceType: 'module', // Configuración para módulos ES6
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname, // Dirección del tsconfig
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // Desactivar la regla de uso de 'any'
    '@typescript-eslint/no-floating-promises': 'warn', // Advertencia por promesas sin manejo adecuado
    '@typescript-eslint/no-unsafe-argument': 'warn', // Advertencia por argumentos inseguros
    '@typescript-eslint/no-unsafe-call': 'off', // Desactivar la regla de llamadas inseguras
  },
};

