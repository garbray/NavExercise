'use strict';

module.exports = function(grunt) {
  grunt.config('jshint', {
    options: {
      jshintrc: '.jshintrc'
    },
    all: [
      '<%= grunt.config.app %>/scripts/**/*.js',
    ]
  });
};