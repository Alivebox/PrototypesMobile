module.exports = function (grunt) {

    //CONFIGURATION - START

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {

            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '../../resources/css/prototypes.css': '../../resources/stylesheets/bootstrap.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '../../resources/css/prototypes.css': '../../resources/stylesheets/bootstrap.scss'
                }
            }

        },

        watch: {
            files: ['../../resources/stylesheets/**/*.scss'],
            tasks: 'default'
        }

    });

    //CONFIGURATION - END

    //PLUGINS - START

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //PLUGINS - END

    //TASKS - START

    grunt.registerTask('default', ['sass:dev']);

    //TASKS - START

};
