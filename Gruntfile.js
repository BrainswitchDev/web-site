module.exports = function(grunt){
 
    // Project configuration.
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9000,
	        base: 'public/'
	      }
	    }
	  },
	  watch: {
	    project: {
	  	  files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json', 'public/**/*.css'],
	      	options: {
	          livereload: true,
	          watchTask: true
	        }
	      }
	    }
	});

	//https://github.com/gruntjs/grunt-contrib-connect
    grunt.loadNpmTasks('grunt-contrib-connect');
    //https://github.com/gruntjs/grunt-contrib-watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    //https://github.com/shakyShane/grunt-browser-sync
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['connect', 'watch']);
 
};