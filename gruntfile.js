'use strict';

module.exports = function (grunt) {

    // load task timming plugin
    require('time-grunt')(grunt);

    // config
    grunt.config.pkg = grunt.file.readJSON('package.json');
    grunt.config.app = 'app';
    grunt.config.dist = 'public';
    // grunt.config.WEINRE_PORT = 8082;
    grunt.config.LIVERELOAD_PORT = 35729;
    grunt.config.SERVER_DEV_PORT = 9000;
    // grunt.config.SERVER_DIST_PORT = 9010;

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // load defualts tasks and configs
    grunt.loadTasks('grunt/');
    grunt.loadTasks('grunt/tasks');
  };