module.exports = function(grunt) {

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    browserify: 'grunt-browserify',
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);


  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),

    app: {
      // configurable paths
      client: require('./package.json').appPath || '.',
      server: 'server',
      dist: 'dist'
    },

    browserify: {
      development: {
        src: [
          "<%= app.client %>/js/main-home.js",
          "<%= app.client %>/js/main-products.js"
        ],
        dest: '<%= app.server %>/js/common.js',
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [
            ["babelify", {
              "presets": ["env"]
            }]
          ],
          plugin: [
            ["factor-bundle", {
              outputs: [
                "<%= app.server %>/js/main-home.js",
                "<%= app.server %>/js/main-products.js"
              ]
            }]
          ],
          watch: true,
          keepAlive: true,
        }
      },
      production: {
        src: [
          "<%= app.client %>/js/main-home.js",
          "<%= app.client %>/js/main-products.js"
        ],
        dest: './dist/js/common.min.js',
        options: {
          browserifyOptions: {
            debug: false
          },
          transform: [
            ["babelify", {
              "presets": ["env"]
            }]
          ],
          plugin: [
            ["factor-bundle", {
              outputs: [
                "<%= app.dist %>/js/main-home.min.js",
                "<%= app.dist %>/js/main-products.min.js"
              ]
            }],
            ["minifyify", {
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
    },

  });

  // grunt.loadNpmTasks('grunt-browserify'); // instead use `jit-grunt` plugin

  grunt.registerTask("init", function(){
    console.log('> app.dist = ', grunt.config('app.dist'));
    console.log('> app.server = ', grunt.config.process('<%= app.server %>'));
    
    let dist = grunt.config('app.dist');
    let server = grunt.config('app.server');
    // Like the Node.js `path.join` method,
    if (!grunt.file.exists(dist)) {
      // Works like `mkdir -p`. Create a directory along with any intermediate directories.
      grunt.file.mkdir(dist);
    }

    if (!grunt.file.exists(server)) {
      grunt.file.mkdir(server);
    }
  });

  grunt.registerTask("buildDev", [
    'clean:server',
    'init',
    'browserify:development'
  ]);
  grunt.registerTask("buildProd", [
    'clean:dist',
    'init',
    'browserify:production'
  ]);

};
