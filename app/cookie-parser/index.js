/*
 * 处理cookie
 */
const cookie_parser = require('cookie');
const whiteNameList = ['/name_simon']
module.exports = (ctx)=>{
	let {url} = ctx.req;
	let {cookie} = ctx.req.headers;
	let {res, resCtx} = ctx;
	let cookieObj = {}
	cookie && (cookieObj = cookie_parser.parse(cookie.toString()))
	return Promise.resolve({
		then: (resolve, reject)=>{
			let cookieStr = time => `authd=hello;Max-Age=${time}`;
			if(cookieObj['authd']){
				resCtx.hasUser = true;
				res.setHeader('Set-Cookie', cookieStr(3600))
			}
			if(whiteNameList.indexOf(url)>-1){
				console.log('hello')
				res.setHeader('Set-Cookie', cookieStr(3600))
			}
			if(url === '/logout'){
				res.setHeader('Set-Cookie', cookieStr(0))
			}
			// 实现逻辑
			resolve()
		}
	})
}