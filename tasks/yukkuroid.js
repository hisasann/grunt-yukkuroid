/* grunt-yukkuroid - v0.0.0 - 2013-03-25 */
module.exports = function(grunt) {
  'use strict';
  var objc;

  objc = require('NodObjC');
  objc['import']('Foundation');
  objc['import']('Cocoa');
  return grunt.registerMultiTask('yukkuroid', 'Yukkuroid', function() {
    var e, host, message, options, pool, processName, proxy;

    options = grunt.config('yukkuroid');
    pool = objc.NSAutoreleasePool('alloc')('init');
    processName = objc.NSString('stringWithUTF8String', 'com.yukkuroid.rpc');
    host = objc.NSString('stringWithUTF8String', '');
    proxy = objc.NSConnection('rootProxyForConnectionWithRegisteredName', processName, 'host', host);
    message = objc.NSString('stringWithUTF8String', options.message || 'grunt');
    try {
      proxy('setKanjiText', message);
      proxy('pushPlayButton', 0);
    } catch (_error) {
      e = _error;
      grunt.fail.warn("Yukkuroid is not running.");
    }
    return pool('drain');
  });
};
