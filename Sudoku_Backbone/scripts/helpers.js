/**
 * Created by sylvie on 8/5/15.
 */

var calls = [];
var looping = false;

var addCalls = function(call) {
  console.log('adding', call);
  calls.push(call);
};

var popCalls = function() {
  if(calls.length) {
    var call = calls.pop();
    console.log('calling', call);
    for(var i = 0; i < call.length; i++) {
      console.log('  calling fcn', i + ':', call[i].fcn, 'with', call[i].args);
      call[i].fcn.apply(this, call[i].args);
    }
  }
};

var runLoop = function(loop) {
  looping = looping || loop;

  if(looping || calls.length) {
    console.log('looping');
    popCalls();
    setTimeout(function() {
      runLoop();
    }, 1000)
  }
  else console.log('stop looping');
};

var stopLoop = function() {
  looping = false;
};

//var CallLooper = function(callback) {
//  this.calls = [];
//  this.looping = false;
//  this.callback = callback;
//};
//
//CallLooper.prototype.addCalls = function(call) {
//  console.log('adding', call);
//  this.calls.push(call);
//};
//
//CallLooper.prototype.popCalls = function() {
//  if(this.calls.length) {
//    var call = this.calls.pop();
//    console.log('calling', call);
//    for(var i = 0; i < call.length; i++) {
//      console.log('  calling fcn', i + ':', call[i].fcn, 'with', call[i].args);
//      call[i].fcn.apply(this, call[i].args);
//    }
//  }
//};
//
//CallLooper.prototype.runLoop = function(loop) {
//  this.looping = this.looping || loop;
//
//  if(this.looping || this.calls.length) {
//    console.log('this.looping');
//    popCalls();
//    setTimeout(function() {
//      runLoop();
//    }, 1000)
//  }
//  else console.log('stop this.looping');
//};
//
//CallLooper.prototype.stopLoop = function() {
//  this.looping = false;
//};