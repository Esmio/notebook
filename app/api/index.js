/*
* api server
*/

module.exports=(ctx)=>{
	let { pathname,method } = ctx.reqCtx;
	let {resCtx, reqCtx, res} = ctx;
	let apiMap = {
		'/list.action': ['jita', 'apple', 'mongodbbook'],
		'/user.action': ['simon', 'male', 'chinese']
	}
	return Promise.resolve({
		then:(resolve,reject)=>{
			if(pathname.match('action')){
				if(method === 'get'){
					resCtx.body = JSON.stringify(apiMap[pathname])
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
	