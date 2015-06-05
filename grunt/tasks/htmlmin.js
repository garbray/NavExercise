'use strict';
module.exports = function(grunt) {
  grunt.config('htmlmin',{
    dist: {
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        removeCommentsFromCDATA: true,
        removeOptionalTags: true
      },
      files: [{
        expand: true,
        cwd: '<%= grunt.config.dist %>',
        src: ['*.html', 'views/{,*/}*.html'],
        dest: '<%= grunt.config.dist %>'
      }]
    }
  });
};