/*
* api server
*/

module.exports=(ctx)=>{
	let { url,method } = ctx.req;
	let {resCtx, reqCtx, res} = ctx;
	let apiMap = {
		'/list.action': ['jita', 'apple', 'mongodbbook'],
		'/user.action': ['simon', 'male', 'chinese']
	}
	method = method.toLowerCase();
	return Promise.resolve({
		then:(resolve,reject)=>{
			if(url.match('action')){
				if(method === 'get'){
					resCtx.body = JSON.stringify(apiMap[url])
				}else{
					//post
					let {body} = reqCtx
					resCtx.body = JSON.stringify(body)
				}
				resCtx.headers = Object.assign(resCtx.headers, {"Content-Type":"application/json"})
			}
			resolve();
		}
	})
}
	