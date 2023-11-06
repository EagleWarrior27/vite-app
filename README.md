# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Steps to create a Vite TS Project
```js
   npm create vite@latest . >> TypeScript
```

## Material UI Implementation
### Default installation
```js
   npm i @mui/material @emotion/react @emotion/styled
```

### Roboto font
```js
   npm i @fontsource/roboto 
```
- ./src/main.tsx
```js
   import '@fontsource/roboto/300.css'; 
   import '@fontsource/roboto/400.css'; 
   import '@fontsource/roboto/500.css'; 
   import '@fontsource/roboto/700.css';
```

### Icons
```js
   npm i @mui/icons-material
```

## Tailwind Implementation
### Install Tailwind CSS
```js
   npm i -D tailwindcss postcss autoprefixer 
   npx tailwindcss init -p
```
### Configure your template paths
- ./tailwind.config.js 
```js
/** @type {import('tailwindcss').Config} */ 
   export default { 
      content: [ 
         "./index.html", 
         "./src/**/.{js,ts,jsx,tsx}", 
      ], 
      theme: { 
         extend: {}, 
      }, 
      plugins: [], 
   }
```
### Add the Tailwind directives to your CSS
- ./src/index.css
```js
   @tailwind base; 
   @tailwind components; 
   @tailwind utilities;
```

## Bootstrap Implementation
### Installation
```js
   npm i react-bootstrap bootstrap
```

### Stylesheets
- ./src/main.tsx
```js
   import 'bootstrap/dist/css/bootstrap.min.css'
```
