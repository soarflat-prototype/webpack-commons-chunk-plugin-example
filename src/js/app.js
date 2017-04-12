var $ = require('jquery');
var velocity = require('velocity-animate');
var text = 'app';

$('body').html(text);
velocity($('body'), 'fadeOut', {
  duration: 1000
});