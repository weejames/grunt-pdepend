# grunt-pdepend

> Grunt plugin to run pdepend

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pdepend --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pdepend');
```

## The "pdepend" task

### Overview
In your project's Gruntfile, add a section named `pdepend` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pdepend: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.bin
Type: `String`
Default value: `pdepend`

A path the points at your local installation of pdepend.

#### options.jdependChart
Type: `String`
Default value: `undefined`

The path where you want to write the jdepend chart file to.

#### options.jdependXml
Type: `String`
Default value: `undefined`

The path where you want to write the jdepend package dependency log file to.

#### options.overviewPyramid
Type: `String`
Default value: `undefined`

The path where you want to write the overview pyramid file to.

#### options.summaryXml
Type: `String`
Default value: `undefined`

The path where you want to write the summary xml file to.


### Usage Examples

```js
grunt.initConfig({
    pdepend: {
        dir: [
            'php'
        ],
        options: {
            bin: 'vendor/bin/pdepend',
            jdependChart: 'jdependChart.svg',
            jdependXml: 'jdependXml.xml',
            overviewPyramid: 'overviewPyramid.svg',
            summaryXml: 'summaryXml.xml'
        },
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(No official releases yet)_
