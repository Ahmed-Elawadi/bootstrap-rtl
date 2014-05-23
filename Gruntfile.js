module.exports = function(grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({
    // Read package.json Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*******************************************************************************\n' +
            ' *              <%= pkg.name %> (Version <%= pkg.version %>)\n' +
            ' *      Author: <%= pkg.author %>\n' +
            ' *  Created on: <%= grunt.template.today("mmmm dd,yyyy") %>\n' +
            ' *     Project: <%= pkg.name %>\n' +
            ' *   Copyright: See the file "LICENSE" for the full license governing this code.\n' +
            ' *******************************************************************************/\n',
    less: {
      rtlTheme: {
        options: {
          strictMath: true,
          cleancss: false
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/bootstrap-rtl.less'
        }
      },
      minify: {
        options: {
          cleancss: true
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css',
        }
      }
    },

    usebanner: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true

        },
        files: {
          src: ['dist/css/<%= pkg.name %>.css', 'dist/css/<%= pkg.name %>.min.css']
        }        
    }
  });


// Load uglify plugin
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-banner');

// Default Task
grunt.registerTask('default', ['less', 'usebanner']);
};