'use strict';

// External libs.
var path = require('path');
var exec = require('child_process').exec;

exports.init = function(grunt) {

    var exports  = {},
        defaults = {
            // Default options
            bin: 'pdepend',
            jdependChart: undefined,
            jdependXml: undefined,
            overviewPyramid: undefined,
        },
        cliOptions = {
            jdependChart: grunt.option('jdepend-chart'),
            jdependXml: grunt.option('jdepend-xml'),
            overviewPyramid: grunt.option('overview-pyramid'),
        },
        cmd    = null,
        done   = null,
        config = {};

    /**
     * Builds pdepend command
     *
     * @return string
     */
    var buildCommand = function(dir) {

        var cmd = path.normalize(config.bin);

        if (config.jdependChart !== undefined) {
            cmd += ' --jdepend-chart=' + config.jdependChart;
        }

        if (config.jdependXml !== undefined) {
            cmd += ' --jdepend-xml=' + config.jdependXml;
        }

        if (config.overviewPyramid !== undefined) {
            // The minimum severity required to display an error or warning
            cmd += ' --overview-pyramid=' + config.overviewPyramid;
        }

        if (config.summaryXml !== undefined) {
            // The minimum severity required to display an error or warning
            cmd += ' --summary-xml=' + config.summaryXml;
        }

        return cmd;
    };

    /**
     * Setup task before running it
     *
     * @param Object runner
     */
    exports.setup = function(runner) {

        var dir = runner.data.dir,
            attr;

        config  = runner.options(defaults);

        for (attr in cliOptions) {
            if (cliOptions[attr] !== undefined) {
                config[attr] = cliOptions[attr];
            }
        }

        cmd = buildCommand(dir) + ' ' + grunt.file.expand(dir).join(',');

        grunt.log.writeln('Starting pdepend (target: ' + runner.target.cyan + ') in ' + dir.join(' ').cyan);
        grunt.verbose.writeln('Exec: ' + cmd);

        done = runner.async();
    };

    /**
     * Runs pdepend command with options
     *
     */
    exports.run = function() {

        exec(cmd, function(err, stdout, stderr) {

            if (stdout) {
                grunt.log.write(stdout);
            }

            if (err) {
                if (! config.ignoreExitCode) {
                    grunt.fatal(err);
                }
            }
            done();
        });
    };

    return exports;
};