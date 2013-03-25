# grunt-yukkuroid

> BoyomiChan should inform you of the completion of the compilation grunt

## Getting Started

Please start to install [yukkuroid](http://www.yukkuroid.com/yukkuroid/).

This plugin requires Grunt ~0.4.0

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install grunt-yukkuroid

Please keep yukkuroid launch.
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-yukkuroid');


## Yukkuroid task
_Run this task with the `grunt yukkuroid` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Options

#### message

Type: `String`
Default: grunt

Please set the language you want to read BoyomiChan.


### Usage Examples

	// Project configuration.
	grunt.initConfig({
	  yukkuroid: {
	    message: 'success'
	  }
	});

	// load yukkuroid
	grunt.loadNpmTasks "grunt-yukkuroid"


	# Default task.
	grunt.registerTask "default", ["example", "yukkuroid"]
	
enjoy!