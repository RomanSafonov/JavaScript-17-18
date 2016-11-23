module.exports = function(grunt) {
    grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

	    // Define our source and build folders

        concat: {
          options: {
              separator: ';'
          },
					js: {
						src: ['src/js/**/*.js'],
						dest: 'dest/js/main.js'
					},
					css: {
						src: ['src/css/*.css'],
						dest: 'dest/css/main.css'
					}
				 },
        uglify: {
            js: {
                src: ['dest/js/main.js'],
                dest: 'dest/js/main.min.js',
            }
        },
				cssmin: {
      css: {
        src: 'dest/css/main.css',
        dest:'dest/css/main.min.css'
      }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
		 grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
