vendor([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var velocity = __webpack_require__(2);
	var moduleA = __webpack_require__(3);
	var text = 'app';

	$('body').html(text);
	velocity($('body'), 'fadeOut', {
	  duration: 1000
	});
	moduleA();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	var moduleA = function () {
	  console.log('moduleA!!!');
	  console.log('moduleA!!!');
	  console.log('moduleA!!!');
	  console.log('moduleA!!!');
	  console.log('moduleA!!!');
	};

	module.exports = moduleA;

/***/ }
]);