# grunt-browserify-babel
An example setup for ES6 modules with Browserify and Grunt. You can find the accompanying blog post [here](http://mitchgavan.com/es6-modules/)

## Getting Started
Once you've got the code, install the dependencies by navigating to the directory and running the following command:

```
$ yarn install
# Or,
$ npm install

```

## Upgrading to `babel-preset-env`
<https://babeljs.io/env>

Usage: `Yarn` package manager <https://yarnpkg.com/en/docs/cli/>
```
# help:
$ yarn help
$ yarn help add

# `add` or `remove` <package  package  ... > :
$ yarn add <packages ...> [--dev]
$ yarn remove <packages ...>

# install all dependencies for a project :
$ yarn [install]
```

Usage: `npm` package manager
```
# help:
$ npm help
$ npm help install

# `install` or `uninstall` <package  package  ...> :
# Package will appear in your `dependencies`.
# This is the `default`,
$ npm install <packages ...>  [--save-prod]

# Package will appear in your `devDependencies`,
$ npm install <packages ...>  --save-dev

# Package will be removed from your `dependencies`.
$ npm uninstall <packages ...> --save

# Package will be removed from your `devDependencies`.
$ npm uninstall <packages ...> --save-dev

# install all dependencies for a project :
$ npm install
```


### Install `babel-preset-env`
prefer `yarn` to `npm`.

```
# Remove `babel-preset-es2015`:
$ npm uninstall babel-preset-es2015 --save-dev

# Install `babel-preset-env`:
$ yarn add --dev babel-preset-env
# Or,
$ npm install --save-dev babel-preset-env
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
> `ESLint` is a tool for identifying and reporting on patterns found in `ECMAScript/JavaScript` code,
> with the goal of making code more consistent and avoiding bugs.
> In many ways, it is similar to `JSLint` and `JSHint`.
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
