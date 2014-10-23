# grunt-pdepend

> Grunt plugin to run pdepend

## Getting Started
This plugin requires Grunt `~0.4.0`.  You also need to install [http://pdepend.org/](PDepend).  I recommend using [https://packagist.org/packages/pdepend/pdepend](composer).

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
    dir: {
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


#### options.coderankMode
Type: `String`
Default value: `inheritance`

Select the CodeRank strategies to use. Comma separated list of 'inheritance'(default), 'property' and 'method'.


#### options.coverageReport
Type: `String`
Default value: `undefined`

Clover style CodeCoverage report, as produced by PHPUnit's --coverage-clover option.


#### options.configuration
Type: `String`
Default value: `undefined`

Optional PDepend configuration file.


#### options.suffix *Pending*
Type: `Array`
Default value: `undefined`

An array of valid PHP file extensions.


#### options.ignoreDirectories
Type: `Array`
Default value: `undefined`

An array containing the directories you want to ignore.  *Note:* only the name of the individual directory will work here - you can't use a path.


#### options.exclude *Pending*
Type: `Array`
Default value: `undefined`

An array of exclude namespaces.


#### options.withoutAnnotations *Pending*
Type: `Boolean`
Default value: `false`

Do not parse doc comment annotations.


#### options.debug
Type: `Boolean`
Default value: `false`

Prints pdepend debugging information.


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
            summaryXml: 'summaryXml.xml',
            debug: true,
            ignoreDirectories: [
                'test',
                'static'
            ]
        },
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

**0.1.2** Implement Coderank Mode, Coverage Report, configuration file and debug settings.

**0.1.1** Implemented hook for summary XML file.  Implemented ignore directories function.

**0.1.0** Initial release.
