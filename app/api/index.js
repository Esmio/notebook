/*
* api server
*/

module.exports=(url)=>{
	let apiMap = {
		'/list.action': ['jita', 'apple', 'mongodbbook'],
		'/user.action': ['simon', 'male', 'chinese']
	}
	return Promise.resolve(apiMap[url])
}