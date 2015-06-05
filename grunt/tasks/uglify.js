'use strict';
module.exports = function(grunt) {
	grunt.config('uglify', {
    dist: {
      files: {
        '<%= grunt.config.dist %>/scripts/main.js': [
          '<%= grunt.config.dist %>/scripts/main.js'
        ]
      }
    }
	});
};