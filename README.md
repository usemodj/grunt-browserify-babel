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
$ yarn add --dev jit-grunt time-grunt grunt-contrib-clean grunt-contrib-jshint
```


------------------------------------------


## Build

#### For development:
```
$ grunt buildDev
```

#### For production:
```
$ grunt buildProd
```
