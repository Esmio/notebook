/*
* api server
*/

module.exports=(url,method)=>{
	let apiMap = {
		'/list.action': ['jita', 'apple', 'mongodbbook'],
		'/user.action': ['simon', 'male', 'chinese']
	}
	method = method.toLowerCase();
	if(method === 'get'){
		return Promise.resolve(apiMap[url])
	}else{
		//post
		return Promise.resolve(apiMap[url])
	}
}
	