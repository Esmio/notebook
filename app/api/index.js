/*
* api server
*/
let Router = require('./ajax')
module.exports=(ctx)=>{
	let { resCtx, reqCtx } = ctx;
	let { pathname } = reqCtx;
	if(!pathname.match(/\.action/)){
		return Promise.resolve()
	}
	// request ==> handler
	return router.routes(ctx).then(val=>{
		if(val){
			rexCtx.statusCode=200
			resCtx.headers = Object.assign(resCtx.headers, {
				"Content-Type":"application/json"
			})
			resCtx.body = JSON.stringify(val);
		}
	}).catch(err=>{
		resCtx.statusCode=400
		resCtx.body = `${err.name} + ${err.stack}`;
	})
}
	