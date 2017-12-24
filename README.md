# grunt-browserify-babel
An example setup for ES6 modules with Browserify and Grunt. You can find the accompanying blog post [here](http://mitchgavan.com/es6-modules/)

## Getting Started
Once you've got the code, install the dependencies by navigating to the directory and running the following command:

```
npm install

```

## Upgrading to `babel-preset-env`
<https://babeljs.io/env>

### Install `babel-preset-env`
```
# Remove `babel-preset-es2015`:
$ npm uninstall babel-preset-es2015 --save-dev

# Install `babel-preset-env`:
$ yarn add --dev babel-preset-env
```

### Basic `.babelrc` change
```
{
  "presets": ["env"]
}
```

### Install other useful grunt plugins:
```
$ yarn add --dev jit-grunt time-grunt grunt-newer grunt-contrib-clean grunt-contrib-eshint

```

### Install `eslint`:
 <https://eslint.org/docs/user-guide/getting-started>
```
$ yarn add --dev eslint  grunt-eslint
```

Setup a `eslint` configuration file:
```
$ ./node_modules/.bin/eslint --init
```

After that, you can run `ESLint` in your project’s root directory like this:
```
$ ./node_modules/.bin/eslint yourfile.js
```
Any plugins or shareable configs that you use must also be installed locally to work with a locally-installed ESLint.


------------------------------------------


## Build

#### For default all:
```
$ grunt
```

#### For development:
```
$ grunt buildDev
```

#### For production:
```
$ grunt buildProd
```
