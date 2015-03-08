module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "stylesheets/app.css": "stylesheets/less/app.less",
          "stylesheets/base.css": "stylesheets/less/base.less",
          "stylesheets/fonts.css": "stylesheets/less/fonts.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['stylesheets/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};