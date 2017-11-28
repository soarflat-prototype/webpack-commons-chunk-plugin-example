vendor([1],[
/* 0 */,
/* 1 */,
/* 2 */
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
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var velocity = __webpack_require__(1);
var moduleA = __webpack_require__(2);
var text = 'app';

$('body').html(text);
velocity($('body'), 'fadeOut', {
  duration: 1000
});
moduleA();

/***/ })
],[4]);