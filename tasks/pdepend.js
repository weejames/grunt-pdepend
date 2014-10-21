/*
 * grunt-pdepend
 * https://github.com/weejames/grunt-pdepend
 *
 * Copyright (c) 2014 James Constable
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Internal lib.
    var pdepend = require('./lib/pdepend').init(grunt);

    grunt.registerMultiTask('pdepend', 'Grunt plugin to run pdepend.', function() {

        pdepend.setup(this);
        pdepend.run();

    });

};
