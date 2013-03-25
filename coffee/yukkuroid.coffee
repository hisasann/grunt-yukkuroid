module.exports = (grunt) ->
  'use strict'

  objc = require 'NodObjC'
  objc['import'] 'Foundation'
  objc['import'] 'Cocoa'

  grunt.registerMultiTask 'yukkuroid', 'Yukkuroid', () ->
    options = grunt.config 'yukkuroid'

    pool = objc.NSAutoreleasePool('alloc')('init')

    processName = objc.NSString 'stringWithUTF8String', 'com.yukkuroid.rpc'
    host = objc.NSString 'stringWithUTF8String', ''
    proxy  = objc.NSConnection 'rootProxyForConnectionWithRegisteredName', processName, 'host', host

    message = objc.NSString 'stringWithUTF8String', options.message || 'grunt'

    try
      proxy 'setKanjiText', message
      proxy 'pushPlayButton', 0
    catch e
      grunt.fail.warn("Yukkuroid is not running.");

    #release
    pool 'drain'