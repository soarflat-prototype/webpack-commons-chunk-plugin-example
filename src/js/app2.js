var $ = require('jquery');
var velocity = require('velocity-animate');
var moduleA = require('./modules/moduleA');
var text = 'app2';

$('body').html(text);
velocity($('body'), 'fadeOut', {
  duration: 1000
});
moduleA();