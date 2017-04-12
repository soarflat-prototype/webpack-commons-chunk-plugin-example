webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const $ = __webpack_require__(1);
	const velocity = __webpack_require__(2);
	const text = 'app';

	$('body').html(text);
	velocity($('body'), 'fadeOut', {
	  duration: 1000
	});

/***/ }
]);