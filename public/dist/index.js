webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(2);

setTimeout(function () {
	$.ajax({
		url: '/user.action',
		method: 'get',
		success: function success(arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');
			$('#root').html(liStr);
		},
		error: function error(_error) {
			console.log(_error);
		}
	});
	// post
	$.ajax({
		url: '/list.action',
		method: 'post',
		data: JSON.stringify(['name', 'jrg']),
		success: function success(arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');
			$('#shop').html(liStr);
		},
		error: function error(_error2) {
			console.log(_error2);
		}
	});
}, 1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
],[3]);
//# sourceMappingURL=index.js.map