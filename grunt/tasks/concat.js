'use strict';
module.exports = function(grunt) {
  grunt.config('concat', {
    options: {
      banner: '// This file is created on '+ new Date().toString() +'. Any change here will be lost.\n\n',
      separator: ';'
    },
    component: {
      src: [grunt.config.app + '/scripts/*.js'],
      dest: grunt.config.dist + '/scripts/main.js'
    }
  });
};