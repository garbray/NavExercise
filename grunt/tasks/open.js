'use strict';
module.exports = function(grunt) {
	grunt.config('open', {
    server: {
			url: 'http://localhost:<%= connect.options.port %>'
    },
    testServer: {
      url: 'http://localhost:3000'
    }
  });
};