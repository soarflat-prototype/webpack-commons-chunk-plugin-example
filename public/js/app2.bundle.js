vendor([0],{

/***/ 2:
/***/ (function(module, exports) {

var moduleA = function () {
  console.log('moduleA!!!');
  console.log('moduleA!!!');
  console.log('moduleA!!!');
  console.log('moduleA!!!');
  console.log('moduleA!!!');
};

module.exports = moduleA;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var velocity = __webpack_require__(1);
var moduleA = __webpack_require__(2);
var text = 'app2';

$('body').html(text);
velocity($('body'), 'fadeOut', {
  duration: 1000
});
moduleA();

/***/ })

},[5]);