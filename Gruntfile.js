module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dev/sass',
          src: ['*.scss'],
          dest: 'dev/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dev/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: {  
      dev: {
          files: [{
            expand: true,
            cwd: 'dev/processedHtml',
            src: ['**/*.html'],
            dest: 'public'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'dev/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/img/'
        }]
      }
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'dev/js',
          src: '**/*.js',
          dest: 'public/js'
        }]
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /http\:\/\/localhost\:9001/g,
              replacement: ''
            },
            {
              match: /\.css/g,
              replacement: '.min.css'
            }
          ]
        },
        files: [
          {
            expand: true, 
            flatten: true, 
            src: ['dev/html/**/*.html'], 
            dest: 'dev/processedHtml'
          }
        ]
      }
    },
    connect: {
      testPageServer: {
        options: {
          port: 9000,
          base: 'dev/html'
        }
      },
      testMediaServer: {
        options: {
          port: 9001,
          base: 'dev'
        }
      },
      publicPageServer: {
        options: {
          port: 9004,
          base: 'public'
        }
      }
    },
    watch: {
      styles: {
        files: 'dev/sass/**/*.scss',
        tasks: ['sass'],
        options: {
          interrupt: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:testPageServer', 'connect:testMediaServer', 'watch']);
  grunt.registerTask('createStyles', ['sass', 'cssmin']);
  grunt.registerTask('runPublicServer', function(){
    grunt.task.run('connect:publicPageServer:keepalive');
  });
  grunt.registerTask('createPublic', ['sass', 'cssmin', 'htmlmin', 'imagemin', 'uglify']);
};