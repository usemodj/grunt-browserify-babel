
module.exports = function (grunt) {
  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    newer: 'grunt-newer',
    eslint: 'grunt-eslint',
    browserify: 'grunt-browserify'
  })
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt)

  grunt.initConfig({
    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    app: {
      // configurable paths
      client: require('./package.json').appPath || '.',
      server: 'server',
      dist: 'dist'
    },

    eslint: {
      options: {
        fix: true,
        configFile: '.eslintrc.json'
        // rulePaths: ['conf/rules']
      }
      // target: ['file.js']
    },

    browserify: {
      development: {
        src: [
          '<%= app.client %>/js/main-home.js',
          '<%= app.client %>/js/main-products.js'
        ],
        dest: '<%= app.server %>/js/common.js',
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [
            ['babelify', {
              'presets': ['env']
            }]
          ],
          plugin: [
            ['factor-bundle', {
              // `opts.o` or `opts.outputs` should be an `array` that pairs up with the `files` array to specify
              // where each bundle output for each entry file(`src`) should be written.
              // The elements in `opts.o` can be `string` filenames, writable `streams`, or `functions`
              // that return a `string filename` or writable `stream`.
              outputs: [
                '<%= app.server %>/js/main-home.js',
                '<%= app.server %>/js/main-products.js'
              ],
              // `opts.threshold` can be a `number` or a function `opts.threshold(row, groups)`
              // where `row` is a `module-deps` object and `groups` is an array of bundles which depend on the row.
              // If the `threshold` function returns `true`, that `row` and all its dependencies will go to the `common` bundle.
              // If `false`, the `row` (but not its dependencies) will go to each bundle in `groups`.
              threshold: function (row, groups) { // go to the `common` bundle file if threshold returns `true`
                // if (/.*a\.js$/.test(row.id)) return false;  // matching row file go to the bundles which depend on the `row`.
                // if (/.*[z]\.js$/.test(row.id)) return true; // matching row file go to the `common` bundle(`common[.min].js`)
                return this._defaultThreshold(row, groups)
              }
            }]
          ]
          // watch: true,
          // keepAlive: true,
        }
      },
      production: {
        src: [
          '<%= app.client %>/js/main-home.js',
          '<%= app.client %>/js/main-products.js'
        ],
        dest: './dist/js/common.min.js',
        options: {
          browserifyOptions: {
            debug: false
          },
          transform: [
            ['babelify', {
              'presets': ['env']
            }]
          ],
          plugin: [
            ['factor-bundle', {
              outputs: [
                '<%= app.dist %>/js/main-home.min.js',
                '<%= app.dist %>/js/main-products.min.js'
              ]
            }],
            ['minifyify', {
              map: false
            }]
          ]
        }
      }
    },
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= app.dist %>/!(.git*|.openshift|Procfile)**'
          ]
        }]
      },
      server: '<%= app.server %>'
    }

  })

  // grunt.loadNpmTasks('grunt-browserify'); // Instead, use `jit-grunt` plugin

  grunt.registerTask('init', function () {
    console.log('> app.client = ', grunt.config('app.client'))
    console.log('> app.dist = ', grunt.config('app.dist'))
    console.log('> app.server = ', grunt.config.process('<%= app.server %>'))

    let dist = grunt.config('app.dist')
    let server = grunt.config('app.server')
    // Like the Node.js `path.join` method,
    if (!grunt.file.exists(dist)) {
      // Works like `mkdir -p`. Create a directory along with any intermediate directories.
      grunt.file.mkdir(dist)
    }
    if (!grunt.file.exists(server)) {
      grunt.file.mkdir(server)
    }
  })

  // build development
  grunt.registerTask('buildDev', [
    'clean:server',
    'init',
    'browserify:development'
  ])

  // build production
  grunt.registerTask('buildProd', [
    'clean:dist',
    'init',
    'browserify:production'
  ])

  // build default
  grunt.registerTask('default', [
    'newer:eslint',
    'buildDev',
    'buildProd'
  ])
}
