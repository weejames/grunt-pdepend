/*
 * grunt-pdepend
 * https://github.com/weejames/grunt-pdepend
 *
 * Copyright (c) 2014 James Constable
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'tasks/lib/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Configuration to be run (and then tested).
        pdepend: {
            default: {
                dir: [
                    'php'
                ],
                options: {
                    bin: 'vendor/bin/pdepend',
                    jdependChart: 'jdependChart.svg',
                    jdependXml: 'jdependXml.xml',
                    overviewPyramid: 'overviewPyramid.svg',
                    summaryXml: 'summaryXml.xml',
                    coderankMode: 'method',
                    debug: true,
                    ignoreDirectories: [
                        'ignore'
                    ]
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: [
                'test/*_test.js'
            ]
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['pdepend', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
