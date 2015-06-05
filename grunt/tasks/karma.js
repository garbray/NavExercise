'use strict';
module.exports = function(grunt) {
  grunt.config('karma', {
    unit: {
      configFile: 'test/karma.conf.js',
      singleRun: true
    }
  });
};