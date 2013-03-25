module.exports = function(grunt) {
  'use strict';  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          'Gruntfile.js': 'Gruntfile.coffee'
        }
      },
      glob_to_multiple: {
        options: {
          bare: true
        },
        expand: true,
        cwd: 'coffee',
        src: ['*.coffee'],
        dest: 'tasks',
        ext: '.js'
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: ['tasks/yukkuroid.js'],
        dest: 'tasks/yukkuroid.js'
      }
    },
    watch: {
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['clean', 'coffee', 'concat']
      }
    },
    clean: {
      build: {
        src: ['js/yukkuroid.js']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  return grunt.registerTask('default', ['clean', 'coffee', 'concat']);
};
