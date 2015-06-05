'use strict';

module.exports = function(grunt) {
  grunt.registerTask('server', [
    'jshint',
    'compass:dev',
    'connect:livereload',
    'open:server',
    'clean:temp',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'clean:dist',
    'compass:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'copy:dist',
    'uglify:dist',
    'usemin',
    'htmlmin',
	  'clean:temp'
  ]);

};