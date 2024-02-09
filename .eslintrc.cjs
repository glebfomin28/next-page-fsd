// const boundariesSettingsFSD = {
//   'import/resolver': {
//     typescript: {
//       alwaysTryTypes: true,
//     },
//   },
//   'boundaries/include': ['src/**/*'],
//   'boundaries/elements': [
//     {
//       type: 'app',
//       pattern: 'app',
//     },
//     {
//       type: 'screens',
//       pattern: 'src/screens/*',
//       capture: ['screens'],
//     },
//     {
//       type: 'widgets',
//       pattern: 'widgets/*',
//       capture: ['widget'],
//     },
//     {
//       type: 'features',
//       pattern: 'features/*(/.*)?',
//       capture: [
//         'feature',
//         // groups
//         'cart',
//         'profile',
//
//       ],
//     },
//     {
//       type: 'entities',
//       pattern: 'entities/*',
//       capture: ['entity'],
//     },
//     {
//       type: 'shared',
//       pattern: 'shared/*',
//       capture: ['segment'],
//     },
//   ],
// };
//
// const boundariesRulesFSD = {
//   'boundaries/entry-point': [
//     2,
//     {
//       default: 'disallow',
//       rules: [
//         {
//           target: [
//             ['shared'],
//           ],
//           allow: '**',
//         },
//         {
//           target: ['app', 'screens', 'widgets', 'features', 'entities'],
//           allow: 'index.(ts|tsx)',
//         },
//       ],
//     },
//   ],
//   'boundaries/element-types': [
//     2,
//     {
//       default: 'allow',
//       message: '${file.type} is not allowed to import (${dependency.type})',
//       rules: [
//         {
//           from: ['shared'],
//           disallow: ['app', 'screens', 'widgets', 'features', 'entities'],
//           message:
//               'Shared module must not import upper layers (${dependency.type})',
//         },
//         {
//           from: ['entities'],
//           message: 'Entity must not import upper layers (${dependency.type})',
//           disallow: ['app', 'screens', 'widgets', 'features'],
//         },
//         {
//           from: ['entities'],
//           message: 'Entity must not import other entity',
//           disallow: [
//             [
//               'entities',
//               {
//                 entity: '!${entity}',
//               },
//             ],
//           ],
//         },
//         {
//           from: ['features'],
//           message:
//               'Feature must not import upper layers (${dependency.type})',
//           disallow: ['app', 'screens', 'widgets'],
//         },
//         {
//           from: ['features'],
//           message: 'Feature must not import other feature',
//           disallow: [
//             [
//               'features',
//               {
//                 feature: '!${feature}',
//               },
//             ],
//           ],
//         },
//         {
//           from: ['widgets'],
//           message:
//               'Feature must not import upper layers (${dependency.type})',
//           disallow: ['app', 'screens'],
//         },
//         {
//           from: ['widgets'],
//           message: 'Widget must not import other widget',
//           disallow: [
//             [
//               'widgets',
//               {
//                 widget: '!${widget}',
//               },
//             ],
//           ],
//         },
//         {
//           from: ['screens'],
//           message: 'Page must not import upper layers (${dependency.type})',
//           disallow: ['app'],
//         },
//         {
//           from: ['screens'],
//           message: 'Page must not import other page',
//           disallow: [
//             [
//               'screens',
//               {
//                 page: '!${screens}',
//               },
//             ],
//           ],
//         },
//       ],
//     },
//   ],
// };

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@next/eslint-plugin-next'],
  // settings: boundariesSettingsFSD,
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'error',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': ['error', {
      ignoreComments: true,
      code: 120,
    }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'arrow-body-style': 'off',
    'react/button-has-type': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'linebreak-style': ['off', 'unix'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    // ...boundariesRulesFSD,
  },
  ignorePatterns: [
    'next.config.js',
    'src/shared/assets/svg',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
};
