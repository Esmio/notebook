/*
 * 处理cookie
 */
const cookie_parser = require('cookie');
const whiteNameList = ['/name_simon']
module.exports = (ctx)=>{
	let {url} = ctx.req;
	let {cookie} = ctx.req.headers;
	let {res, resCtx} = ctx;
	let cookieObj = cookie_parser.parse(cookie.toString());
	return Promise.resolve({
		then: (resolve, reject)=>{
			if(cookieObj['authd']){
				resCtx.hasUser = true;
				console.log(resCtx)
				
			}
			/*
			let cookieStr = 'authd=true;Max-Age=10000';
			if(whiteNameList.indexOf(url)){
				res.setHeader('Set-Cookie', cookieStr)
			}
			*/
			resolve()
		}
	})
}