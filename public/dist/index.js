webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {setTimeout(function () {
	$.ajax({
		url: '/user.action',
		method: 'get',
		success: function (arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');
			$('#root').html(liStr);
		},
		error: function (error) {
			console.log(error);
		}
	});
	// post
	$.ajax({
		url: '/list.action',
		method: 'post',
		data: JSON.stringify(['name', 'jrg']),
		success: function (arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');
			$('#shop').html(liStr);
		},
		error: function (error) {
			console.log(error);
		}
	});
}, 1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[2]);
//# sourceMappingURL=index.js.map