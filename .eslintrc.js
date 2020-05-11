module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  globals: {
      __PATH_PREFIX__: true,
    },
  "extends": [
  "wesbos"
],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "no-console": 0,
      "prettier/prettier": "error",
      "import/no-extraneous-dependencies": 0,
      "react/jsx-props-no-spreading": 0,

  }
};