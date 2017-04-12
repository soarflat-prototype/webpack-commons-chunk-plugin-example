const $ = require('jquery');
const velocity = require('velocity-animate');
const text = 'app';

$('body').html(text);
velocity($('body'), 'fadeOut', {
  duration: 1000
});