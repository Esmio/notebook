setTimeout(function() {
	$.ajax({
		url : '/user.action',
		method: 'get',
		success: function(arr){
			var liStr = arr.map(function(ele){
				return '<li>'+ele+'</li>'
			}).join('');
			$('#root').html(liStr)
		},
		error: function(error) {
			console.log(error)
		}
	})
	$.ajax({
		url : '/list.action',
		method: 'get',
		success: function(arr){
			var liStr = arr.map(function(ele){
				return '<li>'+ele+'</li>'
			}).join('');
			$('#shop').html(liStr)
		},
		error: function(error) {
			console.log(error)
		}
	})
},1000)

