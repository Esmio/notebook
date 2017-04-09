/*
* api server
*/

module.exports=(request)=>{
	let { url,method,context } = request;
	let apiMap = {
		'/list.action': ['jita', 'apple', 'mongodbbook'],
		'/user.action': ['simon', 'male', 'chinese']
	}
	method = method.toLowerCase();
	if(method === 'get'){
		return Promise.resolve(apiMap[url])
	}else{
		//post
		let {body} = context
		return Promise.resolve(body);
	}
}
	