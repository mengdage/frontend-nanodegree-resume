module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);

  grunt.initConfig( {
    jshint: {
      all: ['js/*.js', 'Gruntfile.js']
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css']
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['jshint:all'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['css/*.js'],
        tasks: ['csslint'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint:all',
    'csslint',
    'watch'
  ]);
};
