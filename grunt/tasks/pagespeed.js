'use strict';
module.exports = function(grunt) {
  grunt.config('pagespeed', {
    dev: {
      options: {
        strategy: 'desktop',
        threshold: 80,
        nokey: true,
        url: 'http://localhost:9000'
      }
    }
  });
};